const ErrorBox = ({
  message, updateErrorMessage,
  className, buttonLabel
}) => {
  return (
    <div className={className}>
      <button onClick={() => updateErrorMessage("")}>
        {buttonLabel}
      </button>

      <span>
        {message}
      </span>
    </div>
  );
};

export default ErrorBox;