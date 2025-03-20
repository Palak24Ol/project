require('dotenv').config(); // Load environment variables from .env

const { GoogleGenerativeAI } = require("@google/generative-ai");

const apiKey = process.env.GEMINI_API_KEY;

console.log("API Key from env:", apiKey); // Add this line to check the API key

async function testGeminiAPI() {
    try {
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
        const result = await model.generateContent("Hello, Gemini!");
        console.log(result.response.text());
    } catch (error) {
        console.error("Test API call failed:", error);
    }
}

testGeminiAPI();