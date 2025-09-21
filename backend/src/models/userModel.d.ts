import mongoose, { Document } from "mongoose";
export interface IUser extends Document {
    fullName: string;
    email: string;
    phone: string;
    password: string;
}
export declare const userModel: mongoose.Model<IUser, {}, {}, {}, mongoose.Document<unknown, {}, IUser, {}, {}> & IUser & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=userModel.d.ts.map