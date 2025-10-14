import fetch from "node-fetch";

const API_BASE = "http://localhost:3001";

async function testUserRegistration() {
  console.log("🧪 Testing User Registration API...\n");

  try {
    // Test data
    const testUser = {
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "+91 9876543210",
      course: "AI Accelerating Mastery Course (4 Months)",
      experience: "Beginner (0-1 years)"
    };

    console.log("📝 Test User Data:");
    console.log(JSON.stringify(testUser, null, 2));
    console.log("\n");

    // Test registration
    console.log("🚀 Sending registration request...");
    const response = await fetch(`${API_BASE}/api/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(testUser),
    });

    const result = await response.json();

    console.log("📊 Response Status:", response.status);
    console.log("📋 Response Body:");
    console.log(JSON.stringify(result, null, 2));

    if (response.ok && result.success) {
      console.log("\n✅ Registration test PASSED!");
      console.log(`👤 User ID: ${result.user.id}`);
      console.log(`📅 Registration Date: ${result.user.registrationDate}`);
    } else {
      console.log("\n❌ Registration test FAILED!");
      console.log(`Error: ${result.error || "Unknown error"}`);
    }

  } catch (error) {
    console.error("\n💥 Test failed with error:", error.message);
  }
}

// Test duplicate email
async function testDuplicateEmail() {
  console.log("\n🔄 Testing duplicate email validation...\n");

  try {
    const duplicateUser = {
      name: "Jane Doe",
      email: "john.doe@example.com", // Same email as previous test
      phone: "+91 9876543211",
      course: "Full Stack Development & Web Page Building (3 Months)",
      experience: "Intermediate (1-3 years)"
    };

    const response = await fetch(`${API_BASE}/api/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(duplicateUser),
    });

    const result = await response.json();

    console.log("📊 Response Status:", response.status);
    console.log("📋 Response Body:");
    console.log(JSON.stringify(result, null, 2));

    if (response.status === 409 && result.error === "User already exists") {
      console.log("\n✅ Duplicate email validation PASSED!");
    } else {
      console.log("\n❌ Duplicate email validation FAILED!");
    }

  } catch (error) {
    console.error("\n💥 Duplicate email test failed:", error.message);
  }
}

// Test get all users
async function testGetUsers() {
  console.log("\n📋 Testing get all users...\n");

  try {
    const response = await fetch(`${API_BASE}/api/users`);
    const result = await response.json();

    console.log("📊 Response Status:", response.status);
    console.log("📋 Response Body:");
    console.log(JSON.stringify(result, null, 2));

    if (response.ok && result.success) {
      console.log("\n✅ Get users test PASSED!");
      console.log(`👥 Total users: ${result.count}`);
    } else {
      console.log("\n❌ Get users test FAILED!");
    }

  } catch (error) {
    console.error("\n💥 Get users test failed:", error.message);
  }
}

// Run all tests
async function runAllTests() {
  console.log("🎯 Starting User Registration API Tests\n");
  console.log("=" * 50);

  await testUserRegistration();
  await testDuplicateEmail();
  await testGetUsers();

  console.log("\n" + "=" * 50);
  console.log("🏁 All tests completed!");
}

// Check if server is running
async function checkServerHealth() {
  try {
    const response = await fetch(`${API_BASE}/health`);
    const result = await response.json();
    
    if (response.ok && result.status === "healthy") {
      console.log("✅ Server is running and healthy");
      return true;
    } else {
      console.log("❌ Server health check failed");
      return false;
    }
  } catch (error) {
    console.log("❌ Server is not running or not accessible");
    console.log("💡 Make sure to start the server with: npm run dev");
    return false;
  }
}

// Main execution
async function main() {
  const isServerRunning = await checkServerHealth();
  
  if (isServerRunning) {
    await runAllTests();
  } else {
    console.log("\n🚫 Cannot run tests - server is not running");
    process.exit(1);
  }
}

main().catch(console.error);
