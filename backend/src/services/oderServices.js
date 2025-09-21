import { orderModel } from "../models/orderModel.js";
export const getOrderById = async ({ userId, orderId }) => {
    // get oder
    const order = await orderModel.findOne({ _id: orderId, userId }).populate("country", "name code");
    if (!order) {
        return { data: " Order not found ", statusCode: 400 };
    }
    return { data: order, statusCode: 200 };
};
export const getUserOrders = async ({ userId }) => {
    // get oder
    const order = await orderModel.findOne({ userId }).populate("country", "name code");
    if (!order) {
        return { data: " Order not found ", statusCode: 400 };
    }
};
//# sourceMappingURL=oderServices.js.map