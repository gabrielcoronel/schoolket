import { useState, useContext } from 'react';
import UsernameContext from '../UsernameContext.js';
import * as FormComponents from '../form-components';
import Form from './Form.jsx';
import './CreateProduct.css';

// Este componente fue arruinado al usar contexto

const CreateProduct = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const { value, setValue } = useContext(UsernameContext);

  return (
    <div className="w-1/2 m-auto">
      <FormComponents.ErrorBox
        message={errorMessage}
        updateErrorMessage={setErrorMessage}
      />

      <div className="w-full shadow-xl">
        <Form
          updateErrorMessage={setErrorMessage}
          username={value}
        />
      </div>
    </div>
  );
};

export default CreateProduct;