export interface ProductResponse {
  success: boolean;
  products: Product[]
}

export interface Product {
  title: string;
  category: string;
  price: number;
  stock: number;
}
