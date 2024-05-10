import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import userRouter from "./routes/userRoutes.js";
import predictionRouter from "./routes/predictionRoutes.js";
import diseaseRouter from "./routes/diseaseRoutes.js"; // Importing the disease router
import 'dotenv/config.js';

// App config
const app = express();
const port = 4000;

// Middleware
app.use(express.json());
app.use(cors());

// DB connection
connectDB();

// API endpoints
app.use("/api/user", userRouter);
app.use("/disease-prediction", predictionRouter);
app.use("/api/disease", diseaseRouter); // Mounting the disease router

// Start server
app.listen(port, () => {
    console.log(`Server started http://localhost:${port}`);
});
