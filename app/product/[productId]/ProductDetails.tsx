'use client'

import getProductRating from "@/utils/getProductRating";

import { CartItem, ProductDetailsCompParams, ProductImage } from "../../typings"
import { Rating } from "@mui/material";
import { useCallback, useState, useEffect } from "react";
import SetColor from "@/app/components/products/SetColor";
import SetQuantity from "@/app/components/products/SetQuantity";
import Button from "@/app/components/Button";
import ProductImageComp from "@/app/components/ProductImageComp";
import { useCart } from "@/app/hooks/useCart";

import { MdCheckCircle } from "react-icons/md";
import { useRouter } from "next/navigation";

const Horizontal = () => {
  return <hr className="w-[30% my-2]" />
}


const ProductDetails: React.FC<ProductDetailsCompParams> = ({product}) => {

  const { cartProducts, handleAddProductToCart } = useCart();
  const [isProductInCart, setIsProductInCart] = useState(false);

  const [cartProduct, setCartProduct] = useState<CartItem>({
    item: product,
    selectedImg: product.images[0],
    quantity: 0,
    price: 0
  })

  const productRating = getProductRating(product);

  const router = useRouter();

  console.info("...ProductDetails.cartProducts:", cartProducts);

  useEffect(() => {

    setIsProductInCart(false);
      if(cartProducts) {
        const existingIndex = cartProducts.findIndex( (each) => each.item.id===product.id);
        if(existingIndex>-1) {
          setIsProductInCart(true);
        }
      }
    }, [cartProducts, product.id]);

  const handleColorSelect = useCallback( 
    (value: ProductImage) => {
      setCartProduct( (prev)=>{
        console.info("...ProductDetails.handleColorSelect.prev:", prev, "value:", value);
        return {...prev, selectedImg: value}
      }  )
    }, [cartProduct.selectedImg] );


  const handleQtyIncrease = useCallback( 
    () => {
      if (cartProduct.quantity===1098 )  {
        return;
      }
      setCartProduct( (prev)=>{
        console.info("...ProductDetails.handleQtyIncrease.prev:", prev);
        return {...prev, quantity: ++prev.quantity}
      }  )
    }, [cartProduct] );


    const handleQtyDecrease = useCallback( 
      () => {
        if (cartProduct.quantity===1 )  {
          return;
        }
        setCartProduct( (prev)=>{
          console.info("...ProductDetails.handleQtyDecrease.prev:", prev);
          return {...prev, quantity: --prev.quantity}
        }  )
      }, [cartProduct] );

  return (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">


    <ProductImageComp
      cartProduct={cartProduct}
      product={product}
      handleColorSelect={handleColorSelect}
    ></ProductImageComp>


    <div className="flex flex-col gap-1 text-slate-500 text-sm">
      <h2 className="text-3xl font-medium text-slate-700"> {product.name}</h2> 
      <div className="flex items-center gap-2">
        < Rating value={productRating} readOnly /> 
        <div>{product.reviews.length} reviews</div>
      </div>
      <div className="text-justify">{product.description}</div>

      <Horizontal></Horizontal>

      <div>
        <span className="font-semibold" >CATEGORY:</span> {product.category}
      </div>
      <div>
        <span className="font-semibold" >BRAND:</span> {product.brand}
      </div>     
      <div className={product.inStock ? "text-teal-400" : "text-rose-400"}>{product.inStock ? "In stock" : "Out of stock"}</div> 

      <Horizontal></Horizontal>

      {isProductInCart? 
      <>
        <p className="mb-2 text-slate-500 flex items-center gap-1">
          <MdCheckCircle className="text-teal-400" size={20}></MdCheckCircle>
          <span>Product added to cart</span>
        </p>
        <div className="max-w-[300px]">
          <Button
            label="View Cart"
            outline
            onClick={()=>{router.push("/cart");}}
          >
          </Button>
        </div>
      </> : 
      <>
        <SetColor
          cartProduct={cartProduct}
          images={product.images}
          handleColorSelect={handleColorSelect} 
        />

        <Horizontal></Horizontal>

        <SetQuantity
          cartProduct={cartProduct}
          handleQtyIncrease={handleQtyIncrease}
          handleQtyDecrease={handleQtyDecrease} 
        />

        <Horizontal></Horizontal>

        <div className="max-w-[300px]">
          <Button
            label="Add to Cart"
            onClick={()=>handleAddProductToCart(cartProduct)}
          >
          </Button>
        </div>
      </>}




    </div>
  </div>
  )
}

export default ProductDetails;



