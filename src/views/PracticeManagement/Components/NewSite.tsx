// React Imports
// MUI
import { Box } from "@mui/material";
// Custom
import MainLayout from "../../../components/Layout/MainLayout";
import PrimaryButton from "../../../components/PrimaryButton";
import { SubHeading } from "../../../components/Heading";
// Formik
import { Form, Formik, FormikProps } from "formik";
import PrimaryInput from "../../../components/PrimaryInput";
import { onKeyDown } from "../../../utils";
import { newSiteSchema } from "../Validations/NewSiteSchema";

interface ISNewSiteForm {
  siteName: string;
  siteOfService: string;
  npiNumber: string;
  addressLineOne: string;
  addressLineTwo: string;
  city: string;
  state: string;
  zipCode: string;
  faxNumber: string;
  phoneNumber: string;
}

const NewSite = () => {
  const formValues = {
    siteName: "",
    siteOfService: "",
    npiNumber: "",
    addressLineOne: "",
    addressLineTwo: "",
    city: "",
    state: "",
    zipCode: "",
    faxNumber: "",
    phoneNumber: "",
  };

  const NewSiteHandler = async (values: ISNewSiteForm) => {
    console.log(values);
  };
  return (
    <MainLayout>
      <Box
        sx={{
          margin: "50px 200px 50px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "100px",
          }}
        >
          <h1>Please Enter the Site Location Information</h1>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: "600px",
              marginTop: "33px",
            }}
          >
            <Box
              sx={{
                fontSize: "24px",
                fontWeight: 700,
                marginBottom: "18px",
                color: "#414042",
              }}
            >
              <h2>Site Profile</h2>
            </Box>
            <Box>
              <Formik
                initialValues={formValues}
                onSubmit={(values: ISNewSiteForm) => {
                  NewSiteHandler(values);
                }}
                validationSchema={newSiteSchema}
              >
                {(props: FormikProps<ISNewSiteForm>) => {
                  const { values, touched, errors, handleBlur, handleChange } =
                    props;

                  return (
                    <Form onKeyDown={onKeyDown}>
                      <Box
                        sx={{
                          height: "85px",
                          marginTop: "20px",
                        }}
                      >
                        <SubHeading
                          sx={{
                            marginBottom: "10px",
                            fontSize: "18px",
                            color: "#00313C",
                          }}
                        >
                          Email address*
                        </SubHeading>
                        <PrimaryInput
                          type="text"
                          label=""
                          name="siteName"
                          placeholder="Site Name"
                          value={values.siteName}
                          helperText={
                            errors.siteName && touched.siteName
                              ? errors.siteName
                              : ""
                          }
                          error={
                            errors.siteName && touched.siteName ? true : false
                          }
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </Box>

                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          marginTop: "35px",
                        }}
                      >
                        <PrimaryButton type="submit">
                          {/* {isLoading ? (
                            <Box
                              sx={{
                                padding: "7px 40px",
                              }}
                            >
                              <Spinner size={22} specificColor="#fff" />
                            </Box>
                          ) : (
                            "SIGN IN"
                          )} */}
                          Submit
                        </PrimaryButton>
                      </Box>
                    </Form>
                  );
                }}
              </Formik>
            </Box>
          </Box>
        </Box>
      </Box>
    </MainLayout>
  );
};

export default NewSite;
