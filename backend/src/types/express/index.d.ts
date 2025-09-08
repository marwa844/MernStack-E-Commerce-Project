import type { ObjectId } from "mongoose";

export {};

declare global {
  namespace Express {
    interface Request {
      user?: {
        _id: string | ObjectId;
        email: string;
        fullName: string;
      };
    }
  }
}
