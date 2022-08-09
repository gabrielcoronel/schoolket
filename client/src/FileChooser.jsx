import { useRef, useEffect } from 'react';
import { useField } from 'formik';

const FileChooser = ({
  label, updateFormData,
  accept, className,
  multiple, updateErrorMessage,
  isSubmitting, ...props
}) => {
  const fileInput = useRef(null);
  const [_, meta] = useField({ ...props });

  useEffect(() => {
    if (isSubmitting && meta.error !== undefined)
      updateErrorMessage(meta.error);
  }, [meta.error, isSubmitting, updateErrorMessage]);

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