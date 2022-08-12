import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import LogIn from './LogIn.jsx';
import CreateProduct from './CreateProduct.jsx';

const Test = () => {
  return (
    <div>
      Esta es mi imagen:&nbsp;

      <img src='http://localhost:3001/img/profile/copy.png' alt=''/>
    </div>
  );
};

const root = ReactDOM.createRoot(
  document.querySelector("#root")
);

root.render(<CreateProduct />);