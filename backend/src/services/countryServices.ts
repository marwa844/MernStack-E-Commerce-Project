import { countryModel } from "../models/CountryModel.js";

// get all Countries
export const getAllCountries = async () => {
  return await countryModel.find({enabled:true});
};


// set Initial Products
export const setInitialCountry = async () => {
  try {
    const countries = [
   
  { name: "Kuwait", code: "KW", enabled: true },
  { name: "Saudi Arabia", code: "SA", enabled: true },
  { name: "UAE", code: "AE", enabled: true },
  { name: "Qatar", code: "QA", enabled: true }
  
    ];

    const exitCountries = await getAllCountries();
    if (exitCountries.length === 0) {
      await countryModel.insertMany(countries);
    }
  } catch (err) {
  console.log("Something went wrong:", err);
}
};