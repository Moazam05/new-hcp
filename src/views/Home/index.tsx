// React Imports
import { useState } from "react";
// MUI
import { Box } from "@mui/material";
// Custom
import Footer from "../../components/Footer";
import SecondaryLayout from "../../components/Layout/SecondaryLayout";
import { HomeIcon } from "../../assets/images";

const Home = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  return (
    <Box
      sx={{
        backgroundColor: open ? "rgb(0, 0, 0,.3)" : "transparent",
        height: "100vh",
      }}
    >
      <SecondaryLayout
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
        open={open}
      >
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
            }}
          >
            <Box>
              <img src={HomeIcon} alt="home" />
            </Box>

            <Box
              sx={{
                margin: "0 40px",
                width: "1.5px",
                height: "28px",
                backgroundColor: "#00739a",
              }}
            ></Box>

            <Box
              sx={{
                fontSize: "27px",
                fontWeight: 300,
                color: "#00739A",
              }}
            >
              <h3>Patient Management</h3>
            </Box>

            <Box
              sx={{
                margin: "0 40px",
                width: "1.5px",
                height: "28px",
                backgroundColor: "#00739a",
              }}
            ></Box>

            <Box
              sx={{
                fontSize: "27px",
                fontWeight: 300,
                color: "#00739A",
              }}
            >
              <h3>Practice Management</h3>
            </Box>

            <Box
              sx={{
                margin: "0 40px",
                width: "1.5px",
                height: "28px",
                backgroundColor: "#00739a",
              }}
            ></Box>

            <Box
              sx={{
                fontSize: "27px",
                fontWeight: 300,
                color: "#00739A",
              }}
            >
              <h3>Payer Coverage</h3>
            </Box>

            <Box
              sx={{
                margin: "0 40px",
                width: "1.5px",
                height: "28px",
                backgroundColor: "#00739a",
              }}
            ></Box>

            <Box
              sx={{
                fontSize: "27px",
                fontWeight: 300,
                color: "#00739A",
              }}
            >
              <h3>Practice Resources</h3>
            </Box>
          </Box>
        </Box>
        <Footer fixed={true} />
      </SecondaryLayout>
    </Box>
  );
};

export default Home;
