import constants from "../../assets/constants";
import Layout from "../../components/Layout";
import { Box } from "@mui/material";
import PrimaryButton from "../../components/PrimaryButton";
import SecondaryButton from "../../components/SecondaryButton";
import { useNavigate } from "react-router-dom";

const index = () => {
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
            fontWeight: 600,
            marginTop: "17px",
            "@media (max-width: 576px)": {
              fontSize: "16px",
              padding: "20px",
              margin: "0",
            },
          }}
        >
          <h1>{constants.THANK_YOU_TITLE}</h1>
          <Box
            sx={{
              textAlign: "left",
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

export default index;
