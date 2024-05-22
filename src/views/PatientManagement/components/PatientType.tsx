import SecondaryLayout from "../../../components/Layout/SecondaryLayout";
import { UdencycaGreen, StepOneGreen } from "../../../assets/images";
import { Box } from "@mui/material";

const PatientType = () => {
  return (
    <SecondaryLayout>
      <Box
        sx={{
          margin: "20px 80px",
          display: "flex",
          justifyContent: "space-between",
          "@media (max-width: 576px)": {
            flexDirection: "column",
            gap: "20px",
            alignItems: "center",
            margin: "0 20px 20px",
          },
        }}
      >
        <img src={UdencycaGreen} alt="step" />
        <img src={StepOneGreen} alt="step" />
      </Box>
    </SecondaryLayout>
  );
};

export default PatientType;
