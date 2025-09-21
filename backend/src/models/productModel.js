import mongoose, { Document, Schema } from "mongoose";
const productSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    onsale: { type: Boolean, default: false },
    price: { type: Number, required: true },
    sale: { type: Number, default: 0 },
    stock: { type: Number, default: 0 },
    categoryId: { type: Schema.Types.ObjectId, ref: "User" },
});
export const productModel = mongoose.model("Product", productSchema);
//# sourceMappingURL=productModel.js.map