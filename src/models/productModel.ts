import mongoose, { Document, Schema } from "mongoose";

export interface IProduct extends Document {
  title: string;
  description: string;
  image: string;
  onsale: boolean;
  price: number;
  sale: number;
  stock: number;
  categoryId: string;
}
const productSchema = new Schema<IProduct>({
  title: { type: String, required: true },
  description: { type: String },
  image: { type: String },
  onsale: { type: Boolean, default: false },
  price: { type: Number, required: true },
  sale: { type: Number, default: 0 },
  stock: { type: Number, default: 0 },
  categoryId: { type: String },
});

export const productModel = mongoose.model<IProduct>("Product", productSchema);
