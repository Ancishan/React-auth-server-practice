require('dotenv').config();

const secretKey = process.env.JWT_SECRET; // Use the correct key name

if (!secretKey) {
    console.error("❌ JWT Secret Key is missing!");
    process.exit(1); // Stop the server if secretKey is missing
}

console.log("✅ JWT Secret Key Loaded:", secretKey); 

module.exports = { secretKey };
