import * as Yup from "yup";

export const newSiteSchema = Yup.object().shape({
  siteName: Yup.string().required("Site Name is required"),
  siteOfService: Yup.string().required("Site of Service is required"),
  npiNumber: Yup.string()
    .min(10, "Organizational API must be 10 digits")
    .max(10, "Organizational API must be 10 digits")
    .required("Organizational API is required"),
  addressLineOne: Yup.string().required("Address Line 1 is required"),
  addressLineTwo: Yup.string(),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
  zipCode: Yup.string().required("required"),
  faxNumber: Yup.string()
    .min(10, "Fax Number must be 10 digits")
    .max(10, "Fax Number must be 10 digits")
    .required("Fax Number is required"),
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
});
