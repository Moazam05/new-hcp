import { useState } from "react";
import SecondaryLayout from "../../components/Layout/SecondaryLayout";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Box } from "@mui/material";
import { Site, NewUser, Doctor } from "../../assets/images";

const PracticeManagement = () => {
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
        <Navbar />
        <Box
          sx={{
            margin: "100px 150px 50px",
          }}
        >
          <Box
            sx={{
              fontSize: "36px",
              color: "#00739A",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <h2>Click below to manage and add to your practice.</h2>
          </Box>

          <Box
            sx={{
              //   display: "flex",
              //   justifyContent: "space-between",
              marginTop: "45px",
            }}
          >
            <Box
              sx={{
                display: "flex",
              }}
            >
              <Box>
                <img src={NewUser} alt="new-user" />
              </Box>
              <Box>2nd</Box>
              <Box>3rd</Box>
            </Box>
            {/* 2nd */}
            <Box
              sx={{
                display: "flex",
                marginTop: "50px",
              }}
            >
              <Box>
                <img src={Doctor} alt="doctor" />
              </Box>
              <Box>2nd</Box>
              <Box>3rd</Box>
            </Box>
            {/* 3rd */}
            <Box
              sx={{
                display: "flex",
                marginTop: "50px",
              }}
            >
              <Box>
                <img src={Site} alt="site" />
              </Box>
              <Box>2nd</Box>
              <Box>3rd</Box>
            </Box>
          </Box>
        </Box>
        <Footer />
      </SecondaryLayout>
    </Box>
  );
};

export default PracticeManagement;
