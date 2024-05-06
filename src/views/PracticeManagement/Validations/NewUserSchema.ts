import * as Yup from "yup";

export const userSchema = Yup.object().shape({
  userType: Yup.string().required("User Type is required"),
  lastName: Yup.string().required("Last Name is required"),
  firstName: Yup.string().required("First Name is required"),
  email: Yup.string()
    .email("Invalid Email Address")
    .required("Email Address is required"),
  phoneNumber: Yup.string()
    .test(
      "valid-phone-number",
      "Invalid Characters",
      (value: string | undefined) => {
        if (!value) return false;
        const numericValue = value.replace(/\D/g, "");
        return numericValue.length === 10;
      }
    )
    .required("Phone Number is required"),
  npi: Yup.string()
    .min(10, "NPI Number must be 10 digits")
    .max(10, "NPI Number must be 10 digits")
    .required("NPI Number is required"),
  isAdmin: Yup.boolean(),
});

export const staffSchema = Yup.object().shape({
  userType: Yup.string().required("User Type is required"),
  lastName: Yup.string().required("Last Name is required"),
  firstName: Yup.string().required("First Name is required"),
  email: Yup.string()
    .email("Invalid Email Address")
    .required("Email Address is required"),
  phoneNumber: Yup.string()
    .test(
      "valid-phone-number",
      "Invalid Characters",
      (value: string | undefined) => {
        if (!value) return false;
        const numericValue = value.replace(/\D/g, "");
        return numericValue.length === 10;
      }
    )
    .required("Phone Number is required"),
  jobTitle: Yup.string().required("Job Title is required"),
  isAmin: Yup.boolean(),
});
