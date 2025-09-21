import mongoose, { Document, type ObjectId } from "mongoose";
export interface IProduct extends Document {
    title: string;
    description: string;
    image: string;
    onsale: boolean;
    price: number;
    sale: number;
    stock: number;
    categoryId: string | ObjectId;
}
export declare const productModel: mongoose.Model<IProduct, {}, {}, {}, mongoose.Document<unknown, {}, IProduct, {}, {}> & IProduct & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=productModel.d.ts.map