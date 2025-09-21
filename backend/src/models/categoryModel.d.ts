import mongoose, { Document } from "mongoose";
export interface ICategory extends Document {
    title: string;
    image: string;
}
export declare const categoryModel: mongoose.Model<ICategory, {}, {}, {}, mongoose.Document<unknown, {}, ICategory, {}, {}> & ICategory & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=categoryModel.d.ts.map