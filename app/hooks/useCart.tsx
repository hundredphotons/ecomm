

import { createContext, useContext, useState, useCallback, useEffect } from "react";
import { CartItem } from "../typings";

import { toast } from 'react-hot-toast'

type CartContextType = {
  cartTotalQty: number;
  cartProducts: CartItem[] | null;
  handleAddProductToCart: (product: CartItem) => void;
};

export const CartContext = createContext<CartContextType | null>(null);

interface Props {
  [propName: string]: any;
}




export const CartContextProvider = (props: Props) =>{
  const [cartTotalQty, setCartTotalQty] = useState(0);
  const [cartProducts, setCartProducts] = useState<CartItem[] | null>(null);

  useEffect(() => {
    const cartItems: any = localStorage.getItem('eShopCartItems');
    const cProducts: CartItem[] | null = JSON.parse(cartItems);
    setCartProducts(cProducts)
  }, [])


  const handleAddProductToCart = useCallback((product: CartItem) => {
    setCartProducts( (prev) => {
      let updatedCart: CartItem[];
      if (prev) {
        updatedCart = [...prev, product]
      } else {
        updatedCart = [product]
      }
      // toast.success("Product added to cart");
      localStorage.setItem('eShopCartItems', JSON.stringify(updatedCart));
      return updatedCart
    } )
  }, []);


  const value = { 
    cartTotalQty,
    cartProducts,
    handleAddProductToCart,
  }

  return <CartContext.Provider value={value} {...props}/>
}


export const useCart = () => {
  const context = useContext(CartContext);

  if(context === null) {
    throw new Error("useCart must be used within a CartContextProvider")
  }
  return context;
}

