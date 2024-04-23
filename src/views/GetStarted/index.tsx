// React Imports
import { useNavigate } from "react-router-dom";
// MUI
import { Box } from "@mui/material";
// Constants
import constants from "../../constants";
// Custom
import Layout from "../../components/Layout";
import PrimaryButton from "../../components/PrimaryButton";
import SecondaryButton from "../../components/SecondaryButton";

const GetStarted = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>{constants.REGISTRATION_TITLE}</h1>
        <Box
          sx={{
            maxWidth: "566px",
            fontSize: "20px",
            fontWeight: 700,
            marginTop: "17px",
            "@media (max-width: 576px)": {
              fontSize: "16px",
              padding: "20px",
              margin: "0",
            },
          }}
        >
          <p>{constants.FIRST_REGISTRATION_PARAGRAPH}</p>
          <Box
            sx={{
              margin: "10px 0 20px",
              fontWeight: "normal",
            }}
          >
            <p>{constants.SECOND_REGISTRATION_PARAGRAPH}</p>
          </Box>
          <Box
            sx={{
              fontWeight: "normal",
            }}
          >
            <p>{constants.THIRD_REGISTRATION_PARAGRAPH}</p>
          </Box>
        </Box>

        <Box
          sx={{
            marginTop: "50px",
            "@media (max-width: 576px)": {
              marginTop: "30px",
            },
          }}
        >
          <PrimaryButton onClick={() => navigate("/registration")}>
            CONTINUE
          </PrimaryButton>
        </Box>

        <Box sx={{ margin: "15px 0 30px" }}>
          <SecondaryButton />
        </Box>
      </Box>
    </Layout>
  );
};

export default GetStarted;
