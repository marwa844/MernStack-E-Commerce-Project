import { userModel } from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const register = async ({ fullName, email, phone, password, }) => {
    // check fisrt email is exit or not
    const findUser = await userModel.findOne({ email });
    if (findUser) {
        return { data: "User is already exit", statusCode: 400 };
    }
    //encrypt password
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new userModel({
        fullName,
        email,
        phone,
        password: hashPassword,
    });
    await newUser.save();
    return { data: generateToken({ fullName, email, phone }), statusCode: 200 };
};
export const login = async ({ email, password }) => {
    // check user is exit
    const findUser = await userModel.findOne({ email });
    if (!findUser) {
        return { data: "user not exit", statusCode: 404 };
    }
    // check password
    const passwordMatch = await bcrypt.compare(password, findUser.password);
    if (passwordMatch) {
        return {
            data: generateToken({ fullName: findUser.fullName, email }),
            statusCode: 200,
        };
    }
    return { data: "Incorrect email pr password", statusCode: 400 };
};
export const restPassword = async ({ email, newpassword }) => {
    // check user is exit
    const findUser = await userModel.findOne({ email });
    if (!findUser) {
        return { data: "user not exit", statusCode: 404 };
    }
    //encrypt password
    const hashPassword = await bcrypt.hash(newpassword, 10);
    findUser.password = hashPassword;
    await findUser.save();
    return {
        data: generateToken({ fullName: findUser.fullName, email }),
        statusCode: 200,
    };
};
// Generate token
const generateToken = (data) => {
    return jwt.sign(data, process.env.SECRET_TOKEN || "");
};
//# sourceMappingURL=userservices.js.map