import { useState, useContext } from 'react';
import UsernameContext from '../UsernameContext.js';
import { useAsync } from '../hooks';
import { getAllProducts } from '../util/server-util.js';
import ProductsView from '../app-components/ProductsView.jsx';
import SearchBar from '../app-components/SearchBar.jsx';
import './AllProducts.css';

const searchProduct = (search, products) => {
  return products.filter((product) => {
    return product.title.toLowerCase().startsWith(search)
  });
};

const AllProducts = () => {
  const [search, setSearch] = useState("");
  const { value, setValue } = useContext(UsernameContext);
  const fetched = useAsync(() => getAllProducts(value));

  if (fetched === null)
    return <div>Cargando</div>;

  const products = searchProduct(search, fetched.products);

  return (
    <div>
      <div className="flex justify-center items-center">
        <SearchBar search={search} updateSearch={setSearch} />
      </div>

      <ProductsView products={products} />
    </div>
  );
};

export default AllProducts;