import ReactDOM from 'react-dom/client'
import LogIn from './LogIn/LogIn.jsx';
import CreateProduct from './CreateProduct/CreateProduct.jsx';
import Profile from './Profile/Profile.jsx';
import Product from './Product/Product.jsx';
import AllProducts from './AllProducts/AllProducts.jsx';

const root = ReactDOM.createRoot(
  document.querySelector("#root")
);

root.render(
  <Product product_id={2} />
);