import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { Book } from "./models/book.js";

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

// handle GET request for books endpoint
app.get("/books", async (request, response) => {
  response.json({
    data: {
      books: await Book.find(),
    },
  });
});

// handle POST request to create a book
app.post("/books", async (request, response) => {
  const data = request.body;
  const book = await Book.create(data);

  response.json({
    data: {
      book,
    },
  });
});

// listen on PORT 5000
app.listen(5000, () => {
  console.log("Server running on PORT 5000");
});
