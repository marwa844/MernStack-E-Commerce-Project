import { orderModel } from "../models/orderModel.js";

interface IgetOrder {
  userId: string;
  orderId : string;
}

export const getOrderById = async ({ userId, orderId }: IgetOrder) => {
  // get oder
   const order = await orderModel.findOne({ _id: orderId, userId }).populate("country", "name code");

    if (!order) {
      return  { data: " Order not found " ,statusCode: 400 };

    }

     return { data: order, statusCode: 200 };
}

interface IUOrder {
  userId: string;
}
export const getUserOrders = async ({ userId }: IUOrder) => {
  // get oder
   const order = await orderModel.findOne({ userId }).populate("country", "name code");

    if (!order) {
      return  { data: " Order not found " ,statusCode: 400 };

    }

  }