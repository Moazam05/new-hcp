import { Box } from "@mui/material";
import * as Yup from "yup";
import { Site } from "../../../../assets/images";
import { SubHeading } from "../../../../components/Heading";
import SelectInput from "../../../../components/SelectInput";
import { useGetLocationsQuery } from "../../../../redux/api/locationApiSlice";

interface PracticeLocationProps {
  formik: any;
}

const PracticeLocation = ({ formik }: PracticeLocationProps) => {
  const { values, errors, touched, handleChange, handleBlur } = formik;

  // todo: GET ALL USERS API CALL
  const { data, isLoading } = useGetLocationsQuery({});

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          "@media (max-width: 576px)": {
            padding: "0",
            gap: "0px",
          },
        }}
      >
        <Box
          sx={{
            "@media (max-width: 576px)": {
              display: "none",
            },
          }}
        >
          <h1>
            Which practice location is the <br /> service being initiated at?
          </h1>
        </Box>

        <Box
          sx={{
            display: "none",
            "@media (max-width: 576px)": {
              display: "block",
            },
          }}
        >
          <h1>Which practice location is the service being initiated at?</h1>
        </Box>

        <Box
          sx={{
            height: "86px",
            width: "100%",
            margin: "40px 0",
            "@media (max-width: 576px)": {
              width: "100%",
              height: "60px",
              margin: "20px 0",
            },
          }}
        >
          <Box
            sx={{
              margin: "35px 200px 35px 0",
              display: "flex",
              gap: "20px",
              "@media (max-width: 576px)": {
                gap: "10px",
                margin: "20px 0",
              },
            }}
          >
            <Box
              sx={{
                height: "fit-content",
              }}
            >
              <img src={Site} alt="site" />
            </Box>
            <Box
              sx={{
                width: "420px",
                "@media (max-width: 576px)": {
                  width: "100%",
                },
              }}
            >
              <Box>
                <SubHeading
                  sx={{
                    color: "#00739A",
                    fontSize: "26px",
                    fontWeight: 700,
                    "@media (max-width: 576px)": {
                      fontSize: "16px",
                    },
                  }}
                >
                  Practice Site of Service
                </SubHeading>
                <SelectInput
                  fetching={isLoading}
                  name="practiceLocation"
                  styles={{ width: "100%" }}
                  value={values.practiceLocation}
                  onChange={(e: any) => {
                    handleChange(e);
                  }}
                  data={data?.data?.$values}
                  onBlur={handleBlur}
                  error={
                    errors.practiceLocation && touched.practiceLocation
                      ? true
                      : false
                  }
                  label=""
                  options={data?.data?.$values?.map((project: any) => {
                    return {
                      ...project,
                      id: project.id,
                      value: project.id,
                      label: project.name,
                    };
                  })}
                >
                  {touched.practiceLocation && errors.practiceLocation && (
                    <Box
                      sx={{
                        fontSize: "12px",
                        color: "#FF0000",
                        fontWeight: 400,
                        lineHeight: "17px",
                      }}
                    >
                      <p>{errors.practiceLocation}</p>
                    </Box>
                  )}
                </SelectInput>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

PracticeLocation.label = "Practice Location";

PracticeLocation.initialValues = {
  practiceLocation: "",
};

PracticeLocation.validationSchema = Yup.object().shape({
  practiceLocation: Yup.string().required("Practice Location is required"),
});

export default PracticeLocation;
