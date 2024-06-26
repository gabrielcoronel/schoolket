import { useAsync } from '../hooks';
import { getStudentProducts } from '../util/server-util.js';
import ProductsView from '../app-components/ProductsView.jsx';
import AddProduct from './AddProduct.jsx';
import Loading from '../app-components/Loading.jsx';

const MyProducts = ({ username }) => {
  const fetched = useAsync(async () => await getStudentProducts(username));

  if (fetched === null)
    return <Loading />;

  return (
    <div className="flex flex-col justify-center items-center">
      <ProductsView products={fetched.products} />

      <AddProduct />
    </div>
  );
};

export default MyProducts;