import ReactDOM from 'react-dom/client'
import CreateProduct from './CreateProduct/CreateProduct.jsx';
import Profile from './Profile/Profile.jsx';
import AllProducts from './AllProducts/AllProducts.jsx';
import MyProducts from './MyProducts/MyProducts.jsx';
import Main from './Main/Main.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/global.css';

// Wrappers
import ProfileWrapper from './RouteWrappers/ProfileWrapper.jsx';
import ProductWrapper from './RouteWrappers/ProductWrapper.jsx';

// Contexto
import UsernameContext from './UsernameContext.js';
import { useContext, useState } from 'react';

const AppRouter = () => {
  const { value } = useContext(UsernameContext);
  const isLoggedIn = value === null ? false : true;

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main isLoggedIn={isLoggedIn} />}>
          <Route index element={<AllProducts />} />

          <Route path='products' element={<AllProducts />} />

          <Route path='myproducts' element={<MyProducts username={value} />} />

          <Route path='me' element={<Profile username={value} />} />

          <Route path='/student'>
            <Route path=':username' element={<ProfileWrapper />} />
          </Route>

          <Route path='/product'>
            <Route path=':product_id' element={<ProductWrapper />} />
          </Route>

          <Route path='/createproduct' element={<CreateProduct />} />
        </Route>

        <Route path='*' element={<h1>Oops!</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

const App = () => {
  const [value, setValue] = useState(null);

  return (
    <UsernameContext.Provider value={{ value, setValue }}>
      <AppRouter />
    </UsernameContext.Provider>
  );
};

const root = ReactDOM.createRoot(
  document.querySelector("#root")
);

root.render(
  <App />
);
