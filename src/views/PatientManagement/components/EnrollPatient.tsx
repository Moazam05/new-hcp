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
            "@media (max-width: 576px)": {
              flexDirection: "column",
              gap: "20px",
            },
          }}
        >
          <Box
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            sx={{
              "@media (max-width: 576px)": {
                width: "300px",
              },
            }}
          >
            <img
              src={isHovered ? UdencycaYellow : Udencyca}
              alt="Udencyca"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </Box>

          <Box
            onMouseEnter={() => setIsHovered2(true)}
            onMouseLeave={() => setIsHovered2(false)}
            sx={{
              "@media (max-width: 576px)": {
                width: "300px",
              },
            }}
          >
            <img
              src={isHovered2 ? LoqtorziYellow : Loqtorzi}
              alt="Loqtorzi"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </Box>
        </Box>
      </Box>

      <Footer />
    </SecondaryLayout>
  );
};

export default EnrollPatient;
