import * as Formik from 'formik';
import * as Yup from 'yup';
import { Field, FileChooser } from './components';
import { regularField } from './util/validation-schemas.js';
import { createProduct, storeProductPictures } from './util/server-util.js';

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
          .positive("No existen los precios negativos")
      })}
      onSubmit={async ({ files, price, ...productValues }, { setSubmitting, resetForm }) => {
        try {
          const response = await createProduct({
            username,
            price: price.toString(),
            ...productValues
          });

          if (files !== null && files !== undefined) {
            const { insertId } = await response.json();

            await storeProductPictures(insertId, files);
          }
        } catch (err) {
          updateErrorMessage("Algo salió mal");
          setSubmitting(false);
          return;
        }

        console.log("negrooo");

        resetForm();
        setSubmitting(false);
        return;
      }}
    >
      {({ isSubmitting, setFieldValue }) => (
        <Formik.Form>
          <FileChooser
            updateFormData={(files) => {
              setFieldValue("files", files);
            }}
            updateErrorMessage={updateErrorMessage}
            isSubmitting={isSubmitting}
            name="files"
            label="Añadir fotográfia"
            accept="image/*"
            multiple={true}
          />

          <Field
            updateErrorMessage={updateErrorMessage}
            isSubmitting={isSubmitting}
            name="title"
            label="Título"
            type="text"
          />

          <Field
            updateErrorMessage={updateErrorMessage}
            isSubmitting={isSubmitting}
            name="description"
            label="Descripción"
            type="text"
          />

          <Field
            updateErrorMessage={updateErrorMessage}
            isSubmitting={isSubmitting}
            name="price"
            label="Precio"
            type="number"
            min="0"
          />

          <button type="submit">Publicar</button>
        </Formik.Form>
      )}
    </Formik.Formik>
  );
};

const CreateProduct = () => {
  return (
    <div>
      <CreateProductForm updateErrorMessage={(message) => console.log(message)} username="gabriel"/>
    </div>
  );
};

export default CreateProduct;