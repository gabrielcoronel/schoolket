import ReactDOM from 'react-dom/client'
import LogIn from './LogIn/LogIn.jsx';
import CreateProduct from './CreateProduct/CreateProduct.jsx';
import Profile from './Profile/Profile.jsx';
import Product from './Product/Product.jsx';
import AllProducts from './AllProducts/AllProducts.jsx';
import Main from './Main/Main.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main isLoggedIn={true}/>}>
          <Route path='products' element={<AllProducts />} />
          <Route path='me' element={<Profile username="edgar" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(
  document.querySelector("#root")
);

root.render(
  <App />
);