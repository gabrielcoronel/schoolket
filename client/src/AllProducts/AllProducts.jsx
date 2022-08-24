import { getAllProducts } from '../util/server-util.js';
import { useAsync } from '../hooks';
import Product from './Product.jsx';
import './AllProducts.css';

const AllProducts = () => {
  const data = useAsync(getAllProducts);

  if (data === null)
    return <div>Cargando</div>

  const products = data.products;

  return (
    <div className="grid grid-cols-4 gap-8 p-4">
      {
        products.map((product) => {
          return (
            <Product key={product.product_id} data={product} />
          );
        })
      }
    </div>
  );
};

export default AllProducts;