import * as Formik from 'formik';
import * as FormComponents from '../form-components';
import * as Validation from '../util/validation-schemas.js';
import { serverURL, usernameTaken, JSONHeaders } from '../util/server-util.js';

const SignInForm = ({ updateErrorMessage }) => {
  return (
    <Formik.Formik
      initialValues={{
        username: '',
        password: '',
      }}
      validationSchema={Validation.signInForm}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const errorMessage = `Nombre de usuario o contraseña incorrectos`;

        if (!await usernameTaken(values.username)) {
          updateErrorMessage(errorMessage);

          setSubmitting(false);
          return;
        }

        let student = null;

        try {
          // Refactorizar
          student = await fetch(serverURL("/getStudent"), {
            method: "POST",
            body: JSON.stringify({ username: values.username }),
            headers: JSONHeaders
          });
          student = await student.json();
        } catch (err) {
          updateErrorMessage("Algo salió mal");

          setSubmitting(false);
          return;
        }

        if (student.password !== values.password) {
          updateErrorMessage(errorMessage);

          setSubmitting(false);
          return;
        }

        resetForm();
        updateErrorMessage("");
        setSubmitting(false);
        return;
      }}
    >
      {({ isSubmitting }) => (
        <FormComponents.Form>
          <FormComponents.Field
            updateErrorMessage={updateErrorMessage}
            isSubmitting={isSubmitting}
            name="username"
            label="Nombre de usuario"
            type="text"
          />

          <FormComponents.Field
            updateErrorMessage={updateErrorMessage}
            isSubmitting={isSubmitting}
            name="password"
            label="Contraseña"
            type="password"
          />

          <FormComponents.Button label="Iniciar sesión" type="submit" />
        </FormComponents.Form>
      )}
    </Formik.Formik>
  );
};

export default SignInForm;