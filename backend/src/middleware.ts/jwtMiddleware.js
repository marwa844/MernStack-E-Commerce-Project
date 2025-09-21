import jwt from "jsonwebtoken";
import { userModel } from "../models/userModel.js";
export const jwtValidate = async (req, res, next) => {
    const authorizationHEader = req.get("authorization");
    if (!authorizationHEader) {
        res.status(403).send("No authorization not provided ");
        return;
    }
    const tokenData = authorizationHEader.split(" ")[1];
    if (!tokenData) {
        res.status(403).send("No authorization exit ");
        return;
    }
    jwt.verify(tokenData, process.env.SECRET_TOKEN || "", async (err, payload) => {
        if (err) {
            res.status(403).send("invalid token ");
            return;
        }
        if (!payload) {
            res.status(403).send("invalid token payload ");
            return;
        }
        const userPayload = payload;
        const user = await userModel.findOne({ email: userPayload.email });
        req.user = user;
        next();
    });
};
//# sourceMappingURL=jwtMiddleware.js.map