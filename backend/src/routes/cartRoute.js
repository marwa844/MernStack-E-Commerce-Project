import express from "express";
import { addItemToCart, claerCart, createOrder, deleteItemInCart, getActiveCartForUser, updateItemInCart, } from "../services/cartServices.js";
import { jwtValidate } from "../middleware.ts/jwtMiddleware.js";
export const cartRouter = express.Router();
//get cart for user
cartRouter.get("/", jwtValidate, async (req, res) => {
    try {
        // get cart for user
        const userId = req.user._id;
        const cart = await getActiveCartForUser({ userId, populateAllowed: true });
        res.status(200).send(cart);
    }
    catch (err) {
        res.status(500).send("somthing went wrong");
    }
});
// Add Item to cart
cartRouter.post("/items", jwtValidate, async (req, res) => {
    try {
        const user_id = req.user?._id;
        const { userId, productId, quantity } = req.body;
        const response = await addItemToCart({
            userId: user_id,
            productId,
            quantity,
        });
        res.status(response.statusCode).json(response.data);
    }
    catch (err) {
        res.status(500).json("somthing went wrong");
    }
});
// update product ITem in cart
cartRouter.put("/items", jwtValidate, async (req, res) => {
    try {
        const user_id = req.user?._id;
        const { userId, productId, quantity } = req.body;
        const response = await updateItemInCart({
            userId: user_id,
            productId,
            quantity,
        });
        res.status(response.statusCode).json(response.data);
    }
    catch (err) {
        res.status(500).json("somthing went wrong");
    }
});
// delete item in cart
cartRouter.delete("/items/:productId", jwtValidate, async (req, res) => {
    try {
        const user_id = req.user?._id;
        const productId = req.params.productId;
        const response = await deleteItemInCart({
            userId: user_id,
            productId,
        });
        res.status(response.statusCode).json(response.data);
    }
    catch (err) {
        res.status(500).json("somthing went wrong");
    }
});
// delete All items in cart
cartRouter.delete("/", jwtValidate, async (req, res) => {
    try {
        const user_id = req.user?._id;
        const response = await claerCart({ userId: user_id });
        res.status(response.statusCode).json(response.data);
    }
    catch (err) {
        res.status(500).json("somthing went wrong");
    }
});
// Convert Cart to order , checkout Rout
cartRouter.post("/checkout", jwtValidate, async (req, res) => {
    try {
        const user_id = req.user?._id;
        const { address, address2, countryId, fullName, phone, city } = req.body;
        const response = await createOrder({ userId: user_id, address, address2, countryId, fullName, phone, city });
        res.status(response.statusCode).json(response.data);
    }
    catch (err) {
        res.status(500).json("somthing went wrong");
    }
});
//# sourceMappingURL=cartRoute.js.map