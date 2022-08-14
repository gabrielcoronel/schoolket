import React from 'react'
import ReactDOM from 'react-dom/client'
import LogIn from './LogIn.jsx';
import CreateProduct from './CreateProduct.jsx';
import './tailwind.css';

import { useState, useEffect } from 'react';

const useCounter = (start) => {
  const [count, setCount] = useState(start);
  const interval = setInterval(() => setCount(count + 1), 1000);

  useEffect(() => {
    return () => clearInterval(interval);
  });

  return count;
};

const Counter = ({ start, className }) => {
  const count = useCounter(Number(start));

  return (
    <div className={className}>
      {count}
    </div>
  );
};

const MyCounter = () => {
  return (
    <div className="flex justify-center">
      <Counter
        start="0"
        className="bg-[#0000ff] text-white w-1/6 h-60 flex justify-center items-center"
      />
    </div>
  );
};

const MyPage = () => {
  return (
    <>
      This is my Counter

      <MyCounter />
    </>
  )
};

const root = ReactDOM.createRoot(
  document.querySelector("#root")
);

root.render(<MyPage />);