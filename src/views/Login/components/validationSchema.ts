import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Required field")
    .required("Required field")
    .nullable(),
  password: Yup.string().required("Required field").nullable(),
  keepMeLoggedIn: Yup.boolean().nullable(),
});
