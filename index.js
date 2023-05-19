import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import {
  createBook,
  deleteBook,
  getBook,
  getBooks,
  updateBook,
} from "./controllers/book.js";
import {
  createAuthor,
  deleteAuthor,
  getAuthor,
  getAuthors,
  updateAuthor,
} from "./controllers/author.js";

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
      books: await getBooks(),
    },
  });
});

// handle GET request for single book endpoint
app.get("/books/:id", async (request, response) => {
  const id = request.params.id;
  const book = await getBook(id);

  response.json({
    data: {
      book,
    },
  });
});

// handle POST request to create a book
app.post("/books", async (request, response) => {
  const data = request.body;
  const book = await createBook(data);

  response.json({
    data: {
      book,
    },
  });
});

// handle PATCH request to update an existing book
app.patch("/books/:id", async (request, response) => {
  const id = request.params.id;
  const data = request.body;
  const book = await updateBook(id, data);

  response.json({
    data: {
      book,
    },
  });
});

// DELETE request to delete an existing book
app.delete("/books/:id", async (request, response) => {
  const id = request.params.id;
  const book = await deleteBook(id);

  response.json({
    data: {
      book,
    },
  });
});

// GET request to list all authors
app.get("/authors", async (request, response) => {
  const authors = await getAuthors();

  response.json({
    data: {
      authors,
    },
  });
});

// GET request for a single author
app.get("/authors/:id", async (request, response) => {
  const id = request.params.id;
  const author = await getAuthor(id);

  response.json({
    data: {
      author,
    },
  });
});

// POST request to create an author
app.post("/authors", async (request, response) => {
  const data = request.body;
  const author = await createAuthor(data);

  response.json({
    data: {
      author,
    },
  });
});

// PATCH request to update an author
app.patch("/authors/:id", async (request, response) => {
  const id = request.params.id;
  const data = request.body;
  const author = await updateAuthor(id, data);

  response.json({
    data: {
      author,
    },
  });
});

// DELETE request to delete an author
app.delete("/authors/:id", async (request, response) => {
  const id = request.params.id;
  const author = await deleteAuthor(id);

  response.json({
    data: {
      author,
    },
  });
});

// listen on PORT 5000
app.listen(5000, () => {
  console.log("Server running on PORT 5000");
});
