import * as GeneralComponents from '../general-components';
import { classNames } from "../util/react-util";
import "../styles/forms.css";

const ErrorBox = (props) => {
  const classes = classNames([
    "ErrorBox",
    (!props.message ? "hidden" : null)
  ]);

  return (
    <GeneralComponents.ErrorBox
      className={classes}
      {...props}
    />
  );
};

export default ErrorBox;