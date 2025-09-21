import mongoose, { Document, Schema } from "mongoose";
const categorySchema = new Schema({
    title: { type: String, required: true },
    image: { type: String },
});
export const categoryModel = mongoose.model("Category", categorySchema);
//# sourceMappingURL=categoryModel.js.map