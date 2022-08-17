import { useFieldListener } from '../hooks';

const TextArea = ({
  label, className,
  updateErrorMessage,
  isSubmitting,
  ...props
}) => {
  const field = useFieldListener({ isSubmitting, updateErrorMessage, ...props });

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