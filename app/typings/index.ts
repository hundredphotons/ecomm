export type User = {
  id: string;
  name: string;
  email: string;
  emailVerified: boolean;
  image: string;
  hashedPassword: string;
  createdAt: string;
  updatedAt: string;
  role: string;
}

export type ProductReview = {
  id: string;
  userId: string;
  productId: string;
  rating: number;
  comment: string;
  createdDate: string;
  user: User;
}

export type ProductImage = {
  color: string; 
  colorCode: string; 
  image: string
}

export type Product = {
  id: string; 
  name: string; 
  description: string; 
  price: number;
  brand: string; 
  category: string; 
  inStock: boolean;
  images: ProductImage[];
  reviews: ProductReview[];
}

export type CartItem = {
  item: Product;
  selectedImg: ProductImage; 
  quantity: number; 
  price: number;
  }

export type ProductCardCompParams = {
  product: Product;
}

export interface ProductDetailsCompParams {
  product: Product;
}

export interface SetColorCompParams {
  images: ProductImage[]; 
  cartProduct: CartItem;
  handleColorSelect: (value: ProductImage) => void;
}

export interface SetQtyCompParams {
  cartCounter?: boolean; 
  cartProduct: CartItem; 
  handleQtyIncrease: () => void;
  handleQtyDecrease: () => void;
}

export interface ProductImageCompParams {
  cartProduct: CartItem; 
  product: Product,
  handleColorSelect: (value: ProductImage) => void;
}