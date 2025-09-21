interface IgetOrder {
    userId: string;
    orderId: string;
}
export declare const getOrderById: ({ userId, orderId }: IgetOrder) => Promise<{
    data: string;
    statusCode: number;
} | {
    data: import("mongoose").Document<unknown, {}, import("../models/orderModel.js").IOrder, {}, {}> & import("../models/orderModel.js").IOrder & Required<{
        _id: unknown;
    }> & {
        __v: number;
    };
    statusCode: number;
}>;
interface IUOrder {
    userId: string;
}
export declare const getUserOrders: ({ userId }: IUOrder) => Promise<{
    data: string;
    statusCode: number;
} | undefined>;
export {};
//# sourceMappingURL=oderServices.d.ts.map