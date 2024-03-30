// MUI Imports
import { Box } from "@mui/material";
import { Logo } from "../../assets/images";
// Constants
import constants from "../../assets/constants";
// Styles
import "./Header.css";

const Header = () => {
  return (
    <header>
      <Box
        sx={{
          backgroundColor: "#00313C",
          height: "40px",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        }}
      ></Box>
      <Box
        sx={{
          margin: "35px 50px 50px",
          display: "flex",
          justifyContent: "space-between",
          "@media (max-width: 576px)": {
            flexDirection: "column",
            alignItems: "center",
            margin: "30px 20px 20px",
            gap: "20px",
          },
        }}
      >
        <img src={Logo} alt="logo" />
        <Box
          sx={{
            display: "flex",
            alignItems: "start",
            justifyContent: "end",
            flexDirection: "column",
            "@media (max-width: 576px)": {
              alignItems: "center",
              gap: "5px",
            },
          }}
        >
          <h2 className="header-title">Contact Us</h2>
          <Box sx={{ color: "#00739A", fontSize: "28px", fontWeight: 600 }}>
            {constants.CONTACT_US_TEL}
          </Box>
        </Box>
      </Box>
    </header>
  );
};

export default Header;
