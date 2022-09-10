import ProductBox from './ProductBox.jsx';

const ProductsView = ({ products }) => {
  return (
    <div className="flex flex-col gap-6 p-4 w-1/2 m-auto">
      {
        products.map((product) => {
          return (
            <ProductBox key={product.product_id} product={product} />
          );
        })
      }
    </div>
  );
}

export default ProductsView;