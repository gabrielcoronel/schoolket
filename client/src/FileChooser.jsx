import { useRef } from 'react';

const FileChooser = ({
  label, updateFormData,
  accept, className,
  multiple, updateErrorMessage,
  isSubmitting
}) => {
  const fileInput = useRef(null);

  // Añadir mensaje de error (useField?)

  return (
    <div className={className}>
      <button type="button"
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