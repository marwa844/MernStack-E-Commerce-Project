import mongoose, { Document, type ObjectId } from "mongoose";
import type { IProduct } from "./productModel.js";
export interface ICartItem {
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
export declare const cartModel: mongoose.Model<ICart, {}, {}, {}, mongoose.Document<unknown, {}, ICart, {}, {}> & ICart & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=cartModel.d.ts.map