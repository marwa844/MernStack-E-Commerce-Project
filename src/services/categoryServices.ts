import { categoryModel } from "../models/categoryModel.js";

// get all category
export const getAllCategories = async () => {
  return categoryModel.find();
};

// set category incase no data in DB
export const setCategory = async () => {
  const categories = [
    {
      title: "category1",
      image: "imageCat1.png",
    },
    {
      title: "category2",
      image: "imageCat2.png",
    },
  ];

  const exitCategory = await getAllCategories();
  if (exitCategory.length == 0) {
    await categoryModel.insertMany(categories);
  }
};
