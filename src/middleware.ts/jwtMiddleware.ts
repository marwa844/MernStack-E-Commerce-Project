import jwt from "jsonwebtoken";
import type { NextFunction, Request, Response } from "express";
import { userModel } from "../models/userModel.js";

interface ExtendRequest extends Request {
  user?: any;
}
export const jwtValidate = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
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

  jwt.verify(
    tokenData,
    process.env.SECRET_TOKEN || "",
    async (err: any, payload: any) => {
      if (err) {
        res.status(403).send("invalid token ");
        return;
      }
      if (!payload) {
        res.status(403).send("invalid token payload ");
        return;
      }
      const userPayload = payload as {
        email: string;
        fullName: string;
      };
      const user = await userModel.findOne({ email: userPayload.email });
      req.user = user;
      next();
    }
  );
};
