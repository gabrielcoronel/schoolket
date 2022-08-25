import { useState } from 'react';
import Product from './Product.jsx';
import SearchBar from './SearchBar.jsx';

const searchProduct = (search, products) => {
  return products.filter((product) => {
    return product.title.toLowerCase().startsWith(search)
  });
};

const View = ({ data }) => {
  const [search, setSearch] = useState("");
  const products = searchProduct(search, data.products);

  return (
    <div>
      <div className="flex justify-center items-center">
        <SearchBar search={search} updateSearch={setSearch} />
      </div>

      <div className="flex flex-col gap-6 p-4 w-1/2 m-auto">
        {
          products.map((product) => {
            return (
              <Product key={product.product_id} data={product} />
            );
          })
        }
      </div>
    </div>
  );
}

export default View;