import mongoose from "mongoose";

const authorSchema = mongoose.Schema({
  name: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const Author = mongoose.model("Author", authorSchema);
