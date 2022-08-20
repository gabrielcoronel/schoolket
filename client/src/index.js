import ReactDOM from 'react-dom/client'
import Product from './Product/Product.jsx';

const root = ReactDOM.createRoot(
  document.querySelector("#root")
);

root.render(
  <Product product_id={3} />
);