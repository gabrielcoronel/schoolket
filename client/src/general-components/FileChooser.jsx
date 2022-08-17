import { useRef } from 'react';
import { useFieldListener } from '../hooks';

const FileChooser = ({
  label, updateFormData,
  accept, className,
  multiple, updateErrorMessage,
  isSubmitting, ...props
}) => {
  const fileInput = useRef(null);
  const field = useFieldListener({ isSubmitting, updateErrorMessage, ...props });

  return (
    <div>
      <button
        className={className}
        type="button"
        onClick={() => {
          if (fileInput.current)
            fileInput.current.click();
        }}
      >
        {label}
      </button>

      <input
        ref={fileInput}
        type="file"
        hidden
        accept={accept}
        multiple={multiple}
        onChange={(event) => {
          const files = event.target.files;
          const formData = new FormData();

          for (const file of files)
            formData.append(file.name, file);

          updateFormData(formData);
        }}
      />
    </div>
  );
};

export default FileChooser;