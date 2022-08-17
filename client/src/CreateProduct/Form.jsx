import * as Formik from 'formik';
import * as Validation from '../util/validation-schemas.js';
import { createProduct } from '../util/server-util.js';
import * as FormComponents from '../form-components';
import * as GeneralComponents from '../general-components';
import PictureChooser from './PictureChooser.jsx';

const Form = ({
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
      validationSchema={Validation.productForm}
      onSubmit={async ({ files, ...product }, { setSubmitting, resetForm }) => {
        try {
          await createProduct({ username, ...product }, files);
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
        <FormComponents.Form>
          <PictureChooser
            updateFormData={(files) => {
              setFieldValue("files", files);
            }}
            updateErrorMessage={updateErrorMessage}
            isSubmitting={isSubmitting}
            name="files"
          />

          <div className="w-11/12 grid grid-cols-4 gap-4">
            <GeneralComponents.Field
              className="Field title"
              updateErrorMessage={updateErrorMessage}
              isSubmitting={isSubmitting}
              name="title"
              label="Título"
              type="text"
            />

            <GeneralComponents.Field
              className="Field price"
              updateErrorMessage={updateErrorMessage}
              isSubmitting={isSubmitting}
              name="price"
              label="Precio"
              type="number"
              min="0"
            />

            <GeneralComponents.TextArea
              className="Field description"
              updateErrorMessage={updateErrorMessage}
              isSubmitting={isSubmitting}
              name="description"
              label="Descripción"
              type="text"
            />
          </div>

          <FormComponents.Button label="Publicar" type="submit" />
        </FormComponents.Form>
      )}
    </Formik.Formik>
  );
};

export default Form;