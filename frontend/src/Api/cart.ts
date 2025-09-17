import { useAuth } from "../context/Auth/AuthContext";


const BASE_URL = "http://localhost:3001/cart";
const BASE_URL_ITEMS = "http://localhost:3001/cart/items";


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



// Add items to cart 

export const addItemToCartFetch = async (token:string | null,productId:string, quantity:number) => {
    try {
        const response = await fetch(BASE_URL_ITEMS,
            {
                method: "POST",
                body: JSON.stringify({productId, quantity:1}),
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })
        if (!response.ok) {
            console.log(`${response.statusText}: ${response.status}`)
            throw new Error(`${response.statusText}: ${response.status}`);

        }
        const result = await response.json();
        return result;

    } catch (err) {
         console.log(err);
        throw err;
    }


}
