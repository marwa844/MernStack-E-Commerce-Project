import mongoose, { Document, Schema } from "mongoose";
const orderItemSchema = new Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
    quantity: { type: Number, required: true },
    unitprice: { type: Number, required: true },
});
const orderSchema = new Schema({
    items: { type: [orderItemSchema] },
    totalAmount: { type: Number, required: true },
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    address: { type: String, required: true },
    address2: { type: String },
    orderNo: { type: Number, required: true, unique: true },
    country: { type: Schema.Types.ObjectId, ref: "Country", required: true },
    fullName: { type: String, required: true },
    phone: { type: String },
    city: { type: String }
});
export const orderModel = mongoose.model("Order", orderSchema);
// Get Order 
//# sourceMappingURL=orderModel.js.map