import { Author } from "../models/author.js";

// Controller to list all authors
export async function getAuthors() {
  const authors = await Author.find();
  return authors;
}

// Controller to get a single author
export async function getAuthor(id) {
  const author = await Author.findById(id);
  return author;
}

// Controller to create an author
export async function createAuthor(data) {
  const author = await Author.create(data);
  return author;
}

// Controller to update an author
export async function updateAuthor(id, data) {
  const author = await Author.findByIdAndUpdate(id, data, { new: true });
  return author;
}

// Controller to delete an author
export async function deleteAuthor(id) {
  const author = await Author.findByIdAndDelete(id);
  return author;
}
