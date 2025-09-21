import mongoose, { Document, type ObjectId } from "mongoose";
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
    address2?: string;
    orderNo: number;
    country: ObjectId | string;
    city: string;
    fullName: string;
    phone: string;
}
export declare const orderModel: mongoose.Model<IOrder, {}, {}, {}, mongoose.Document<unknown, {}, IOrder, {}, {}> & IOrder & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=orderModel.d.ts.map