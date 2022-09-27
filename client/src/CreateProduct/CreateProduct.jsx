import { useState, useContext } from 'react';
import UsernameContext from '../UsernameContext.js';
import * as FormComponents from '../form-components';
import Form from './Form.jsx';
import './CreateProduct.css';

// Este componente fue arruinado al usar contexto

const CreateProduct = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const { value } = useContext(UsernameContext);

  return (
    <div className="w-3/4 mx-auto mt-20">
      <FormComponents.ErrorBox
        message={errorMessage}
        updateErrorMessage={setErrorMessage}
      />

      <div className="bg-white w-full rounded-xl shadow-2xl p-4 border border-slate-300">
        <Form
          updateErrorMessage={setErrorMessage}
          username={value}
        />
      </div>
    </div>
  );
};

export default CreateProduct;