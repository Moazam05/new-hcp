// React Imports
import { useState } from "react";
// MUI
import { Box, Container } from "@mui/material";
// Constants
import constants from "../../constants";
// Custom
import Layout from "../../components/Layout";
import PrimaryButton from "../../components/PrimaryButton";
import SecondaryButton from "../../components/SecondaryButton";
import TwoFactorModal from "./Components/TwoFactorModal";

const ThankYou = () => {
  const [modalOpen, setModalOpen] = useState(false);

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
        <Container>
          <Box
            sx={{
              textAlign: "center",
              padding: "0 60px",
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
              textAlign: "center",
              fontSize: "20px",
              fontWeight: 600,
              margin: "40px 0",
              "@media (max-width: 576px)": {
                margin: "0 0 20px 0",
              },
            }}
          >
            <p>{constants.FOURTH_THANK_YOU_PARAGRAPH}</p>
          </Box>

          <Box
            sx={{
              textAlign: "center",
              fontSize: "20px",
              "@media (max-width: 576px)": {
                margin: "0px 0",
                textAlign: "left",
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                padding: "0 20px 20px",
                fontSize: "16px",
              },
            }}
          >
            <p>{constants.FIFTH_THANK_YOU_PARAGRAPH}</p>
            <p>{constants.SIXTH_THANK_YOU_PARAGRAPH}</p>
          </Box>

          <Box
            sx={{
              marginTop: "50px",
              textAlign: "center",
              "@media (max-width: 576px)": {
                marginTop: "30px",
              },
            }}
          >
            <PrimaryButton onClick={() => setModalOpen(true)} />
          </Box>

          <Box sx={{ margin: "15px 0 30px", textAlign: "center" }}>
            <SecondaryButton />
          </Box>
        </Container>
      </Box>
      {/* TwoFactor Modal */}
      <TwoFactorModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </Layout>
  );
};

export default ThankYou;
