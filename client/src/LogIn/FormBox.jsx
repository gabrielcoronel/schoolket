import React from 'react';
import ModeButton from './ModeButton.jsx';
import SignUpForm from './SignUpForm.jsx';
import SignInForm from './SignInForm.jsx';

const FormBox = ({ updateErrorMessage }) => {
  const [isSigningUp, setIsSigningUp] = React.useState(true);

  return (
    <div className="w-full shadow-xl">
      <div className="mb-3">
        <ModeButton
          label="Crear cuenta"
          selected={isSigningUp}
          update={() => setIsSigningUp(true)}
        />

        <ModeButton
          label="Iniciar sesión"
          selected={!isSigningUp}
          update={() => setIsSigningUp(false)}
        />
      </div>

      {
        isSigningUp ?
          <SignUpForm
            updateErrorMessage={updateErrorMessage}
          /> :
          <SignInForm
            updateErrorMessage={updateErrorMessage}
          />
      }
    </div>
  );
};

export default FormBox;