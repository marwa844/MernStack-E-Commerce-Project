import mongoose, { Document, Schema, type ObjectId } from "mongoose";

export interface IOrderItem {
  title: string;
  image: string;
  quantity: number;
  unitprice: number;
}

export interface IOrder extends Document {
  items: IOrderItem[];
  totalAmount: number;
  userId: ObjectId | string;
  address: string;
}

const orderItemSchema = new Schema<IOrderItem>({
  title: { type: String, required: true },
  image: { type: String, required: true },
  quantity: { type: Number, required: true },
  unitprice: { type: Number, required: true },
});

const orderSchema = new Schema<IOrder>({
  items: { type: [orderItemSchema] },
  totalAmount: { type: Number, required: true },
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  address: { type: String, required: true },
});

export const orderModel = mongoose.model<IOrder>("Order", orderSchema);
