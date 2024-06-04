import { Box } from "@mui/material";
import {
  LoqtorziLogo,
  UdencycaGreen,
  PrescriberAttestation,
} from "../../../../assets/images";

const CaseOne = () => {
  const therapyTypes = localStorage.getItem("therapy");

  return (
    <>
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
        <img
          src={therapyTypes === "loqtorzi" ? LoqtorziLogo : UdencycaGreen}
          alt="step"
        />
        <img src={PrescriberAttestation} alt="step" />
      </Box>
    </>
  );
};

export default CaseOne;
