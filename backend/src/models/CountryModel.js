import mongoose, { Document, Schema } from "mongoose";
const countrySchema = new Schema({
    name: { type: String, required: true },
    code: { type: String, required: true },
    enabled: { type: Boolean, default: true }
});
export const countryModel = mongoose.model("Country", countrySchema);
//# sourceMappingURL=CountryModel.js.map