import * as Yup from 'yup';

// TODO: Ponerle más restricciones a cada campo (aprender RegEx)

const MAX_STRING_LENGTH = 100;

const regularField = (label) => {
  return (
    Yup.string()
      .trim()
      .required(`El campo '${label}' es obligatorio`)
      .max(MAX_STRING_LENGTH,
        `El campo '${label}' no puede exceder los ${MAX_STRING_LENGTH} caractéres`
      )
  );
};

const phoneNumberField = Yup.string()
  .trim()
  .required("El campo 'número de télefono' es obligatorio")
  .matches(/^\d+$/, "El número de teléfeno solo puede contener dígitos")
  .length(8, "El número de teléfono tiene que tener 8 dígitos");

export { regularField, phoneNumberField };