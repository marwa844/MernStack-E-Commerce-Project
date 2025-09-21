import express from "express";
import { getAllCountries } from "../services/countryServices.js";
export const countryRoute = express.Router();
countryRoute.get("/", async (req, res) => {
    try {
        const countries = await getAllCountries();
        res.status(200).json(countries);
    }
    catch (err) {
        res.status(500).json("Something went wrong");
    }
});
//# sourceMappingURL=countryRoute.js.map