#!/usr/bin/env node

/**
 * Test script to verify frontend-backend connection
 * Run this after deploying both frontend and backend
 */

const https = require('https');

// Configuration
const BACKEND_URL = 'https://test-kin-g.onrender.com';
const FRONTEND_URL = process.env.FRONTEND_URL || 'https://your-frontend-domain.vercel.app';

console.log('🔗 Testing Frontend-Backend Connection');
console.log('=' .repeat(50));
console.log(`📍 Backend: ${BACKEND_URL}`);
console.log(`📍 Frontend: ${FRONTEND_URL}`);
console.log('');

// Test functions
function testBackendHealth() {
  return new Promise((resolve) => {
    console.log('🧪 Testing Backend Health...');
    
    https.get(`${BACKEND_URL}/health`, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        try {
          const response = JSON.parse(data);
          if (res.statusCode === 200 && response.status === 'healthy') {
            console.log('✅ Backend Health: PASSED');
            console.log(`   Status: ${response.status}`);
            console.log(`   Environment: ${response.environment}`);
            console.log(`   Port: ${response.port}`);
            resolve(true);
          } else {
            console.log('❌ Backend Health: FAILED');
            console.log(`   Status Code: ${res.statusCode}`);
            console.log(`   Response: ${data}`);
            resolve(false);
          }
        } catch (error) {
          console.log('❌ Backend Health: FAILED (Invalid JSON)');
          console.log(`   Response: ${data}`);
          resolve(false);
        }
      });
    }).on('error', (error) => {
      console.log('❌ Backend Health: FAILED (Network Error)');
      console.log(`   Error: ${error.message}`);
      resolve(false);
    });
  });
}

function testEmailAPI() {
  return new Promise((resolve) => {
    console.log('\n🧪 Testing Email API...');
    
    https.get(`${BACKEND_URL}/api/test-email`, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        try {
          const response = JSON.parse(data);
          if (res.statusCode === 200 && response.success) {
            console.log('✅ Email API: PASSED');
            console.log(`   Message: ${response.message}`);
            resolve(true);
          } else {
            console.log('❌ Email API: FAILED');
            console.log(`   Status Code: ${res.statusCode}`);
            console.log(`   Response: ${data}`);
            resolve(false);
          }
        } catch (error) {
          console.log('❌ Email API: FAILED (Invalid JSON)');
          console.log(`   Response: ${data}`);
          resolve(false);
        }
      });
    }).on('error', (error) => {
      console.log('❌ Email API: FAILED (Network Error)');
      console.log(`   Error: ${error.message}`);
      resolve(false);
    });
  });
}

function testRazorpayAPI() {
  return new Promise((resolve) => {
    console.log('\n🧪 Testing Razorpay API...');
    
    const postData = JSON.stringify({
      amount: 15000,
      currency: 'INR'
    });
    
    const options = {
      hostname: 'test-kin-g.onrender.com',
      port: 443,
      path: '/api/razorpay/create-order',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      }
    };
    
    const req = https.request(options, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        try {
          const response = JSON.parse(data);
          if (res.statusCode === 200 && response.success) {
            console.log('✅ Razorpay API: PASSED');
            console.log(`   Order ID: ${response.order.id}`);
            console.log(`   Amount: ${response.order.amount}`);
            resolve(true);
          } else {
            console.log('❌ Razorpay API: FAILED');
            console.log(`   Status Code: ${res.statusCode}`);
            console.log(`   Response: ${data}`);
            resolve(false);
          }
        } catch (error) {
          console.log('❌ Razorpay API: FAILED (Invalid JSON)');
          console.log(`   Response: ${data}`);
          resolve(false);
        }
      });
    });
    
    req.on('error', (error) => {
      console.log('❌ Razorpay API: FAILED (Network Error)');
      console.log(`   Error: ${error.message}`);
      resolve(false);
    });
    
    req.write(postData);
    req.end();
  });
}

function testCORS() {
  return new Promise((resolve) => {
    console.log('\n🧪 Testing CORS Configuration...');
    
    const options = {
      hostname: 'test-kin-g.onrender.com',
      port: 443,
      path: '/health',
      method: 'GET',
      headers: {
        'Origin': FRONTEND_URL,
        'Access-Control-Request-Method': 'GET'
      }
    };
    
    https.get(options, (res) => {
      const corsHeaders = res.headers['access-control-allow-origin'];
      
      if (corsHeaders && (corsHeaders === '*' || corsHeaders.includes(FRONTEND_URL))) {
        console.log('✅ CORS Configuration: PASSED');
        console.log(`   Allowed Origin: ${corsHeaders}`);
        resolve(true);
      } else {
        console.log('❌ CORS Configuration: FAILED');
        console.log(`   CORS Headers: ${JSON.stringify(corsHeaders)}`);
        resolve(false);
      }
    }).on('error', (error) => {
      console.log('❌ CORS Test: FAILED (Network Error)');
      console.log(`   Error: ${error.message}`);
      resolve(false);
    });
  });
}

// Run all tests
async function runAllTests() {
  console.log('🚀 Starting Connection Tests...\n');
  
  const results = await Promise.all([
    testBackendHealth(),
    testEmailAPI(),
    testRazorpayAPI(),
    testCORS()
  ]);
  
  const passed = results.filter(Boolean).length;
  const total = results.length;
  
  console.log('\n' + '=' .repeat(50));
  console.log(`📊 Test Results: ${passed}/${total} tests passed`);
  
  if (passed === total) {
    console.log('🎉 All tests passed! Your frontend and backend are connected correctly.');
    console.log('\n✅ Next steps:');
    console.log('   1. Deploy your frontend to Vercel');
    console.log('   2. Set VITE_BACKEND_API_URL in Vercel environment variables');
    console.log('   3. Update CORS_ORIGIN in Render to match your Vercel domain');
  } else {
    console.log('⚠️  Some tests failed. Check the logs above for details.');
    console.log('\n🔧 Troubleshooting:');
    console.log('   1. Ensure backend is deployed and running on Render');
    console.log('   2. Check environment variables in Render dashboard');
    console.log('   3. Verify CORS configuration');
  }
}

// Run tests if this file is executed directly
if (require.main === module) {
  runAllTests().catch(console.error);
}

module.exports = { runAllTests, testBackendHealth, testEmailAPI, testRazorpayAPI, testCORS };
