import { useState } from 'react';
import * as Formik from 'formik';
import * as Yup from 'yup';
import { Field, TextArea, FileChooser, ErrorBox } from './components';
import { regularField } from './util/validation-schemas.js';
import { createProduct } from './util/server-util.js';
import './CreateProduct.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { classNames } from './util/react-util.js';

const CreateProductForm = ({
  username, updateErrorMessage
}) => {
  return (
    <Formik.Formik
      initialValues={{
        title: '',
        description: '',
        price: 0,
        files: null
      }}
      validationSchema={Yup.object({
        title: regularField("título"),
        description: Yup.string()
          .required("Tienes que describir tu producto"),
        price: Yup.number()
          .required("Tienes que ponerle un precio a tu producto")
          .integer("El precio solo puede ser una cantidad entera")
          .positive("No existen los precios negativos"),
        files: Yup.mixed().required("Tienes que añadir por lo menos una imagen de tu producto")
      })}
      onSubmit={async ({ files, ...product }, { setSubmitting, resetForm }) => {
        try {
          await createProduct({ username, ...product}, files);
        } catch (err) {
          updateErrorMessage("Algo salió mal");

          setSubmitting(false);
          return;
        }

        resetForm();
        setSubmitting(false);
        return;
      }}
    >
      {({ isSubmitting, setFieldValue }) => (
        <Formik.Form>
          <div className="FileChooser-wrapper">
            <FileChooser
              className="accented-button FileChooser-product"
              updateFormData={(files) => {
                setFieldValue("files", files);
              }}
              updateErrorMessage={updateErrorMessage}
              isSubmitting={isSubmitting}
              name="files"
              label={
                <span>
                  <FontAwesomeIcon icon={faImage}/>
                  &nbsp;Añadir imagen
                </span>
              }
              accept="image/*"
              multiple={true}
            />
          </div>

          <div className="Field-wrapper">
            <div>
              <Field
                className="Field"
                updateErrorMessage={updateErrorMessage}
                isSubmitting={isSubmitting}
                name="title"
                label="Título"
                type="text"
              />

              <TextArea
                className="Field"
                updateErrorMessage={updateErrorMessage}
                isSubmitting={isSubmitting}
                name="description"
                label="Descripción"
                type="text"
              />

              <Field
                className="Field"
                updateErrorMessage={updateErrorMessage}
                isSubmitting={isSubmitting}
                name="price"
                label="Precio"
                type="number"
                min="0"
              />
            </div>
          </div>

          <div className="submit-wrapper">
            <button
              className="accented-button submit-button"
              type="submit"
            >
              Publicar
            </button>
          </div>
        </Formik.Form>
      )}
    </Formik.Formik>
  );
};

const CreateProduct = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const errorBoxClassName = classNames([
    ( !errorMessage ? "invisible" : null),
    "ErrorBox"
  ]);

  return (
    <div className="CreateProduct">
      <ErrorBox
        className={errorBoxClassName}
        message={errorMessage}
        updateErrorMessage={setErrorMessage}
      />
      <CreateProductForm
        updateErrorMessage={setErrorMessage}
        username="gabriel"
      />
    </div>
  );
};

export default CreateProduct;