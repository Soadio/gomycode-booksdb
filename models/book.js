import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
  title: { type: String, required: true },
  year: { type: Number, required: true },
  pages: { type: Number, required: true },
  authorId: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const Book = mongoose.model("Book", bookSchema);
