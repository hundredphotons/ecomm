
const getProductRating = (data: any) => {
  // console.info("...getProductRating.data:", data);
  const productRating = data.reviews.reduce( (acc: number, item: any) => item.rating + acc, 0) / data.reviews.length;
  return productRating;
}

export default getProductRating;