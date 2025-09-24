const BASE_URL = "http://localhost:3001/product";
const BASE_URL_CATEGORY_PRODUCT = "http://localhost:3001/product/product-category/";
const BASE_URL_PRODUCT = "http://localhost:3001/product/";
const BASE_URL_ONSALE_PRODUCT = "http://localhost:3001/product/onsale";

// API Get Products
export const fetchProducts = async () => {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error(`${response.statusText}: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    throw err;
  }
};


// API Get OnSale Products
export const fetchOnSaleProducts = async () => {
  try {
    const response = await fetch(BASE_URL_ONSALE_PRODUCT);
    if (!response.ok) {
      throw new Error(`${response.statusText}: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    throw err;
  }
};

// API Get Products By Category ID

export const fetchCategoryProducts = async (categoryId:string) => {
  try {
    const response = await fetch(`${BASE_URL_CATEGORY_PRODUCT}${categoryId}`);
    if (!response.ok) {
      throw new Error(`${response.statusText}: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    throw err;
  }
};



// API Get Products By Product  ID

export const fetchProductId = async (productId:string) => {
  try {
    const response = await fetch(`${BASE_URL_PRODUCT}${productId}`);
    if (!response.ok) {
      throw new Error(`${response.statusText}: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    throw err;
  }
};