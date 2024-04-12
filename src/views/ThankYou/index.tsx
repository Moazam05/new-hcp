// MUI
import { Box, Container } from "@mui/material";
// Constants
import constants from "../../constants";
// Custom
import Layout from "../../components/Layout";
import PrimaryButton from "../../components/PrimaryButton";
import SecondaryButton from "../../components/SecondaryButton";
import CustomModal from "../../components/CustomModal";
import { useState } from "react";
import { EmailLogo, SMSLogo } from "../../assets/images";

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
                margin: "20px 0",
                textAlign: "left",
                display: "flex",
                flexDirection: "column",
                gap: "15px",
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
      <CustomModal
        open={modalOpen}
        sx={{
          width: 675,
          padding: "75px 150px",
          border: "2px solid #979797",
          "@media (max-width: 576px)": {
            padding: "25px 20px",
            width: "90%",
          },
        }}
      >
        <Box
          sx={{
            fontSize: "22px",
            fontWeight: 700,
            color: "#007298",
            marginBottom: "12px",
          }}
        >
          <h3>{constants.FACTOR_AUTHENTICATION_TITLE}</h3>
        </Box>
        <Box
          sx={{
            fontSize: "16px",
            color: "#414042",
          }}
        >
          <p>{constants.FACTOR_AUTHENTICATION_FIRST_PARAGRAPH}</p>
        </Box>
        <Box
          sx={{
            fontSize: "24px",
            color: "#414042",
            fontWeight: 500,
            margin: "12px 0",
          }}
        >
          <p>{constants.FACTOR_AUTHENTICATION_SECOND_PARAGRAPH}</p>
        </Box>
        <Box
          sx={{
            fontSize: "14px",
            color: "#414042",
            marginBottom: "17px",
          }}
        >
          <p>{constants.FACTOR_AUTHENTICATION_THIRD_PARAGRAPH}</p>
        </Box>
        <Box
          sx={{
            fontSize: "14px",
            color: "#414042",
          }}
        >
          <p>{constants.FACTOR_AUTHENTICATION_FOURTH_PARAGRAPH}</p>
        </Box>

        <Box
          sx={{
            background: "#E0E0E0",
            marginTop: "40px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "32px",
              padding: "4px 0 0",
              height: "75px",
              "@media (max-width: 576px)": {
                height: "90px",
                padding: "10px 0",
                gap: "20px",
              },
            }}
          >
            <Box>
              <img src={SMSLogo} alt="SMS" />
            </Box>
            <Box>
              <Box
                sx={{
                  fontSize: "18px",
                  color: "#414042",
                  marginBottom: "4px",
                }}
              >
                <p> {constants.FACTOR_AUTHENTICATION_FIFTH_PARAGRAPH}</p>
              </Box>
              <Box
                sx={{
                  fontSize: "14px",
                  color: "#414042",
                }}
              >
                <p>{constants.FACTOR_AUTHENTICATION_SIXTH_PARAGRAPH}</p>
                <p>{constants.FACTOR_AUTHENTICATION_SEVENTH_PARAGRAPH}</p>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* Email */}
        <Box
          sx={{
            background: "#E0E0E0",
            marginTop: "10px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "32px",
              padding: "0px 12px",
              height: "75px",
              "@media (max-width: 576px)": {
                height: "90px",
                padding: "10px 12px",
                gap: "20px",
              },
            }}
          >
            <Box>
              <img src={EmailLogo} alt="EMAIL" />
            </Box>
            <Box>
              <Box
                sx={{
                  fontSize: "18px",
                  color: "#414042",
                  marginBottom: "4px",
                }}
              >
                <p> {constants.FACTOR_AUTHENTICATION_EIGHTH_PARAGRAPH}</p>
              </Box>
              <Box
                sx={{
                  fontSize: "14px",
                  color: "#414042",
                }}
              >
                <p>{constants.FACTOR_AUTHENTICATION_NINTH_PARAGRAPH}</p>
                <p>{constants.FACTOR_AUTHENTICATION_TENTH_PARAGRAPH}</p>
              </Box>
            </Box>
          </Box>
        </Box>
      </CustomModal>
    </Layout>
  );
};

export default ThankYou;
