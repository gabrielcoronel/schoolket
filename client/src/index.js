import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'

import fetchResource from './fetchResource.js';

import LogIn from './LogIn.jsx';

const Test = () => {
  const [response, setResponse] = useState({});

  useEffect(() => {
    const newResponse = fetchResource("http://localhost:3001/api/getStudent", { username: "roberto_come_caca" });

    setResponse(newResponse);
  }, [response]);

  return (
    <div>
      {JSON.stringify(response)}
    </div>
  );
};

const root = ReactDOM.createRoot(
  document.querySelector("#root")
);

root.render(<LogIn />);