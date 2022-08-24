import { getAllProducts } from '../util/server-util.js';
import { useAsync } from '../hooks';
import Product from './Product.jsx';
import './AllProducts.css';

const AllProducts = () => {
  // const data = useAsync(getAllProducts);

  // Trabajé Expotec en el colegio
  const data = {
    products: [
      {
        product_id: 1,
        title: "Afjldaslfjñasdlñfjlñasdjflñjasdlñfjsdlajflñasdjlfjasdlfjasdlñjfasdlñfjlasdjflasdjladsf",
        description: "a",
        price: 1
      },
      {
        product_id: 2,
        title: "A",
        description: "adfjsalfjlasdjflasdjñfljsdjfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
        price: 1
      },
      {
        product_id: 3,
        title: "A",
        description: "a",
        price: 1
      },
      {
        product_id: 4,
        title: "A",
        description: "a",
        price: 1
      },
      {
        product_id: 5,
        title: "A",
        description: "a",
        price: 1
      },
      {
        product_id: 6,
        title: "A",
        description: "a",
        price: 1
      },
      {
        product_id: 7,
        title: "A",
        description: "a",
        price: 1
      }
    ]
  };

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