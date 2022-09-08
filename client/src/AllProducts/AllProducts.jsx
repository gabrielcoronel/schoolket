import { useAsync } from '../hooks';
import { getAllProducts } from '../util/server-util.js';
import ProductsView from '../app-components/ProductsView.jsx';
import './AllProducts.css';

const AllProducts = () => {
  const fetched = useAsync(getAllProducts);

  if (fetched === null)
    return <div>Cargando</div>
  else
    return <ProductsView products={fetched.products} />
};

export default AllProducts;