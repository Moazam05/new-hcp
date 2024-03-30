// React Imports
import React from "react";
// MUI Imports
import { Box } from "@mui/material";
// Assets
import { FooterLogo } from "../../assets/images";
import constants from "../../assets/constants";
// Styles
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <Box
          sx={{
            // position: "fixed",
            bottom: 0,
            left: 0,
            width: "100%",
            backgroundColor: "#00313C",
            color: "#fff",
            padding: "25px 75px 0",
            "@media (max-width: 576px)": {
              padding: "20px 20px 10px",
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
              <h3 className="contact-us-footer">Contact Us</h3>
              <a
                href="tel:{constants.CONTACT_US_TEL}"
                className="footer-contact"
              >
                {constants.CONTACT_US_TEL}
              </a>

              <a
                href="fax:{constants.CONTACT_US_FAX}"
                className="footer-contact"
              >
                {constants.CONTACT_US_FAX}
              </a>
              <Box
                sx={{
                  display: "flex",
                  marginTop: "10px",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                {[
                  constants.WEBSITE_ONE,
                  constants.WEBSITE_TWO,
                  constants.WEBSITE_THREE,
                ].map((website, index) => (
                  <React.Fragment key={index}>
                    <h4 className="footer-h4">{website}</h4>
                    {index !== 2 && (
                      <Box
                        sx={{
                          borderLeft: "2px solid #fff",
                          height: "17px",
                          margin: "0 10px",
                        }}
                      />
                    )}
                  </React.Fragment>
                ))}
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              margin: "20px 0 0",
              paddingBottom: "10px",
              "@media (max-width: 576px)": {
                margin: "10px 0 0",
              },
            }}
          >
            <p className="footer-text">
              {constants.ALL_RIGHTS_ONE}
              <span className="footer-span">{constants.ALL_RIGHTS_TWO}</span>
              <span>{constants.ALL_RIGHTS_THREE}</span>
            </p>
          </Box>
        </Box>
      </footer>
    </>
  );
};

export default Footer;
