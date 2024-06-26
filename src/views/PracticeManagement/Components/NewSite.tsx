// React Imports
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// React Input Mask
import InputMask from "react-input-mask";
// Formik
import { Form, Formik, FormikProps } from "formik";
// MUI
import { Box } from "@mui/material";
// Utils
import { onKeyDown } from "../../../utils";
// Constants
import { countryStates } from "../../../constants/countryStates";
// Validation Schema
import { newSiteSchema } from "../Validations/NewSiteSchema";
// Custom
import PrimaryInput from "../../../components/PrimaryInput";
import SelectInput from "../../../components/SelectInput";
import SecondaryButton from "../../../components/SecondaryButton";
import PrimaryButton from "../../../components/PrimaryButton";
import { SubHeading } from "../../../components/Heading";
import OverlayLoader from "../../../components/Spinner/OverlayLoader";
import ToastAlert from "../../../components/ToastAlert";
import Footer from "../../../components/Footer";
import SecondaryLayout from "../../../components/Layout/SecondaryLayout";
import Spinner from "../../../components/Spinner";
// Redux
import { useGetSiteOfServiceQuery } from "../../../redux/api/utilsApiSlice";
import {
  useAddLocationMutation,
  useGetLocationQuery,
  useUpdateLocationMutation,
} from "../../../redux/api/locationApiSlice";

interface ISNewSiteForm {
  siteName: string;
  siteOfService: unknown;
  // npiNumber: string;
  addressLineOne: string;
  addressLineTwo: string;
  city: string;
  state: unknown;
  zipCode: string;
  faxNumber: string;
  phoneNumber: string;
}

