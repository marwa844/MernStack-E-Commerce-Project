import express from "express";
import { jwtValidate } from "../middleware.ts/jwtMiddleware.js";
import { getOrderById, getUserOrders } from "../services/oderServices.js";
export const orderRouter = express.Router();
// Get User Orders 
orderRouter.get("/my-order", async (req, res) => {
    try {
        const orders = await getUserOrders();
        if (!orders || orders.length === 0)
            return res.status(404).json({ message: "Orders not found" });
        res.status(200).json(orders);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "Something went wrong" });
    }
});
//get order for user
orderRouter.get("/:orderId", jwtValidate, async (req, res) => {
    try {
        // get cart for user
        const userId = req.user._id;
        const { orderId } = req.params;
        const order = await getOrderById({ userId, orderId });
        res.status(200).json(order);
    }
    catch (err) {
        res.status(500).json("somthing went wrong");
    }
});
//# sourceMappingURL=orderRoute.js.map