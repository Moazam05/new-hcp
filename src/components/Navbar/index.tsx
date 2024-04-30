// Assets
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
  fontSize: "27px",
  fontWeight: 300,
  color: "#00739A",
  "@media (max-width: 576px)": {
    fontSize: "20px",
  },
};

const Navbar = () => {
  return (
    <>
      <Box
        sx={{
          margin: "0px 50px",
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

          <Box sx={titleStyle}>
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
