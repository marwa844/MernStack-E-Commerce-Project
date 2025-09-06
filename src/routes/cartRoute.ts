import express from "express";
import {
  addItemToCart,
  claerCart,
  deleteItemInCart,
  getActiveCartForUser,
  updateItemInCart,
} from "../services/cartServices.js";
import { jwtValidate } from "../middleware.ts/jwtMiddleware.js";

export const cartRouter = express.Router();

//get cart for user
cartRouter.get("/", jwtValidate, async (req: any, res) => {
  // get cart for user
  const userId = req.user._id;

  const cart = await getActiveCartForUser({ userId });
  res.status(200).send(cart);
});

// Add Item to cart
cartRouter.post("/items", jwtValidate, async (req: any, res) => {
  const user_id = req.user?._id;
  const { userId, productId, quantity } = req.body;
  const response = await addItemToCart({
    userId: user_id,
    productId,
    quantity,
  });

  res.status(response.statusCode).send(response.data);
});

// update product ITem in cart
cartRouter.put("/items", jwtValidate, async (req: any, res) => {
  const user_id = req.user?._id;
  const { userId, productId, quantity } = req.body;

  const response = await updateItemInCart({
    userId: user_id,
    productId,
    quantity,
  });
  res.status(response.statusCode).send(response.data);
});

// delete item in cart
cartRouter.delete("/items/:productId", jwtValidate, async (req: any, res) => {
  const user_id = req.user?._id;

  const productId = req.params.productId;

  const response = await deleteItemInCart({
    userId: user_id,
    productId,
  });

  res.status(response.statusCode).send(response.data);
});

// delete All items in cart
cartRouter.delete("/", jwtValidate, async (req: any, res) => {
  const user_id = req.user?._id;

  const response = await claerCart({ userId: user_id });

  res.status(response.statusCode).send(response.data);
});
