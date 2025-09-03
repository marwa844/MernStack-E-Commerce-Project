import { userModel } from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// registeration  services
interface RegisterParams {
  fullName: string;
  email: string;
  phone: string;
  password: string;
}
export const register = async ({
  fullName,
  email,
  phone,
  password,
}: RegisterParams) => {
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

// login Services
interface LoginParams {
  email: string;
  password: string;
}

export const login = async ({ email, password }: LoginParams) => {
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

//reset password
interface ResetPassword {
  email: string;
  newpassword: string;
}
export const restPassword = async ({ email, newpassword }: ResetPassword) => {
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
const generateToken = (data: any) => {
  return jwt.sign(data, "337AB1AEE961B38F4D8436B689A1D");
};
