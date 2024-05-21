import {
  Loqtorzi,
  LoqtorziYellow,
  Step1,
  Udencyca,
  UdencycaYellow,
} from "../../../assets/images";
import SecondaryLayout from "../../../components/Layout/SecondaryLayout";
import { Box } from "@mui/material";
import Footer from "../../../components/Footer";
import { useState } from "react";

const EnrollPatient = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  return (
    <SecondaryLayout>
      <Box
        sx={{
          margin: "20px 80px 0 0",
          display: "flex",
          justifyContent: "end",
        }}
      >
        <img src={Step1} alt="step" />
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
        <Box>
          <h1>Choose a therapy to start a patient enrollment</h1>
        </Box>
        <Box
          sx={{
            margin: "40px 0",
            display: "flex",
            gap: "60px",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <Box
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img src={isHovered ? UdencycaYellow : Udencyca} alt="Udencyca" />
          </Box>

          <Box
            onMouseEnter={() => setIsHovered2(true)}
            onMouseLeave={() => setIsHovered2(false)}
          >
            <img src={isHovered2 ? LoqtorziYellow : Loqtorzi} alt="Loqtorzi" />
          </Box>
        </Box>
      </Box>

      <Footer />
    </SecondaryLayout>
  );
};

export default EnrollPatient;
