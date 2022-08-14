import { useField } from "formik";
import { useEffect } from "react";

const useFieldListener = ({ isSubmitting, updateErrorMessage, ...props }) => {
  const [field, { error }] = useField({ ...props });

  useEffect(() => {
    if (isSubmitting && error !== undefined)
      updateErrorMessage(error);
  }, [error, isSubmitting, updateErrorMessage]);

  return field;
};

export default useFieldListener;