import { Box } from "@mui/material";
import { FooterLogo } from "../../assets/images";
import constants from "../../assets/constants";

const Footer = () => {
  return (
    <>
      <footer>
        <Box
          sx={{
            position: "fixed",
            bottom: 0,
            left: 0,
            width: "100%",
            backgroundColor: "#00313C",
            color: "#fff",
            padding: "25px 75px 0",
            "@media (max-width: 576px)": {
              padding: "25px",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              "@media (max-width: 576px)": {
                flexDirection: "column",
                alignItems: "left",
                gap: "20px",
              },
            }}
          >
            <Box>
              <img src={FooterLogo} alt="footer-logo" />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h3
                style={{
                  fontSize: "24px",
                  fontWeight: 600,
                  marginBottom: "10px",
                }}
              >
                Contact Us
              </h3>
              <h4>{constants.CONTACT_US_TEL}</h4>
              <h4>{constants.CONTACT_US_FAX}</h4>
              <Box
                sx={{
                  display: "flex",
                  marginTop: "10px",
                  alignItems: "center",
                }}
              >
                <h4>{constants.WEBSITE_ONE}</h4>
                <Box
                  sx={{
                    borderLeft: "2px solid #fff",
                    height: "16px",
                    margin: "0 10px",
                  }}
                ></Box>
                <h4>{constants.WEBSITE_TWO}</h4>
                <Box
                  sx={{
                    borderLeft: "2px solid #fff",
                    height: "16px",
                    margin: "0 10px",
                  }}
                ></Box>
                <h4>{constants.WEBSITE_THREE}</h4>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              margin: "20px 0 10px 0",
              "@media (max-width: 576px)": {
                margin: "10px 0 0",
              },
            }}
          >
            <p
              style={{
                fontSize: "14px",
                lineHeight: "20px",
                fontWeight: 500,
              }}
            >
              {constants.ALL_RIGHTS_ONE}
              <span
                style={{
                  margin: "0 10px",
                }}
              >
                {constants.ALL_RIGHTS_TWO}
              </span>
              <span>{constants.ALL_RIGHTS_THREE}</span>
            </p>
          </Box>
        </Box>
      </footer>
    </>
  );
};

export default Footer;
