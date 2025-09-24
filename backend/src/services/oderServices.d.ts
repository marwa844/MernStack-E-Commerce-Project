import mongoose from "mongoose";
interface IgetOrder {
    userId: string;
    orderId: string;
}
export declare const getOrderById: ({ userId, orderId }: IgetOrder) => Promise<{
    data: string;
    statusCode: number;
} | {
    data: mongoose.Document<unknown, {}, import("../models/orderModel.js").IOrder, {}, {}> & import("../models/orderModel.js").IOrder & Required<{
        _id: unknown;
    }> & {
        __v: number;
    };
    statusCode: number;
}>;
export declare const getUserOrders: () => Promise<(mongoose.Document<unknown, {}, import("../models/orderModel.js").IOrder, {}, {}> & import("../models/orderModel.js").IOrder & Required<{
    _id: unknown;
}> & {
    __v: number;
})[]>;
export {};
//# sourceMappingURL=oderServices.d.ts.map