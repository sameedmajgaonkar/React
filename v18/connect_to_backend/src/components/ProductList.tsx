import { useEffect } from "react";

const ProductList = ({ category }: { category: string }) => {
  useEffect(() => {
    console.log("Fetching products in ", category);
  }, [category]);
  return (
    <div>
      <h3>ProductList {category}</h3>
    </div>
  );
};

export default ProductList;
