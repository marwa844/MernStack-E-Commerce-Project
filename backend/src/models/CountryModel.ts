import mongoose, { Document, Schema, type ObjectId } from "mongoose";

export interface ICountry extends Document{
    name: string;
    code: string;
    enabled: boolean

}

const countrySchema = new Schema<ICountry>({
  name: { type: String, required: true },
  code: { type: String, required: true },
  enabled: { type: Boolean, default: true }
});

export const countryModel = mongoose.model<ICountry>("Country", countrySchema);
