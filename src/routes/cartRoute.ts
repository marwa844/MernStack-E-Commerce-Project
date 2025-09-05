import express from "express";
import { getActiveCartForUser } from "../services/cartServices.js";
import { jwtValidate } from "../middleware.ts/jwtMiddleware.js";

export const cartRouter = express.Router();

//get cart for user
cartRouter.get("/", jwtValidate, async (req: any, res) => {
  // get cart for user
  const userId = req.user._id;

  const cart = await getActiveCartForUser({ userId });
  res.status(200).send(cart);
});
