"use client";
import { truncateText } from "@/utils/truncateText";
import { formatPrice } from "@/utils/formatPrice";
import Image from "next/image";
import { Rating } from "@mui/material";
import { useRouter } from "next/navigation";
import getProductRating from "@/utils/getProductRating";

import { Product, ProductCardCompParams } from "../../typings/index";



const ProductCard: React.FC<ProductCardCompParams> = ({"product": product}) => {
  const router = useRouter();
  // console.info("...ProductCard.product:", product);

  const productRating = getProductRating(product);


return (
    <div onClick={() => router.push(`/product/${product.id}`) } className="col-span-1 cursor-pointer border-[1.2px] border-slate-200 bg-slate-50 rounded-sm p-2 transition hover:scale-105 text-center text-sm"> 

      <div className='flex flex-col items-center w-full gap-1'>

        <div className="aspect-square overflow-hidden relative w-full"> 
        <Image fill
        src={product.images[0].image} 
        alt={product.name}
        className="w-full h-full object-contain"
        />
        </div>
        <div className="mt-4">{ truncateText(product.name)}</div>
        <div> 
          <Rating value={productRating} readOnly></Rating>
        </div>
        <div>{product.reviews.length} reviews</div>
        <div className='font-semibold'>{formatPrice(product.price)}</div>

      </div>

    </div>
  )
}

export default ProductCard;

