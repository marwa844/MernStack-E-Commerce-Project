import express from "express";
import { login, register } from "../services/userservices.js";
import { getUserOrders } from "../services/oderServices.js";
import { jwtValidate } from "../middleware.ts/jwtMiddleware.js";
export const userRoute = express.Router();
// register route
userRoute.post("/register", async (req, res) => {
    try {
        const { fullName, email, phone, password } = req.body;
        const { data, statusCode } = await register({
            fullName,
            email,
            phone,
            password,
        });
        res.status(statusCode).json(data);
    }
    catch (err) {
        console.error("Register route error:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
// login route
userRoute.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const { data, statusCode } = await login({ email, password });
    res.status(statusCode).json(data);
});
// ResetPassword route
userRoute.post("/reset", async (req, res) => {
    const { email, password } = req.body;
    const { data, statusCode } = await login({ email, password });
    res.status(statusCode).json(data);
});
//# sourceMappingURL=userRoute.js.map