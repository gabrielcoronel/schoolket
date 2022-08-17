import * as GeneralComponents from '../general-components';
import "../styles/forms.css";

const Field = (props) => {
  return (
    <GeneralComponents.Field
      className="Field"
      {...props}
    />
  );
};

export default Field;