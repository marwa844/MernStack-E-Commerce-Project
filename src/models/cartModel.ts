import mongoose, { Document, Schema, type ObjectId } from "mongoose";
import type { IProduct } from "./productModel.js";

const cartStatusEnum = ["active", "completed"];

export interface ICartItem  {
  product: IProduct;
  unitprice: number;
  quantity: number;
}

export interface ICart extends Document {
  userId: ObjectId | string;
  items: ICartItem[];
  totalAmount: number;
  status: "active" | "completed";
}

const cartItemSchema = new Schema<ICartItem>({
  product: { type: Schema.Types.ObjectId, ref: "Product", required: true },
  unitprice: { type: Number, required: true },
  quantity: { type: Number, required: true, default: 1 },
});

const cartSchema = new Schema<ICart>({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  items: { type: [cartItemSchema] },
  totalAmount: { type: Number, default: 0 },
  status: { type: String, enum: cartStatusEnum, default: "active" },
});

export const cartModel = mongoose.model<ICart>("Cart", cartSchema);
