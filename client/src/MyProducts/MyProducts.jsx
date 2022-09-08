import { useAsync } from '../hooks';
import { getStudentProducts } from '../util/server-util.js';
import ProductsView from '../app-components/ProductsView.jsx';

const MyProducts = ({ username }) => {
  const fetched = useAsync(async () => await getStudentProducts(username));

  if (fetched === null)
    return <div>Cargando...</div>
  else
    return <ProductsView products={fetched.products} />
};

export default MyProducts;