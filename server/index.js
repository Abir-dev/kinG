import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import dotenv from "dotenv";

// Import configuration
import { config, validateConfig } from "./config.js";

// Import routes
import emailRoutes from "./routes/email.js";
import razorpayRoutes from "./routes/razorpay.js";
import userRoutes from "./routes/users.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = config.port;

// Validate configuration on startup
validateConfig();

// Create uploads directory if it doesn't exist
const uploadsDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// CORS configuration
const allowedOrigins = [
  "http://localhost:8080",
  "http://127.0.0.1:8080",
  "https://kin-ekbs2u8kd-abir-devs-projects.vercel.app",
  "https://www.kingtechs.in"
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true); // non-browser or same-origin
      if (allowedOrigins.includes(origin)) return callback(null, true);
      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

// Handle preflight for all routes
app.options(/.*/, cors());

// Middleware
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// Health check endpoint for Render
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
    timestamp: new Date().toISOString(),
    environment: config.nodeEnv,
    port: PORT,
  });
});

// API routes
app.use("/api", emailRoutes);
app.use("/api/razorpay", razorpayRoutes);
app.use("/api/users", userRoutes);

// Serve static files from the React app in production
if (config.nodeEnv === "production") {
  app.use(express.static(path.join(__dirname, "../dist/spa")));

  // Catch-all route for SPA in production (compatible with Express 5 path-to-regexp)
  app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, "../dist/spa/index.html"));
  });
}

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Server error:", err);
  res.status(500).json({
    error: "Internal server error",
    message:
      config.nodeEnv === "development" ? err.message : "Something went wrong",
  });
});

// 404 handler (place after all routes)
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Start server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`🌍 Environment: ${config.nodeEnv}`);
  console.log(`🔗 Health check: http://localhost:${PORT}/health`);
});
