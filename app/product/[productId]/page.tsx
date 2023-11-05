
import { products } from "@/utils/products";
import Container from "@/app/components/Container";
import ProductDetails from "./ProductDetails"

import { Product } from "../../typings"


const Product = ({params} : {params: Product}) => {

  return <div className='p-8'>
    <Container>
      <ProductDetails product={products[2]}></ProductDetails>
    </Container>
  </div>
}

export default Product;
