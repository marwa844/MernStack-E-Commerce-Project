import mongoose, { Schema, Document } from "mongoose";
const userSchema = new Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    password: { type: String, required: true },
});
export const userModel = mongoose.model("User", userSchema);
//# sourceMappingURL=userModel.js.map