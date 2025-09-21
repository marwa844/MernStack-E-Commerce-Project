import express from "express";
import { jwtValidate } from "../middleware.ts/jwtMiddleware.js";
import { getOrderById, getUserOrders } from "../services/oderServices.js";
export const orderRouter = express.Router();
//get order for user
orderRouter.get("/:orderId", jwtValidate, async (req, res) => {
    try {
        // get cart for user
        const userId = req.user._id;
        const { orderId } = req.params;
        const order = await getOrderById({ userId, orderId });
        res.status(200).send(order);
    }
    catch (err) {
        res.status(500).send("somthing went wrong");
    }
});
// Get User Orders 
orderRouter.get("/", jwtValidate, async (req, res) => {
    try {
        // get cart for user
        const userId = req.user._id;
        const order = await getUserOrders({ userId });
        res.status(200).send(order);
    }
    catch (err) {
        res.status(500).send("somthing went wrong");
    }
});
//# sourceMappingURL=orderRoute.js.map