#!/usr/bin/env node

import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('🚀 Starting KinG LMS Backend Development Server');
console.log('=' .repeat(50));

// Check if node_modules exists
const nodeModulesPath = join(__dirname, 'node_modules');
const fs = await import('fs');

if (!fs.existsSync(nodeModulesPath)) {
  console.log('📦 Installing dependencies...');
  const install = spawn('npm', ['install'], { 
    cwd: __dirname, 
    stdio: 'inherit' 
  });
  
  install.on('close', (code) => {
    if (code === 0) {
      startServer();
    } else {
      console.error('❌ Failed to install dependencies');
      process.exit(1);
    }
  });
} else {
  startServer();
}

function startServer() {
  console.log('✅ Dependencies ready');
  console.log('🌍 Starting server in development mode...');
  console.log('📡 Server will be available at: http://localhost:3001');
  console.log('🔗 Health check: http://localhost:3001/health');
  console.log('📧 Test email: http://localhost:3001/api/test-email');
  console.log('💳 Test Razorpay: http://localhost:3001/api/razorpay/create-order');
  console.log('\nPress Ctrl+C to stop the server');
  console.log('=' .repeat(50));
  
  const server = spawn('npm', ['run', 'dev'], { 
    cwd: __dirname, 
    stdio: 'inherit' 
  });
  
  server.on('close', (code) => {
    console.log(`\n🛑 Server stopped with code ${code}`);
    process.exit(code);
  });
}
