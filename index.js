import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

// configure project to use env files
dotenv.config();

// connect to the database
mongoose
  .connect(process.env.MONGODB_URL, {
    dbName: "booksdb",
  })
  .then(() => {
    console.log("Database connected successfully");
  });

// create the app
