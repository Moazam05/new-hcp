import { Box } from "@mui/material";
import PrimaryInput from "../../../components/PrimaryInput";
import { SubHeading } from "../../../components/Heading";
import * as Yup from "yup";

const UserInformation = ({ formik }) => {
  const { values, errors, touched, handleChange, handleBlur, setFieldValue } =
    formik;

  return (
    <Box>
      <Box sx={{ height: "100px" }}>
        <SubHeading sx={{ marginBottom: "10px" }}>Last Name</SubHeading>
        <PrimaryInput
          type="text"
          label=""
          name="lastName"
          placeholder="Last Name"
          value={values.lastName}
          helperText={
            errors.lastName && touched.lastName ? errors.lastName : ""
          }
          error={errors.lastName && touched.lastName ? true : false}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Box>
      <Box sx={{ height: "100px" }}>
        <SubHeading sx={{ marginBottom: "10px" }}>First Name</SubHeading>
        <PrimaryInput
          type="text"
          label=""
          name="firstName"
          placeholder="First Name"
          value={values.firstName}
          helperText={
            errors.firstName && touched.firstName ? errors.firstName : ""
          }
          error={errors.firstName && touched.firstName ? true : false}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Box>
    </Box>
  );
};

UserInformation.label = "User Information";
UserInformation.initialValues = {
  lastName: "",
  firstName: "",
};

UserInformation.validationSchema = Yup.object().shape({
  lastName: Yup.string().required("Last Name is required"),
  firstName: Yup.string().required("First Name is required"),
});

export default UserInformation;
