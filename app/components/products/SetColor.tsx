'use client'

import { SetColorCompParams } from "@/app/typings";
import { dividerClasses } from "@mui/material";

const SetColor: React.FC<SetColorCompParams> = ( {images, cartProduct, handleColorSelect} ) => {

  // console.info("...SetColor.images:", images);
  // console.info("...cartProduct:", cartProduct);

  return (
    
    <div>
      <div className="flex gap-4 items-center">
        <span className="font-semibold">COLOR:</span>
      </div>

      <div className="flex gap-1">
        {
        images.map((image) => {
          // console.info("...image:", image);
          return( 
          <div 
          key={image.color} 
          onClick={() => handleColorSelect(image)}
          className={`h-7 w-7 rounded-full border-teal-300 flex items-center justify-center ${cartProduct.selectedImg && cartProduct.selectedImg.color===image.color ? "border-[1.5px]" : "border-none"}`} >
            <div style={{ background: image.colorCode }} className="h-5 w-5 rounded-full border-[1.2px] border-slate-300 cursor-pointer ">
            </div>
          </div> )
        })}
      </div>

    </div>
  )
}


export default SetColor;
