import { useState } from 'react';
import ProductBox from './ProductBox.jsx';
import SearchBar from '../app-components/SearchBar.jsx';

const searchProduct = (search, products) => {
  return products.filter((product) => {
    return product.title.toLowerCase().startsWith(search)
  });
};

const ProductsView = ({ products }) => {
  const [search, setSearch] = useState("");
  const foundProducts = searchProduct(search, products);

  return (
    <div>
      <div className="flex justify-center items-center">
        <SearchBar search={search} updateSearch={setSearch} />
      </div>

      <div className="flex flex-col gap-6 p-4 w-1/2 m-auto">
        {
          foundProducts.map((product) => {
            return (
              <ProductBox key={product.product_id} product={product} />
            );
          })
        }
      </div>
    </div>
  );
}

export default ProductsView;