const NewSite = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.pathname.split("/")[3];

  const [formValues, setFormValues] = useState({
    siteName: "",
    siteOfService: "",
    // npiNumber: "",
    addressLineOne: "",
    addressLineTwo: "",
    city: "",
    state: "",
    zipCode: "",
    faxNumber: "",
    phoneNumber: "",
  });

  // todo: GET SITE OF SERVICE API CALL
  const { data, isLoading } = useGetSiteOfServiceQuery({});

  // todo: NEW USER Api Bind
  const [addLocation, { isLoading: addLocationLoading }] =
    useAddLocationMutation();

  // todo: UPDATE LOCATION Api Bind
  const [updateLocation, { isLoading: updateLocationLoading }] =
    useUpdateLocationMutation();

  const NewSiteHandler = async (values: ISNewSiteForm) => {
    // const organizationID = localStorage.getItem("organizationID");
    const stateValue: any = values.state;
    const siteOfServiceValue: any = values.siteOfService;

    const payload = {
      name: values.siteName,
      address1: values.addressLineOne,
      address2: values.addressLineTwo,
      city: values.city,
      state: stateValue.abbreviation,
      zip: values.zipCode,
      phone: values.phoneNumber.replace(/\D/g, ""),
      fax: values.faxNumber,
      siteOfServiceID: siteOfServiceValue.id,
      // organizationID,
      isDefault: false,
      // npi: values.npiNumber,
    };

    // todo: UPDATE LOCATION API CALL
    if (id) {
      try {
        const user: any = await updateLocation({ body: payload, id });

        if (user?.data) {
          localStorage.setItem("message", "Location has been updated.");
          navigate("/practice-management/all-sites");
        }

        if (user?.errors) {
          ToastAlert("Something went wrong", "error");
        }
      } catch (error) {
        console.error("Location User Error:", error);
        ToastAlert("Something went wrong", "error");
      }

      return;
    }

    try {
      const location: any = await addLocation(payload);

      if (location?.data) {
        localStorage.setItem("message", "Location Added Successfully.");
        navigate("/practice-management/all-sites");
      }
      if (location?.errors) {
        ToastAlert("Something went wrong", "error");
      }
    } catch (error) {
      console.error("New Location Added Error:", error);
      ToastAlert("Something went wrong", "error");
    }
  };

  // todo: GET LOCATION API CALL
  const { data: getLocationData, isLoading: getLocationLoading } =
    useGetLocationQuery(id);

  useEffect(() => {
    if (getLocationData) {
      const siteOfService = data?.$values?.find(
        (site: any) => site.id === getLocationData?.data?.siteOfServiceID
      );

      const state: any = countryStates?.find(
        (sta) => sta.abbreviation === getLocationData?.data?.state
      );

      setFormValues({
        siteName: getLocationData?.data?.name,
        siteOfService,
        addressLineOne: getLocationData?.data?.address1,
        addressLineTwo: getLocationData?.data?.address2,
        city: getLocationData?.data?.city,
        state,
        zipCode: getLocationData?.data?.zip,
        faxNumber: getLocationData?.data?.fax,
        phoneNumber: getLocationData?.data?.phone,
      });
    }
  }, [data?.$values, getLocationData]);

  return (
    <SecondaryLayout>
      {(isLoading || getLocationLoading) && <OverlayLoader />}
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
            display: "flex",
            justifyContent: "center",
            marginTop: "100px",
            "@media (max-width: 576px)": {
              marginTop: "30px",
            },
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
                "@media (max-width: 576px)": {
                  fontSize: "18px",
                  marginBottom: "10px",
                },
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
                enableReinitialize
              >
                {(props: FormikProps<ISNewSiteForm>) => {
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
                          Site Name*
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
                          height: "85px",
                        }}
                      >
                        <SubHeading
                          sx={{
                            fontSize: "18px",
                            color: "#00313C",
                          }}
                        >
                          Site of Service*
                        </SubHeading>
                        <SelectInput
                          name="siteOfService"
                          styles={{ width: "100%" }}
                          value={values.siteOfService}
                          onChange={(e: any) => {
                            handleChange(e);
                          }}
                          data={data?.$values}
                          onBlur={handleBlur}
                          error={
                            errors.siteOfService && touched.siteOfService
                              ? true
                              : false
                          }
                          label="Site of Service"
                          options={data?.$values?.map((project: any) => {
                            return {
                              ...project,
                              id: project.id,
                              value: project,
                              label: project.name,
                            };
                          })}
                        >
                          {touched.siteOfService && errors.siteOfService && (
                            <Box
                              sx={{
                                fontSize: "12px",
                                color: "#FF0000",
                                fontWeight: 400,
                                lineHeight: "17px",
                              }}
                            >
                              <p>{errors.siteOfService}</p>
                            </Box>
                          )}
                        </SelectInput>
                      </Box>

                      {/* <Box
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
                          name="npiNumber"
                          placeholder="NPI Number"
                          value={values.npiNumber}
                          helperText={
                            errors.npiNumber && touched.npiNumber
                              ? errors.npiNumber
                              : ""
                          }
                          error={
                            errors.npiNumber && touched.npiNumber ? true : false
                          }
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </Box> */}

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
                          Address Line 1*
                        </SubHeading>
                        <PrimaryInput
                          type="text"
                          label=""
                          name="addressLineOne"
                          placeholder="Address Line 1"
                          value={values.addressLineOne}
                          helperText={
                            errors.addressLineOne && touched.addressLineOne
                              ? errors.addressLineOne
                              : ""
                          }
                          error={
                            errors.addressLineOne && touched.addressLineOne
                              ? true
                              : false
                          }
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </Box>

                      <Box
                        sx={{
                          height: "70px",
                        }}
                      >
                        <SubHeading
                          sx={{
                            fontSize: "18px",
                            color: "#00313C",
                          }}
                        >
                          Address Line 2
                        </SubHeading>
                        <PrimaryInput
                          type="text"
                          label=""
                          name="addressLineTwo"
                          placeholder="Address Line 2"
                          value={values.addressLineTwo}
                          helperText={
                            errors.addressLineTwo && touched.addressLineTwo
                              ? errors.addressLineTwo
                              : ""
                          }
                          error={
                            errors.addressLineTwo && touched.addressLineTwo
                              ? true
                              : false
                          }
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </Box>

                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "20px",
                          width: "100%",
                          "@media (max-width: 576px)": {
                            flexDirection: "column",
                            margin: "0",
                          },
                        }}
                      >
                        <Box
                          sx={{
                            height: "86px",
                            width: "100%",
                            "@media (max-width: 576px)": {
                              width: "100%",
                              height: "60px",
                            },
                          }}
                        >
                          <SubHeading>City*</SubHeading>
                          <PrimaryInput
                            type="text"
                            label=""
                            name="city"
                            placeholder="City"
                            value={values.city}
                            helperText={
                              errors.city && touched.city ? errors.city : ""
                            }
                            error={errors.city && touched.city ? true : false}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </Box>
                        <Box
                          sx={{
                            height: "86px",
                            width: "100%",
                            "@media (max-width: 576px)": {
                              width: "100%",
                              height: "60px",
                            },
                          }}
                        >
                          <SubHeading>State*</SubHeading>
                          <SelectInput
                            name="state"
                            styles={{ width: "100%" }}
                            value={values.state}
                            onChange={(e: any) => {
                              handleChange(e);
                            }}
                            data={countryStates}
                            onBlur={handleBlur}
                            error={errors.state && touched.state ? true : false}
                            label="State"
                            options={countryStates?.map((project: any) => {
                              return {
                                ...project,
                                id: project.abbreviation,
                                value: project,
                                label: project.name,
                              };
                            })}
                          >
                            {touched.state && errors.state && (
                              <Box
                                sx={{
                                  fontSize: "12px",
                                  color: "#FF0000",
                                  fontWeight: 400,
                                  lineHeight: "17px",
                                }}
                              >
                                <p>{errors.state}</p>
                              </Box>
                            )}
                          </SelectInput>
                        </Box>
                        <Box
                          sx={{
                            height: "86px",
                            width: "100%",
                            "@media (max-width: 576px)": {
                              width: "100%",
                              height: "60px",
                            },
                          }}
                        >
                          <SubHeading>Zip Code*</SubHeading>
                          <PrimaryInput
                            type="text"
                            label=""
                            name="zipCode"
                            placeholder="Zip Code"
                            value={values.zipCode}
                            helperText={
                              errors.zipCode && touched.zipCode
                                ? errors.zipCode
                                : ""
                            }
                            error={
                              errors.zipCode && touched.zipCode ? true : false
                            }
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </Box>
                      </Box>

                      <Box
                        sx={{
                          height: "86px",
                          width: "100%",

                          "@media (max-width: 576px)": {
                            width: "100%",
                            height: "60px",
                            marginTop: "20px",
                          },
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

                      <Box
                        sx={{
                          height: "86px",
                          width: "100%",
                          "@media (max-width: 576px)": {
                            width: "100%",
                            height: "60px",
                            marginTop: "20px",
                          },
                        }}
                      >
                        <SubHeading>Fax Number</SubHeading>
                        <PrimaryInput
                          type="text"
                          label=""
                          name="faxNumber"
                          placeholder="Fax Number"
                          value={values.faxNumber}
                          helperText={
                            errors.faxNumber && touched.faxNumber
                              ? errors.faxNumber
                              : ""
                          }
                          error={
                            errors.faxNumber && touched.faxNumber ? true : false
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
                          {addLocationLoading || updateLocationLoading ? (
                            <Box
                              sx={{
                                padding: "4px 20px",
                              }}
                            >
                              <Spinner size={18} specificColor="#fff" />
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
                            navigate("/practice-management/all-sites")
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

export default NewSite;
