import { useState, useContext } from 'react';
import UsernameContext from '../UsernameContext.js';
import { useAsync } from '../hooks';
import { getAllProducts } from '../util/server-util.js';
import ProductsView from '../app-components/ProductsView.jsx';
import SearchBar from '../app-components/SearchBar.jsx';
import NotFound from './NotFound.jsx';
import Loading from '../app-components/Loading.jsx';
import './AllProducts.css';

const searchProduct = (search, products) => {
  return products.filter((product) => {
    return product.title.toLowerCase().startsWith(search)
  });
};

const AllProducts = () => {
  const [search, setSearch] = useState("");
  const { value } = useContext(UsernameContext);
  const fetched = useAsync(() => getAllProducts(value));

  if (fetched === null)
    return <Loading />;

  const products = searchProduct(search, fetched.products);

  console.log(products);

  return (
    <div>
      <div className="flex justify-center items-center">
        <SearchBar search={search} updateSearch={setSearch} />
      </div>

      {
        (products.length === 0) ?
          <NotFound /> :
          <ProductsView products={products} />
      }

    </div>
  );
};

export default AllProducts;