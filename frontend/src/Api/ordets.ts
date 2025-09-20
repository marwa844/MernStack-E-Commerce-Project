const BASE_URL_ORDER = "http://localhost:3001/order";


// API Get Products
export const fetchOrder = async (token:string) => {
  try {
    const response = await fetch(BASE_URL_ORDER,{
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