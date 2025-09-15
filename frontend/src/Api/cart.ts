
const BASE_URL = "http://localhost:3001/cart";

// API Get Products
export const fetchCart = async (token:string) => {
  try {
    const response = await fetch(BASE_URL,{
        headers:{ "Authorization": `Bearer ${token}`}
    });
    if (!response.ok) {
      throw new Error(`${response.statusText}: ${response.status}`);
    }
    const data = response.json();
    return data;
  } catch (err) {
    throw err;
  }
};
