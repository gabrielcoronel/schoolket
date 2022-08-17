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

const signUpForm = Yup.object({
  username: regularField("nombre de usuario"),
  name: regularField("nombre"),
  surname1: regularField("primer apellido"),
  surname2: regularField("segundo apellido"),
  phone_number: phoneNumberField,
  password: regularField("contraseña"),
  files: Yup.mixed().required("Tienes que elegir un avatar")
});

const signInForm = Yup.object({
  username: regularField("nombre de usuario"),
  password: regularField("contraseña")
});

const productForm = Yup.object({
  title: regularField("título"),
  description: Yup.string()
    .required("Tienes que describir tu producto"),
  price: Yup.number()
    .required("Tienes que ponerle un precio a tu producto")
    .integer("El precio solo puede ser una cantidad entera")
    .min(0, "No existen los precios negativos"),
  files: Yup.mixed().required("Tienes que añadir por lo menos una imagen de tu producto")
});

export { signUpForm, signInForm, productForm };