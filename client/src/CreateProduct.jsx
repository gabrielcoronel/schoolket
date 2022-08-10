import * as Formik from 'formik';
import * as Yup from 'yup';
import { regularField } from './util/validation-schemas.js';

// TODO: Ordenar el proyecto

const CreateProduct = () => {
  return (
    <Formik.Formik
      initialValues={{
        title: '',
        description: '',
        price: 0,
        files: null,
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
      onSubmit={({ setSubmitting }) => {
        // TODO
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Formik.Form>
        </Formik.Form>
      )}
    </Formik.Formik>
  );
};

export default CreateProduct;