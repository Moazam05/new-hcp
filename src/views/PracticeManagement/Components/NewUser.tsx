// React Imports
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// React Input Mask
import InputMask from "react-input-mask";
// Formik
import { Form, Formik, FormikProps } from "formik";
// MUI
import { Box, Checkbox } from "@mui/material";
// Utils
import { onKeyDown } from "../../../utils";
// Validation Schema
import { staffSchema } from "../Validations/NewUserSchema";
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
import {
  useAddPersonMutation,
  useGetPersonQuery,
  useUpdatePersonMutation,
} from "../../../redux/api/personApiSlice";
import Spinner from "../../../components/Spinner";
import OverlayLoader from "../../../components/Spinner/OverlayLoader";

interface ISNewUserForm {
  userType: string;
  lastName: string;
  firstName: string;
  email: string;
  npi: string;
  jobTitle: string;
  isAdmin?: boolean;
  phoneNumber: string;
}

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const NewUser = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.pathname.split("/")[3];

  // states
  const [userValue, setUserValue] = useState("staff");

  const [formValues, setFormValues] = useState({
    userType: "staff",
    lastName: "",
    firstName: "",
    email: "",
    npi: "",
    jobTitle: "",
    isAdmin: false,
    phoneNumber: "",
  });

  // todo: NEW USER Api Bind
  const [newPerson, { isLoading }] = useAddPersonMutation();

  // todo: UPDATE USER Api Bind
  const [updatePerson, { isLoading: updatePersonLoading }] =
    useUpdatePersonMutation();

  const NewSiteHandler = async (values: ISNewUserForm) => {
    const payload = {
      lastName: values.lastName,
      firstName: values.firstName,
      jobTitle: values.jobTitle,
      phoneNumber: values.phoneNumber.replace(/\D/g, ""),
      emailAddress: values.email,
      // providerNPI: values.npi,
      userRole: values.userType,
      isAdmin: values.isAdmin,
    };

    // todo: UPDATE USER API CALL
    if (id) {
      try {
        const user: any = await updatePerson({ body: payload, id });

        if (user?.data) {
          localStorage.setItem("userMessage", "User has been updated.");
          navigate("/practice-management/all-users");
        }

        if (user?.errors) {
          ToastAlert("Something went wrong", "error");
        }
      } catch (error) {
        console.error("Update User Error:", error);
        ToastAlert("Something went wrong", "error");
      }

      return;
    }

    try {
      const user: any = await newPerson(payload);

      if (user?.data) {
        localStorage.setItem("userMessage", "New user has been added.");
        navigate("/practice-management/all-users");
      }

      if (user?.errors) {
        ToastAlert("Something went wrong", "error");
      }
    } catch (error) {
      console.error("New User Added Error:", error);
      ToastAlert("Something went wrong", "error");
    }
  };

  // todo: GET USER API CALL
  const { data: getUserData, isLoading: getUserLoading } =
    useGetPersonQuery(id);

  useEffect(() => {
    if (getUserData) {
      setFormValues({
        ...formValues,
        lastName: getUserData?.data?.lastName,
        firstName: getUserData?.data?.firstName,
        email: getUserData?.data?.email,
        // npi: getUserData?.data?.providerNPI,
        jobTitle: getUserData?.data?.jobTitle,
        isAdmin: getUserData?.data?.isAdmin,
        phoneNumber: getUserData?.data?.phoneNumber,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getUserData]);

  return (
    <SecondaryLayout>
      {getUserLoading && <OverlayLoader />}

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
          onClick={() => navigate("/practice-management/all-users")}
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
            <p>New User</p>
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
              <h2>User Profile</h2>
            </Box>
            <Box>
              <Formik
                initialValues={formValues}
                onSubmit={(values: ISNewUserForm) => {
                  NewSiteHandler(values);
                }}
                validationSchema={staffSchema}
                enableReinitialize
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

                      <Box
                        sx={{
                          height: "85px",
                        }}
                      >
                        <SubHeading>Phone Number*</SubHeading>
                        <InputMask
                          mask="(999) 999-9999"
                          value={values.phoneNumber}
                          disabled={false}
                          maskChar="_"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        >
                          <PrimaryInput
                            type="text"
                            label=""
                            name="phoneNumber"
                            placeholder="(123) 456-7890"
                            value={values.phoneNumber}
                            helperText={
                              errors.phoneNumber && touched.phoneNumber
                                ? errors.phoneNumber
                                : ""
                            }
                            error={
                              errors.phoneNumber && touched.phoneNumber
                                ? true
                                : false
                            }
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </InputMask>
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
                              User is allowed to manage sites and users within
                              the practice{" "}
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
                          {isLoading || updatePersonLoading ? (
                            <Box
                              sx={{
                                padding: "7px 30px",
                              }}
                            >
                              <Spinner size={22} specificColor="#fff" />
                            </Box>
                          ) : id ? (
                            "Update"
                          ) : (
                            "Submit"
                          )}
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
                            navigate("/practice-management/all-users")
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

export default NewUser;
