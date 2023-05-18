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
const app = express();

// configure app to parse json content
app.use(express.json());

// listen on PORT 5000
app.listen(5000, () => {
  console.log("Server running on PORT 5000");
});
