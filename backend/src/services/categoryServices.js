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
                title: "category1",
                image: "uploads/cat1.jpeg",
            },
            {
                title: "category2",
                image: "uploads/cat2.jpeg",
            },
        ];
        const exitCategory = await getAllCategories();
        if (exitCategory.length == 0) {
            await categoryModel.insertMany(categories);
        }
    }
    catch (err) {
        console.log("something went wrong", err);
    }
};
//# sourceMappingURL=categoryServices.js.map