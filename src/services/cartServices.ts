import { cartModel } from "../models/cartModel.js";

// create cart for user
export interface ICreateCart {
  userId: string;
}

const createCartForUSer = async ({ userId }: ICreateCart) => {
  const cart = await cartModel.create({ userId });
  await cart.save();
  return cart;
};

// get active cart for user
export interface IGetActiveCart {
  userId: string;
}

export const getActiveCartForUser = async ({ userId }: IGetActiveCart) => {
  let getCart = await cartModel.findOne({ userId, status: "active" });
  if (!getCart) {
    getCart = await createCartForUSer({ userId });
  }
  return getCart;
};
