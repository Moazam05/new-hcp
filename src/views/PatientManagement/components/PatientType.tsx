import { Box } from "@mui/material";
import SecondaryLayout from "../../../components/Layout/SecondaryLayout";
import {
  UdencycaGreen,
  StepOneGreen,
  SearchIcon,
} from "../../../assets/images";
import PrimaryInput from "../../../components/PrimaryInput";
import { useState } from "react";

const PatientType = () => {
  const [patient, setPatient] = useState("");

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

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          margin: "100px 150px 50px",
          "@media (max-width: 992px)": {
            margin: "20px",
          },
        }}
      >
        <h1>Choose a patient for services</h1>

        <Box
          sx={{
            margin: "35px 200px 35px 0",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            "@media (max-width: 576px)": {
              gap: "20px",
              margin: "20px",
            },
          }}
        >
          <img src={SearchIcon} alt="step" />
          <Box
            sx={{
              width: "420px",
              "@media (max-width: 576px)": {
                width: "unset",
              },
            }}
          >
            <PrimaryInput
              placeholder="Last Name, Date of Birth"
              value={patient}
              onChange={(e) => setPatient(e.target.value)}
            />
          </Box>
        </Box>
      </Box>
    </SecondaryLayout>
  );
};

export default PatientType;
