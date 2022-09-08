import { useParams } from "react-router-dom";
import Product from "../Product/Product";

const ProductWrapper = () => {
  const params = useParams();

  return <Product product_id={params.product_id} />;
};

export default ProductWrapper;