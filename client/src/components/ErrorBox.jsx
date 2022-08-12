import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const ErrorBox = ({
  message, updateErrorMessage,
  className
}) => {
  return (
    <div className={className}>
      <button onClick={() => updateErrorMessage("")}>
        <FontAwesomeIcon icon={faXmark}/>
      </button>

      <span>
        {message}
      </span>
    </div>
  );
};

export default ErrorBox;