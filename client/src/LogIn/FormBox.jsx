import React from 'react';
import ModeButton from './ModeButton.jsx';
import SignUpForm from './SignUpForm.jsx';
import SignInForm from './SignInForm.jsx';

const FormBox = ({ updateErrorMessage }) => {
  const [isSigningUp, setIsSigningUp] = React.useState(true);

  return (
    <div className="bg-white w-full shadow-2xl">
      <div>
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

      <div className="p-4">
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
    </div>
  );
};

export default FormBox;