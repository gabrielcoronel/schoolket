import React from 'react'
import ReactDOM from 'react-dom/client'

import LogIn from './LogIn.jsx';

function Main() {
  return (
    <div>
      Hola mundo!
    </div>
  );
}

const root = ReactDOM.createRoot(
  document.querySelector("#root")
);

root.render(<LogIn />);