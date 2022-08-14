import { useState } from 'react';
import * as Formik from 'formik';
import * as Yup from 'yup';

import { Field, FileChooser, ErrorBox } from './components';
import { regularField, phoneNumberField } from './util/validation-schemas.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';

import {
  JSONHeaders, serverURL,
  usernameTaken, createStudent
} from './util/server-util.js';
import { classNames } from './util/react-util.js';

const SignUpForm = ({ updateErrorMessage }) => {
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
      validationSchema={Yup.object({
        username: regularField("nombre de usuario"),
        name: regularField("nombre"),
        surname1: regularField("primer apellido"),
        surname2: regularField("segundo apellido"),
        phone_number: phoneNumberField,
        password: regularField("contraseña"),
        files: Yup.mixed().required("Tienes que elegir un avatar")
      })}
      onSubmit={async ({ files, ...student }, { setSubmitting, resetForm }) => {
        if (await usernameTaken(student.username)) {
          updateErrorMessage(
            `Ya existe una cuenta con ${student.username} como nombre de usuario`
          );

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
        setSubmitting(false);
        return;
      }}
    >
      {({
        isSubmitting, setFieldValue
      }) => (
        <Formik.Form className="form">
          <div className="FileChooser-wrapper">
            <FileChooser
              className="accented-button FileChooser-avatar"
              updateFormData={(formData) => {
                setFieldValue("files", formData);
              }}
              updateErrorMessage={updateErrorMessage}
              isSubmitting={isSubmitting}
              name="files"
              label={
                <span>
                  <FontAwesomeIcon icon={faArrowUpFromBracket}/>
                  &nbsp;Selecciona un avatar
                </span>
              }
              accept="image/*"
              multiple={false}
            />
          </div>

          <div className="Field-wrapper">
            <div>
              <Field
                className="Field"
                updateErrorMessage={updateErrorMessage}
                isSubmitting={isSubmitting}
                name="username"
                label="Nombre de usuario"
                type="text"
              />
              <Field
                className="Field"
                updateErrorMessage={updateErrorMessage}
                isSubmitting={isSubmitting}
                name="name"
                label="Nombre"
                type="text"
              />
              <Field
                className="Field"
                updateErrorMessage={updateErrorMessage}
                isSubmitting={isSubmitting}
                name="surname1"
                label="Primer apellido"
                type="text"
              />
              <Field
                className="Field"
                updateErrorMessage={updateErrorMessage}
                isSubmitting={isSubmitting}
                name="surname2"
                label="Segundo apellido"
                type="text"
              />
              <Field
                className="Field"
                updateErrorMessage={updateErrorMessage}
                isSubmitting={isSubmitting}
                name="phone_number"
                label="Número de teléfono"
                type="tel"
              />
              <Field
                className="Field"
                updateErrorMessage={updateErrorMessage}
                isSubmitting={isSubmitting}
                name="password"
                label="Contraseña"
                type="password"
              />
            </div>
          </div>

          <button
            className="accented-button submit-button"
            type="submit"
          >
            Crear cuenta
          </button>
        </Formik.Form>
      )}
    </Formik.Formik>
  );
};

const SignInForm = ({ updateErrorMessage }) => {
  return (
    <Formik.Formik
      initialValues={{
        username: '',
        password: '',
      }}
      validationSchema={Yup.object({
        username: regularField("nombre de usuario"),
        password: regularField("contraseña")
      })}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const errorMessage = `Nombre de usuario o contraseña incorrectos`;

        if (!await usernameTaken(values.username)) {
          updateErrorMessage(errorMessage);

          setSubmitting(false);
          return;
        }

        let student = null;

        try {
          student = await fetch(serverURL("/getStudent"), {
            method: "POST",
            body: JSON.stringify({ username: values.username }),
            headers: JSONHeaders
          });
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
        <Formik.Form className="form">
          <div className="Field-wrapper">
            <div>
              <Field
                className="Field"
                updateErrorMessage={updateErrorMessage}
                isSubmitting={isSubmitting}
                name="username"
                label="Nombre de usuario"
                type="text"
              />

              <Field
                className="Field"
                updateErrorMessage={updateErrorMessage}
                isSubmitting={isSubmitting}
                name="password"
                label="Contraseña"
                type="password"
              />
            </div>
          </div>

          <button
            className="accented-button submit-button"
            type="submit"
          >
            Iniciar sesión
          </button>
        </Formik.Form>
      )}
    </Formik.Formik>
  );
};

const ModeSelect = ({
  isSigningUp, updateIsSigningUp
}) => {
  const baseClasses = ["accented-button", "ModeSelect-button"];
  const signUpClasses = baseClasses.concat([
    (isSigningUp ? "ModeSelect-selected" : null)
  ]);
  const signInClasses = baseClasses.concat([
    (!isSigningUp ? "ModeSelect-selected" : null)
  ]);

  return (
    <div>
      <button
        className={classNames(signUpClasses)}
        onClick={() => updateIsSigningUp(true)}
      >
        Crear Cuenta
      </button>

      <button
        className={classNames(signInClasses)}
        onClick={() => updateIsSigningUp(false)}
      >
        Iniciar sesión
      </button>
    </div>
  );
};

const FormBox = ({ updateErrorMessage }) => {
  const [isSigningUp, setIsSigningUp] = useState(true);

  return (
    <div className="FormBox">
      <ModeSelect
        isSigningUp={isSigningUp}
        updateIsSigningUp={setIsSigningUp}
      />

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

const LogIn = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const errorBoxClassName = classNames([
    ( !errorMessage ? "invisible" : null),
    "ErrorBox"
  ]);

  return (
    <div className="LogIn">
      <ErrorBox
        className={errorBoxClassName}
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