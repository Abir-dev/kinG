import React from 'react';
import { config, getApiUrl } from '../config/env';

const DebugEnv: React.FC = () => {
  const isProduction = config.server.nodeEnv === 'production';
  
  return (
    <div style={{ 
      position: 'fixed', 
      bottom: '20px', 
      right: '20px', 
      background: '#1a1a1a', 
      color: '#fff', 
      padding: '15px', 
      borderRadius: '8px', 
      fontSize: '12px', 
      fontFamily: 'monospace',
      maxWidth: '300px',
      zIndex: 9999,
      border: '1px solid #333'
    }}>
      <h4 style={{ margin: '0 0 10px 0', color: '#00ff00' }}>🔧 Environment Debug</h4>
      
      <div style={{ marginBottom: '8px' }}>
        <strong>Environment:</strong> {config.server.nodeEnv}
      </div>
      
      <div style={{ marginBottom: '8px' }}>
        <strong>Backend URL:</strong> {config.server.apiUrl}
      </div>
      
      <div style={{ marginBottom: '8px' }}>
        <strong>Razorpay Key:</strong> {config.razorpay.keyId ? '✅ Set' : '❌ Missing'}
      </div>
      
      <div style={{ marginBottom: '8px' }}>
        <strong>EmailJS Service:</strong> {config.emailjs.serviceId ? '✅ Set' : '❌ Missing'}
      </div>
      
      <div style={{ marginBottom: '8px' }}>
        <strong>EmailJS Template:</strong> {config.emailjs.templateId ? '✅ Set' : '❌ Missing'}
      </div>
      
      <div style={{ marginBottom: '8px' }}>
        <strong>EmailJS Public Key:</strong> {config.emailjs.publicKey ? '✅ Set' : '❌ Missing'}
      </div>
      
      <div style={{ marginBottom: '8px', fontSize: '10px', color: '#ccc' }}>
        <strong>Service ID:</strong> {config.emailjs.serviceId || 'Not set'}<br/>
        <strong>Template ID:</strong> {config.emailjs.templateId || 'Not set'}<br/>
        <strong>Public Key:</strong> {config.emailjs.publicKey ? 'Set' : 'Not set'}
      </div>
      
      <div style={{ marginBottom: '8px' }}>
        <strong>API Test:</strong> {getApiUrl('api/razorpay/create-order')}
      </div>
      
      <div style={{ marginBottom: '8px' }}>
        <strong>Production Mode:</strong> {isProduction ? '✅ Yes' : '❌ No'}
      </div>
      
      <button 
        onClick={() => {
          console.log('Environment Config:', config);
          console.log('API URL Test:', getApiUrl('api/razorpay/create-order'));
        }}
        style={{
          background: '#007bff',
          color: '#fff',
          border: 'none',
          padding: '5px 10px',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '10px'
        }}
      >
        Log to Console
      </button>
      
      <button 
        onClick={() => {
          fetch(getApiUrl('health'))
            .then(res => res.json())
            .then(data => console.log('Health Check:', data))
            .catch(err => console.error('Health Check Error:', err));
        }}
        style={{
          background: '#28a745',
          color: '#fff',
          border: 'none',
          padding: '5px 10px',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '10px',
          marginLeft: '5px'
        }}
      >
        Test Backend
      </button>
      
      <button 
        onClick={() => {
          console.log('EmailJS Config:', {
            serviceId: config.emailjs.serviceId,
            templateId: config.emailjs.templateId,
            publicKey: config.emailjs.publicKey ? 'Set' : 'Not set'
          });
        }}
        style={{
          background: '#ff6b35',
          color: '#fff',
          border: 'none',
          padding: '5px 10px',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '10px',
          marginLeft: '5px',
          marginTop: '5px'
        }}
      >
        Test EmailJS
      </button>
    </div>
  );
};

export default DebugEnv;
