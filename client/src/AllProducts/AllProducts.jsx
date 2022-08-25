import { useAsync } from '../hooks';
import { getAllProducts } from '../util/server-util.js';
import View from './View.jsx';
import './AllProducts.css';

const AllProducts = () => {
  const fetched = useAsync(getAllProducts);

  if (fetched === null)
    return <div>Cargando</div>
  else
    return <View data={fetched} />
};

export default AllProducts;