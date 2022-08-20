import React from 'react';
import * as FormComponents from '../form-components';
import Form from './Form.jsx';

import './CreateProduct.css';


const CreateProduct = ({ username }) => {
  const [errorMessage, setErrorMessage] = React.useState("");

  return (
    <div className="w-1/2 m-auto">
      <FormComponents.ErrorBox
        message={errorMessage}
        updateErrorMessage={setErrorMessage}
      />

      <div className="w-full shadow-xl">
        <Form
          updateErrorMessage={setErrorMessage}
          username={username}
        />
      </div>
    </div>
  );
};

export default CreateProduct;