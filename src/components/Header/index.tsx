// React Imports
import { useNavigate } from "react-router-dom";
// MUI
import { Box } from "@mui/material";
// Constants
import { Logo } from "../../assets/images";
import constants from "../../assets/constants";
// Styles
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();

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
        <Box
          sx={{
            cursor: "pointer",
          }}
          onClick={() => navigate("/")}
        >
          <img src={Logo} alt="logo" />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "start",
            justifyContent: "end",
            flexDirection: "column",
            "@media (max-width: 576px)": {
              alignItems: "center",
            },
          }}
        >
          <h2 className="header-title">Contact Us</h2>
          <a href="tel:{constants.CONTACT_US_TEL}" className="header-tel">
            {constants.CONTACT_US_TEL}
          </a>
        </Box>
      </Box>
    </header>
  );
};

export default Header;
