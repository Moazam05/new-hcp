import { Box } from "@mui/material";
import Layout from "../../components/Layout";
import constants from "../../assets/constants";
import PrimaryButton from "../../components/PrimaryButton";
import SecondaryButton from "../../components/SecondaryButton";

const Registration = () => {
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
            fontSize: "21px",
            fontWeight: 600,
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
            }}
          >
            <p>{constants.SECOND_REGISTRATION_PARAGRAPH}</p>
          </Box>
          <p>{constants.THIRD_REGISTRATION_PARAGRAPH}</p>
        </Box>

        <Box
          sx={{
            marginTop: "50px",
            "@media (max-width: 576px)": {
              marginTop: "30px",
            },
          }}
        >
          <PrimaryButton />
        </Box>

        <Box sx={{ margin: "15px 0 30px" }}>
          <SecondaryButton />
        </Box>
      </Box>
    </Layout>
  );
};

export default Registration;
