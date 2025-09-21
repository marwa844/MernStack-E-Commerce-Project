import mongoose, { Document } from "mongoose";
export interface ICountry extends Document {
    name: string;
    code: string;
    enabled: boolean;
}
export declare const countryModel: mongoose.Model<ICountry, {}, {}, {}, mongoose.Document<unknown, {}, ICountry, {}, {}> & ICountry & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=CountryModel.d.ts.map