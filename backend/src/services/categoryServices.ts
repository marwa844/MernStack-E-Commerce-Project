import { categoryModel } from "../models/categoryModel.js";

// get all category
export const getAllCategories = async () => {
  return categoryModel.find();
};

// set category incase no data in DB
export const setCategory = async () => {
  try {
    const categories = [
      {
        title: "Abaya",
        image: "/uploads/cat1.jpeg",
      },
      {
        title: "Dress",
        image: "/uploads/cat2.jpeg",
      },
      
      {
        title: "Blouse",
        image: "/uploads/blouse.jpeg",
      },
      
      {
        title: "Jacket",
        image: "/uploads/cat2.jpg",
      },
      
      {
        title: "set",
        image: "/uploads/set.webp",
      },
      
      {
        title: "Winter",
        image: "/uploads/winter.png",
      },

    ];

    const exitCategory = await getAllCategories();
    if (exitCategory.length == 0) {
      await categoryModel.insertMany(categories);
    }
  } catch (err) {
    console.log("something went wrong", err);
  }
};
