import { useEffect } from "react";
import * as Formik from 'formik';

const TextArea = ({
  label, className,
  updateErrorMessage,
  isSubmitting,
  ...props
}) => {
  const [field, meta] = Formik.useField({ ...props });

  useEffect(() => {
    if (isSubmitting && meta.error !== undefined)
      updateErrorMessage(meta.error);
  }, [meta.error, isSubmitting, updateErrorMessage]);

  return (
    <label className={className}>
      {label}

      <textarea
        {...field}
        {...props}
      />
    </label>
  );
};

export default TextArea;