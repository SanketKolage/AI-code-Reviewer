// const dotenv = require("dotenv").config();
// const express = require("express");
// const { json } = require("express");

// const aiRoutes = require("./src/routes/ai.routes");
// const cors = require("cors");

// const app = express();
// const { connect } = require( "mongoose");
// app.use(cors());
// app.use(json());
// const authRoutes = require( "./src/routes/authRoutes");
// app.use("/ai", aiRoutes);


// connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.log(err));

// app.use('/api/auth', authRoutes);

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });


// app.listen(3000, () => {
//   console.log("Server running on port 3000");
// });

import "dotenv/config";
import express, { json } from "express";
import cors from "cors";
import mongoose from "mongoose";
import authRoutes from "./src/routes/authRoutes.js";
import aiRoutes from "./src/routes/ai.routes.js";

const app = express();
const PORT = process.env.PORT || 3000; // Ensure Render uses its assigned port

app.use(cors());
app.use(json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/ai", aiRoutes);

app.get("/", (req, res) => {
  res.send("Hello World");
});

// Start the server first
const server = app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

// Then connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.error("❌ MongoDB Connection Failed:", error);
    process.exit(1);
  }
};

connectDB();

