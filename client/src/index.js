import React from 'react'
import ReactDOM from 'react-dom/client'
import LogIn from './LogIn/LogIn.jsx';
import CreateProduct from './CreateProduct/CreateProduct.jsx';
import Profile from './Profile/Profile.jsx';

const root = ReactDOM.createRoot(
  document.querySelector("#root")
);

root.render(
  <div>
    <Profile username={"lupeeee"}/>
  </div>
);