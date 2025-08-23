import express from 'express';
import Razorpay from 'razorpay';
import crypto from 'crypto';
import { config } from '../config.js';

const router = express.Router();

// Initialize Razorpay with config
const razorpay = new Razorpay({
  key_id: config.razorpay.keyId,
  key_secret: config.razorpay.keySecret,
});

// Verify Razorpay configuration
try {
  await razorpay.orders.all({ count: 1 });
  console.log('✅ Razorpay configuration verified successfully');
} catch (error) {
  console.error('❌ Razorpay configuration error:', error.message);
}

// Create order
router.post('/create-order', async (req, res) => {
  try {
    const { amount, currency = 'INR', receipt } = req.body;

    if (!amount || amount <= 0) {
      return res.status(400).json({ 
        success: false,
        error: 'Invalid amount. Amount must be greater than 0.' 
      });
    }

    const options = {
      amount: Math.round(amount * 100), // Convert to paise
      currency,
      receipt: receipt || `receipt_${Date.now()}`,
      payment_capture: 1,
    };

    const order = await razorpay.orders.create(options);
    console.log('✅ Order created successfully:', order.id);
    
    res.json({
      success: true,
      order: {
        id: order.id,
        amount: order.amount,
        currency: order.currency,
        receipt: order.receipt,
        created_at: order.created_at,
      },
    });
  } catch (error) {
    console.error('❌ Error creating order:', error);
    res.status(500).json({ 
      success: false,
      error: 'Failed to create order',
      details: config.nodeEnv === 'development' ? error.message : 'Internal server error'
    });
  }
});

// Verify payment signature
router.post('/verify-payment', async (req, res) => {
  try {
    const { 
      razorpay_order_id, 
      razorpay_payment_id, 
      razorpay_signature 
    } = req.body;

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return res.status(400).json({ 
        success: false,
        error: 'Missing payment details. All payment parameters are required.' 
      });
    }

    // Verify signature
    const text = `${razorpay_order_id}|${razorpay_payment_id}`;
    const signature = crypto
      .createHmac('sha256', config.razorpay.keySecret)
      .update(text)
      .digest('hex');

    if (signature !== razorpay_signature) {
      console.error('❌ Invalid payment signature');
      return res.status(400).json({ 
        success: false,
        error: 'Invalid payment signature. Payment verification failed.' 
      });
    }

    // Get payment details from Razorpay
    const payment = await razorpay.payments.fetch(razorpay_payment_id);
    
    if (payment.status !== 'captured') {
      console.error('❌ Payment not captured:', payment.status);
      return res.status(400).json({ 
        success: false,
        error: `Payment not captured. Current status: ${payment.status}` 
      });
    }

    console.log('✅ Payment verified successfully:', payment.id);
    res.json({
      success: true,
      payment: {
        id: payment.id,
        order_id: payment.order_id,
        amount: payment.amount,
        currency: payment.currency,
        status: payment.status,
        method: payment.method,
        captured_at: payment.captured_at,
        created_at: payment.created_at,
      },
    });
  } catch (error) {
    console.error('❌ Error verifying payment:', error);
    res.status(500).json({ 
      success: false,
      error: 'Failed to verify payment',
      details: config.nodeEnv === 'development' ? error.message : 'Internal server error'
    });
  }
});

// Get payment details
router.get('/payment/:paymentId', async (req, res) => {
  try {
    const { paymentId } = req.params;
    
    if (!paymentId) {
      return res.status(400).json({ 
        success: false,
        error: 'Payment ID is required' 
      });
    }

    const payment = await razorpay.payments.fetch(paymentId);
    console.log('✅ Payment details fetched successfully:', payment.id);
    
    res.json({
      success: true,
      payment: {
        id: payment.id,
        order_id: payment.order_id,
        amount: payment.amount,
        currency: payment.currency,
        status: payment.status,
        method: payment.method,
        created_at: payment.created_at,
        captured_at: payment.captured_at,
        description: payment.description,
        email: payment.email,
        contact: payment.contact,
      },
    });
  } catch (error) {
    console.error('❌ Error fetching payment details:', error);
    res.status(500).json({ 
      success: false,
      error: 'Failed to fetch payment details',
      details: config.nodeEnv === 'development' ? error.message : 'Internal server error'
    });
  }
});

// Get all orders (for admin purposes)
router.get('/orders', async (req, res) => {
  try {
    const { count = 10, from, to } = req.query;
    
    const options = {
      count: parseInt(count),
      from: from ? parseInt(from) : undefined,
      to: to ? parseInt(to) : undefined,
    };

    const orders = await razorpay.orders.all(options);
    console.log('✅ Orders fetched successfully');
    
    res.json({
      success: true,
      orders: orders.items.map(order => ({
        id: order.id,
        amount: order.amount,
        currency: order.currency,
        receipt: order.receipt,
        status: order.status,
        created_at: order.created_at,
      })),
      count: orders.count,
      total: orders.total,
    });
  } catch (error) {
    console.error('❌ Error fetching orders:', error);
    res.status(500).json({ 
      success: false,
      error: 'Failed to fetch orders',
      details: config.nodeEnv === 'development' ? error.message : 'Internal server error'
    });
  }
});

export default router;
