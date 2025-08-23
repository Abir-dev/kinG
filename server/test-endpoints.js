import fetch from 'node-fetch';

const BASE_URL = process.env.TEST_URL || 'https://test-kin-g.onrender.com';

const tests = [
  {
    name: 'Health Check',
    method: 'GET',
    endpoint: '/health',
    expectedStatus: 200
  },
  {
    name: 'Test Email Configuration',
    method: 'GET',
    endpoint: '/api/test-email',
    expectedStatus: 200
  },
  {
    name: 'Create Razorpay Order',
    method: 'POST',
    endpoint: '/api/razorpay/create-order',
    body: { amount: 15000, currency: 'INR' },
    expectedStatus: 200
  },
  {
    name: 'Get Razorpay Orders',
    method: 'GET',
    endpoint: '/api/razorpay/orders',
    expectedStatus: 200
  }
];

async function runTest(test) {
  try {
    console.log(`\n🧪 Testing: ${test.name}`);
    console.log(`${test.method} ${BASE_URL}${test.endpoint}`);
    
    const options = {
      method: test.method,
      headers: {
        'Content-Type': 'application/json'
      }
    };
    
    if (test.body) {
      options.body = JSON.stringify(test.body);
    }
    
    const response = await fetch(`${BASE_URL}${test.endpoint}`, options);
    const data = await response.json();
    
    if (response.status === test.expectedStatus) {
      console.log(`✅ ${test.name}: PASSED (${response.status})`);
      if (test.name === 'Health Check') {
        console.log(`   Server: ${data.status}`);
        console.log(`   Environment: ${data.environment}`);
        console.log(`   Port: ${data.port}`);
      }
    } else {
      console.log(`❌ ${test.name}: FAILED`);
      console.log(`   Expected: ${test.expectedStatus}, Got: ${response.status}`);
      console.log(`   Response:`, data);
    }
    
    return response.status === test.expectedStatus;
  } catch (error) {
    console.log(`❌ ${test.name}: ERROR`);
    console.log(`   ${error.message}`);
    return false;
  }
}

async function runAllTests() {
  console.log('🚀 Starting Backend Endpoint Tests');
  console.log(`📍 Base URL: ${BASE_URL}`);
  console.log('=' .repeat(50));
  
  let passed = 0;
  let total = tests.length;
  
  for (const test of tests) {
    const result = await runTest(test);
    if (result) passed++;
    
    // Add delay between tests to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  console.log('\n' + '=' .repeat(50));
  console.log(`📊 Test Results: ${passed}/${total} tests passed`);
  
  if (passed === total) {
    console.log('🎉 All tests passed! Your backend is working correctly.');
  } else {
    console.log('⚠️  Some tests failed. Check the logs above for details.');
  }
}

// Run tests if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  runAllTests().catch(console.error);
}

export { runAllTests, runTest };
