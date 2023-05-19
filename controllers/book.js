import { Book } from "../models/book.js";

// Controller to get all books
export async function getBooks() {
  const books = await Book.find();
  return books;
}

// Controller to find a single book
export async function getBook(id) {
  const book = await Book.findById(id);
  return book;
}

// Controller to create a new book
export async function createBook(data) {
  const book = await Book.create(data);
  return book;
}

// Controller to update an existing book
export async function updateBook(id, data) {
  const book = await Book.findByIdAndUpdate(id, data, { new: true });
  return book;
}

// Controller to delete a book
export async function deleteBook(id) {
  const book = await Book.findByIdAndDelete(id);
  return book;
}
