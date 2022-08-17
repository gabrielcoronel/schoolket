import * as Formik from 'formik';
import "../styles/forms.css";

const Form = ({ children }) => {
  return (
    <Formik.Form
      className="flex flex-col items-center gap-3"
    >
      {children}
    </Formik.Form>
  );
};

export default Form;