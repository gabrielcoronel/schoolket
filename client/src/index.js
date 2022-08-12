import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import LogIn from './LogIn.jsx';
import CreateProduct from './CreateProduct.jsx';

const root = ReactDOM.createRoot(
  document.querySelector("#root")
);

root.render(<CreateProduct />);