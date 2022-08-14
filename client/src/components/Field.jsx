import { useFieldListener } from '../hooks';

const Field = ({
  label, className,
  updateErrorMessage,
  isSubmitting,
  ...props
}) => {
  const field = useFieldListener({ isSubmitting, updateErrorMessage, ...props });

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