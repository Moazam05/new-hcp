// Assets
import { useLocation, useNavigate } from "react-router-dom";
import { HomeIcon } from "../../assets/images";
// MUI
import { Box } from "@mui/material";

const lineStyle = {
  margin: "0 40px",
  width: "1.5px",
  height: "28px",
  backgroundColor: "#00739a",
  "@media (max-width: 576px)": {
    display: "none",
  },
};

const titleStyle = {
  fontSize: "25px",
  fontWeight: 300,
  color: "#00739A",
  cursor: "pointer",
  "@media (max-width: 576px)": {
    fontSize: "18px",
  },
};

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const pathParts = location.pathname.split("/");
  const mainRoute = pathParts[1];

  return (
    <>
      <Box
        sx={{
          margin: "0px 50px",
          "@media (max-width: 576px)": {
            margin: "0px 20px",
            border: "1px solid #00739A",
            borderRadius: "5px",
            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            justifyContent: "space-between",
            "@media (max-width: 576px)": {
              justifyContent: "center",
              margin: "20px 0",
              flexDirection: "column",
              gap: "8px",
            },
          }}
        >
          <Box>
            <img src={HomeIcon} alt="home" />
          </Box>

          <Box sx={lineStyle}></Box>

          <Box sx={titleStyle}>
            <h3>Patient Management</h3>
          </Box>

          <Box sx={lineStyle}></Box>

          <Box
            sx={{
              ...titleStyle,
              borderBottom:
                mainRoute === "practice-management"
                  ? "3px solid #B12029"
                  : "unset",
            }}
            onClick={() => navigate("/practice-management")}
          >
            <h3>Practice Management</h3>
          </Box>

          <Box sx={lineStyle}></Box>

          <Box sx={titleStyle}>
            <h3>Payer Coverage</h3>
          </Box>

          <Box sx={lineStyle}></Box>

          <Box sx={titleStyle}>
            <h3>Practice Resources</h3>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
