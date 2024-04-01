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

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            maxWidth: "650px",
            textAlign: "center",
            fontSize: "20px",
            fontWeight: 400,
            marginTop: "17px",
            "@media (max-width: 576px)": {
              fontSize: "16px",
              padding: "0 20px 20px",
              margin: "0",
            },
          }}
        >
          <h1>{constants.THANK_YOU_TITLE}</h1>
          <Box
            sx={{
              textAlign: "left",
              margin: "15px 0 0",
              "@media (max-width: 576px)": {
                margin: "15px 0",
              },
            }}
          >
            <p>{constants.FIRST_THANK_YOU_PARAGRAPH}</p>
          </Box>
          <Box
            sx={{
              margin: "20px 0 30px",
              textAlign: "left",
              "@media (max-width: 576px)": {
                margin: "15px 0",
              },
            }}
          >
            <p>{constants.SECOND_THANK_YOU_PARAGRAPH}</p>
          </Box>
          <Box
            sx={{
              textAlign: "left",
            }}
          >
            <p>
              {constants.THIRD_THANK_YOU_PARAGRAPH}{" "}
              <a
                href="tel:{constants.CONTACT_US_TEL}"
                className="thankyou-contact"
              >
                {constants.CONTACT_US_TEL}
              </a>
              .
            </p>
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
          <PrimaryButton onClick={() => navigate("/")} />
        </Box>

        <Box sx={{ margin: "15px 0 30px" }}>
          <SecondaryButton />
        </Box>
      </Box>
    </Layout>
  );
};

export default ThankYou;
