import mongoose, { Document, Schema } from "mongoose";

export interface ICategory extends Document {
  title: string;
  image: string;
}
const categorySchema = new Schema<ICategory>({
  title: { type: String, required: true },

  image: { type: String },
});

export const categoryModel = mongoose.model<ICategory>(
  "Category",
  categorySchema
);
