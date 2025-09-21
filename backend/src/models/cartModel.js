import mongoose, { Document, Schema } from "mongoose";
const cartStatusEnum = ["active", "completed"];
const cartItemSchema = new Schema({
    product: { type: Schema.Types.ObjectId, ref: "Product", required: true },
    unitprice: { type: Number, required: true },
    quantity: { type: Number, required: true, default: 1 },
});
const cartSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    items: { type: [cartItemSchema] },
    totalAmount: { type: Number, default: 0 },
    status: { type: String, enum: cartStatusEnum, default: "active" },
});
export const cartModel = mongoose.model("Cart", cartSchema);
//# sourceMappingURL=cartModel.js.map