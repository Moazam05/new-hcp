// React Imports
import React from "react";
// MUI Imports
import { Box } from "@mui/material";
// Constants
import { FooterLogo } from "../../assets/images";
import constants from "../../constants";
// Styles
import "./Footer.css";

interface FooterProps {
  fixed?: boolean;
}

const Footer = ({ fixed }: FooterProps) => {
  return (
    <>
      <footer>
        <Box
          sx={{
            position: fixed ? "fixed" : "relative",
            bottom: fixed ? 0 : "auto",
            left: fixed ? 0 : "auto",
            width: "100%",
            backgroundColor: "#00313C",
            color: "#fff",
            padding: "25px 75px 0",
            "@media (max-width: 576px)": {
              padding: "25px 20px 10px",
              position: "relative",
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
                <span className="footer-span">Tel:</span>{" "}
                {constants.CONTACT_US_TEL}
              </a>

              <a
                href="fax:{constants.CONTACT_US_FAX}"
                className="footer-contact"
              >
                <span className="footer-span">Fax</span>{" "}
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
                paddingBottom: "5px",
              },
            }}
          >
            <p className="footer-text">
              {constants.ALL_RIGHTS_ONE}
              <span className="footer-span-2">{constants.ALL_RIGHTS_TWO}</span>
              <span>{constants.ALL_RIGHTS_THREE}</span>
            </p>
          </Box>
        </Box>
      </footer>
    </>
  );
};

export default Footer;
