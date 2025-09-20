export interface IProduct {
  _id: string;
  title: string;
  description: string;
  image: string;
  onsale: boolean;
  price: number;
  sale: number;
  stock: number;
  categoryId: string;
}

export interface ICategory {
  _id: string;
  title: string;
  image: string;
}

export interface IRegister {
  fullName: string;
  email: string;
  phone: string;
  password: string;
}


export interface ILogin {
  email: string;
  password: string;
}


export interface ICart {
  productId: string;
  title: string;
  image: string;
  onsale: boolean;
  price: number;
  sale: number;
  stock: number;
  quantity:number;
  unitprice:number
}

export interface ICountry {
    _id: string;
    name: string;
    code: string;
    enabled: boolean;
    
}

export interface ICheckout {
  address: string;
  address2?: string;
  countryId : string;
   fullName : string;
    city : string;
     phone : string;
    
}

