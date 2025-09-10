const BASE_URL = "http://localhost:3001/product";

// API Get Products
export const fetchProducts = async () => {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error(`${response.statusText}: ${response.status}`);
    }
    const data = response.json();
    console.log(data);
    return data;
  } catch (err) {
    throw err;
  }
};
