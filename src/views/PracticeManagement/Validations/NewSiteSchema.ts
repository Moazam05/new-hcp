import * as Yup from "yup";

export const newSiteSchema = Yup.object().shape({
  siteName: Yup.string()
    .required("Site Name is required")
    .required("Last Name is required")
    .min(1, "Minimum 1 character required")
    .max(100, "Maximum 100 characters allowed"),
  siteOfService: Yup.object().required("Site of Service is required"),
  // npiNumber: Yup.string()
  //   .min(10, "NPI Number must be 10 digits")
  //   .max(10, "NPI Number must be 10 digits")
  //   .required("NPI Number is required"),
  addressLineOne: Yup.string()
    .required("Address Line 1 is required")
    .min(10, "Minimum 10 characters required")
    .max(200, "Maximum 200 characters allowed"),
  addressLineTwo: Yup.string()
    .min(10, "Minimum 10 characters required")
    .max(200, "Maximum 200 characters allowed"),
  city: Yup.string()
    .required("City is required")
    .min(1, "Minimum 1 character required")
    .max(150, "Maximum 150 characters allowed"),
  state: Yup.object().required("State is required"),
  zipCode: Yup.string()
    .required("Zip Code is required")
    .min(1, "Minimum 1 character")
    .max(10, "Maximum 10 characters allowed"),
  faxNumber: Yup.string()
    .min(10, "Fax Number must be 10 digits")
    .max(10, "Fax Number must be 10 digits"),
  // .required("Fax Number is required"),
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
