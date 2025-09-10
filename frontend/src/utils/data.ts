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
