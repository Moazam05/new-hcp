// React Imports
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// Formik
import { Form, Formik, FormikProps } from "formik";
// MUI
import { Box, Checkbox } from "@mui/material";
// Utils
import { onKeyDown } from "../../../utils";
// Validation Schema
import { staffSchema, userSchema } from "../Validations/NewUserSchema";
// React Icons
import { MdKeyboardArrowLeft } from "react-icons/md";
// Constants
import { userTypes } from "../../../constants/userTypes";
// Custom
import PrimaryInput from "../../../components/PrimaryInput";
import SelectInput from "../../../components/SelectInput";
import SecondaryButton from "../../../components/SecondaryButton";
import PrimaryButton from "../../../components/PrimaryButton";
import { SubHeading } from "../../../components/Heading";
import ToastAlert from "../../../components/ToastAlert";
import Footer from "../../../components/Footer";
import SecondaryLayout from "../../../components/Layout/SecondaryLayout";

interface ISNewUserForm {
  userType: string;
  lastName: string;
  firstName: string;
  email: string;
  npi: string;
  isAdmin?: boolean;
  jobTitle: string;
}

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const NewProvider = () => {
  const navigate = useNavigate();
  const [userValue, setUserValue] = useState("provider");

  const formValues = {
    userType: "provider",
    lastName: "",
    firstName: "",
    email: "",
    npi: "",
    isAdmin: false,
    jobTitle: "",
  };

  const NewSiteHandler = async (values: ISNewUserForm) => {
    console.log(values);

    // return;

    if (values) {
      navigate("/practice-management/all-providers");
      ToastAlert("Provider Created Successfully", "success");
    }
  };
  return (
    <SecondaryLayout>
      <Box
        sx={{
          margin: "50px 200px 50px",
          "@media (max-width: 576px)": {
            margin: "20px",
          },
        }}
      >
        <Box
          sx={{
            marginBottom: "18px",
            color: "#414042",
            display: "flex",
            alignItems: "center",
            marginLeft: "120px",
            cursor: "pointer",
            "@media (max-width: 576px)": {
              fontSize: "18px",
              marginBottom: "0px",
              marginLeft: "0px",
            },
          }}
          onClick={() => navigate("/practice-management/all-providers")}
        >
          <Box
            sx={{
              color: "#B12029",
              fontSize: "30px",
              width: "21px",
              height: "28px",
            }}
          >
            <MdKeyboardArrowLeft />
          </Box>

          <Box
            sx={{
              fontSize: "36px",
              fontWeight: 300,
              "@media (max-width: 576px)": {
                fontSize: "22px",
              },
            }}
          >
            <p>New Provider</p>
          </Box>
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
                "@media (max-width: 576px)": {
                  fontSize: "18px",
                  marginBottom: "10px",
                },
              }}
            >
              <h2>Provider Profile</h2>
            </Box>
            <Box>
              <Formik
                initialValues={formValues}
                onSubmit={(values: ISNewUserForm) => {
                  NewSiteHandler(values);
                }}
                validationSchema={
                  userValue === "provider" ? userSchema : staffSchema
                }
              >
                {(props: FormikProps<ISNewUserForm>) => {
                  const { values, touched, errors, handleBlur, handleChange } =
                    props;

                  return (
                    <Form onKeyDown={onKeyDown}>
                      <Box
                        sx={{
                          height: "85px",
                        }}
                      >
                        <SubHeading
                          sx={{
                            fontSize: "18px",
                            color: "#00313C",
                          }}
                        >
                          User Type*
                        </SubHeading>
                        <SelectInput
                          name="userType"
                          styles={{ width: "100%" }}
                          value={values.userType}
                          disabled={true}
                          onChange={(e: any) => {
                            handleChange(e);
                            setUserValue(e.target.value);
                          }}
                          data={userTypes}
                          onBlur={handleBlur}
                          error={
                            errors.userType && touched.userType ? true : false
                          }
                          label="User Type"
                          options={userTypes?.map((project: any) => {
                            return {
                              ...project,
                              id: project.value,
                              value: project.value,
                              label: project.name,
                            };
                          })}
                        >
                          {touched.userType && errors.userType && (
                            <Box
                              sx={{
                                fontSize: "12px",
                                color: "#FF0000",
                                fontWeight: 400,
                                lineHeight: "17px",
                              }}
                            >
                              <p>{errors.userType}</p>
                            </Box>
                          )}
                        </SelectInput>
                      </Box>

                      <Box
                        sx={{
                          height: "85px",
                        }}
                      >
                        <SubHeading
                          sx={{
                            fontSize: "18px",
                            color: "#00313C",
                          }}
                        >
                          Last Name*
                        </SubHeading>
                        <PrimaryInput
                          type="text"
                          label=""
                          name="lastName"
                          placeholder="Last Name"
                          value={values.lastName}
                          helperText={
                            errors.lastName && touched.lastName
                              ? errors.lastName
                              : ""
                          }
                          error={
                            errors.lastName && touched.lastName ? true : false
                          }
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </Box>

                      <Box
                        sx={{
                          height: "85px",
                        }}
                      >
                        <SubHeading
                          sx={{
                            fontSize: "18px",
                            color: "#00313C",
                          }}
                        >
                          First Name*
                        </SubHeading>
                        <PrimaryInput
                          type="text"
                          label=""
                          name="firstName"
                          placeholder="First Name"
                          value={values.firstName}
                          helperText={
                            errors.firstName && touched.firstName
                              ? errors.firstName
                              : ""
                          }
                          error={
                            errors.firstName && touched.firstName ? true : false
                          }
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </Box>

                      <Box
                        sx={{
                          height: "85px",
                        }}
                      >
                        <SubHeading
                          sx={{
                            fontSize: "18px",
                            color: "#00313C",
                          }}
                        >
                          Email*
                        </SubHeading>
                        <PrimaryInput
                          type="text"
                          label=""
                          name="email"
                          placeholder="Email"
                          value={values.email}
                          helperText={
                            errors.email && touched.email ? errors.email : ""
                          }
                          error={errors.email && touched.email ? true : false}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </Box>

                      {userValue === "provider" && (
                        <Box
                          sx={{
                            height: "85px",
                          }}
                        >
                          <SubHeading
                            sx={{
                              fontSize: "18px",
                              color: "#00313C",
                            }}
                          >
                            NPI Number*
                          </SubHeading>
                          <PrimaryInput
                            type="text"
                            label=""
                            name="npi"
                            placeholder="NPI Number"
                            value={values.npi}
                            helperText={
                              errors.npi && touched.npi ? errors.npi : ""
                            }
                            error={errors.npi && touched.npi ? true : false}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </Box>
                      )}

                      {userValue === "staff" && (
                        <Box
                          sx={{
                            height: "85px",
                          }}
                        >
                          <SubHeading
                            sx={{
                              fontSize: "18px",
                              color: "#00313C",
                            }}
                          >
                            Job Title*
                          </SubHeading>
                          <PrimaryInput
                            type="text"
                            label=""
                            name="jobTitle"
                            placeholder="Job Title"
                            value={values.jobTitle}
                            helperText={
                              errors.jobTitle && touched.jobTitle
                                ? errors.jobTitle
                                : ""
                            }
                            error={
                              errors.jobTitle && touched.jobTitle ? true : false
                            }
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </Box>
                      )}

                      <Box
                        sx={{
                          marginTop: "100px",
                          "@media (max-width: 576px)": {
                            marginTop: "50px",
                          },
                        }}
                      >
                        <Box
                          sx={{
                            fontSize: "22px",
                            fontWeight: 700,
                            marginBottom: "25px",
                          }}
                        >
                          <p>Permission Settings</p>
                        </Box>

                        <Box
                          sx={{
                            fontSize: "18px",
                            fontWeight: 700,
                            marginBottom: "25px",
                          }}
                        >
                          <p>Admin Privileges</p>
                        </Box>

                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            marginBottom: "25px",
                            gap: "10px",
                          }}
                        >
                          <Box
                            sx={{
                              height: "fit-content",
                            }}
                          >
                            <Checkbox
                              {...label}
                              checked={values.isAdmin}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              name="isAdmin"
                              color="primary"
                              sx={{
                                padding: 0,
                                "& .MuiButtonBase-root": {
                                  padding: 0,
                                },
                              }}
                            />
                          </Box>
                          <Box
                            sx={{
                              fontSize: "14px",
                              color: "#414042",
                            }}
                          >
                            <p>
                              Provider is allowed to manage sites and providers
                              within the practice
                            </p>
                          </Box>
                        </Box>
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
                      <Box
                        sx={{
                          margin: "15px 0 30px",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <SecondaryButton
                          onClick={() =>
                            navigate("/practice-management/all-providers")
                          }
                        />
                      </Box>
                    </Form>
                  );
                }}
              </Formik>
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </SecondaryLayout>
  );
};

export default NewProvider;
