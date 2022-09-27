import * as Formik from 'formik';
import * as FormComponents from '../form-components';
import * as Validation from '../util/validation-schemas.js';
import { usernameTaken, phoneNumberTaken, createStudent } from '../util/server-util.js';
import AvatarChooser from './AvatarChooser.jsx';

// Desorden
import { useContext } from 'react';
import UsernameContext from '../UsernameContext';

const SignUpForm = ({ updateErrorMessage }) => {
  const { setValue } = useContext(UsernameContext);

  return (
    <Formik.Formik
      initialValues={{
        username: '',
        name: '',
        surname1: '',
        surname2: '',
        phone_number: '',
        password: '',
        files: null
      }}
      validationSchema={Validation.signUpForm}
      onSubmit={async ({ files, ...student }, { setSubmitting, resetForm }) => {
        if (await usernameTaken(student.username)) {
          updateErrorMessage(
            `Ya existe una cuenta con ${student.username} como nombre de usuario`
          );

          setSubmitting(false);
          return;
        }

        if (await phoneNumberTaken(student.phone_number)) {
          updateErrorMessage("Ya existe una cuenta con este número de teléfono");

          setSubmitting(false);
          return;
        }

        try {
          await createStudent(student, files);
        } catch (err) {
          updateErrorMessage("Algo salió mal");

          setSubmitting(false);
          return;
        }

        resetForm();
        updateErrorMessage("");
        setValue(student.username);
        setSubmitting(false);
        return;
      }}
    >
      {({
        isSubmitting, setFieldValue
      }) => (
        <FormComponents.Form>
          <AvatarChooser
            updateFormData={(formData) => {
              setFieldValue("files", formData);
            }}
            updateErrorMessage={updateErrorMessage}
            isSubmitting={isSubmitting}
            name="files"
          />

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
            name="name"
            label="Nombre"
            type="text"
          />
          <FormComponents.Field
            updateErrorMessage={updateErrorMessage}
            isSubmitting={isSubmitting}
            name="surname1"
            label="Primer apellido"
            type="text"
          />
          <FormComponents.Field
            updateErrorMessage={updateErrorMessage}
            isSubmitting={isSubmitting}
            name="surname2"
            label="Segundo apellido"
            type="text"
          />
          <FormComponents.Field
            updateErrorMessage={updateErrorMessage}
            isSubmitting={isSubmitting}
            name="phone_number"
            label="Número de teléfono"
            type="tel"
          />
          <FormComponents.Field
            updateErrorMessage={updateErrorMessage}
            isSubmitting={isSubmitting}
            name="password"
            label="Contraseña"
            type="password"
          />

          <FormComponents.Button label="Crear cuenta" type="submit" />
        </FormComponents.Form>
      )}
    </Formik.Formik>
  );
};

export default SignUpForm;
