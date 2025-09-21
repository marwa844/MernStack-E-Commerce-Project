import expess from "express";
import { getAllCategories } from "../services/categoryServices.js";
export const categoryRouter = expess.Router();
categoryRouter.get("/", async (req, res) => {
    const categories = await getAllCategories();
    res.status(200).send(categories);
});
//# sourceMappingURL=categoryRoute.js.map