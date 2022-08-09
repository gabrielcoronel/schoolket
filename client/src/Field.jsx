import { useEffect } from 'react';
import * as Formik from 'formik';

const Field = ({
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

      <input
        {...field}
        {...props}
      />
    </label>
  );
};

export default Field;