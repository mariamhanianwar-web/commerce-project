
export interface CartResponse {
  status: string;
  numOfCartItems: number;
  data: CartItem;
}
export interface CartItem{
  _id: string;
  cartOwner: string;
  products: CartProduct[];
  totalCartPrice: number;
  createdAt?: string;
  updatedAt?: string;
}
export interface CartProduct {
  _id: string;
  count: number;
  price: number;
  product: Product;
}
export interface Product {
  _id: string;
  title: string;
  slug?: string;
  description?: string;
  quantity?: number;
  sold?: number;
  price: number;
  priceAfterDiscount?: number;
  imageCover: string;
  images?: string[];
  ratingsAverage?: number;
  ratingsQuantity?: number;
  category?: Category;
  subcategory?: SubCategory[];
  brand?: Brand;
  createdAt?: string;
  updatedAt?: string;
}
export interface Category {
  _id: string;
  name: string;
  slug?: string;
  image?: string;
  createdAt?: string;
  updatedAt?: string;
}
export interface SubCategory {
  _id: string;
  name: string;
  slug?: string;
  category?: string;
}
export interface Brand {
  _id: string;
  name: string;
  slug?: string;
  image?: string;
}
