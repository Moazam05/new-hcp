import { Box } from "@mui/material";
import { SubHeading } from "../../../../components/Heading";
import * as Yup from "yup";
import SelectInput from "../../../../components/SelectInput";

interface InsuranceProps {
  formik: any;
}

const payerTypeData = [
  {
    label: "Commercial",
    value: "commercial",
  },
  {
    label: "Medicare",
    value: "medicare",
  },
  {
    label: "Self Pay",
    value: "selfPay",
  },
];

const Insurance = ({ formik }: InsuranceProps) => {
  const { values, errors, touched, handleChange, handleBlur } = formik;

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          "@media (max-width: 576px)": {
            padding: "0",
            gap: "0px",
          },
        }}
      >
        <h1>What type of insurance does the patient have?</h1>

        <Box
          sx={{
            height: "86px",
            width: "30%",
            margin: "40px 0",
            "@media (max-width: 576px)": {
              width: "100%",
              height: "60px",
              margin: "20px 0",
            },
          }}
        >
          <SubHeading>Payer Type*</SubHeading>
          <SelectInput
            name="payerType"
            styles={{ width: "100%" }}
            value={values.payerType}
            onChange={(e: any) => {
              handleChange(e);
            }}
            data={payerTypeData}
            onBlur={handleBlur}
            error={errors.payerType && touched.payerType ? true : false}
            label="Select Payer Type"
            options={payerTypeData?.map((project: any) => {
              return {
                ...project,
                id: project.value,
                value: project.value,
                label: project.label,
              };
            })}
          >
            {touched.payerType && errors.payerType && (
              <Box
                sx={{
                  fontSize: "12px",
                  color: "#FF0000",
                  fontWeight: 400,
                  lineHeight: "17px",
                }}
              >
                <p>{errors.payerType}</p>
              </Box>
            )}
          </SelectInput>
        </Box>
      </Box>
    </>
  );
};

Insurance.label = "Insurance";
Insurance.initialValues = {
  payerType: "",
};

Insurance.validationSchema = Yup.object().shape({
  payerType: Yup.string().required("Payer Type is required"),
});

export default Insurance;
