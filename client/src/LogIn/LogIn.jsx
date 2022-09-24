import React from 'react';
import * as FormComponents from '../form-components';
import FormBox from './FormBox.jsx';

import './LogIn.css';

const LogIn = () => {
  const [errorMessage, setErrorMessage] = React.useState("");

  return (
    <div
      className="w-1/3 mx-auto mt-4"
    >
      <FormComponents.ErrorBox
        message={errorMessage}
        updateErrorMessage={setErrorMessage}
      />

      <FormBox
        updateErrorMessage={setErrorMessage}
      />
    </div>
  );
};


export default LogIn;