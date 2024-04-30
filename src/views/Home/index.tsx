// React Imports
import { useState } from "react";
// MUI
import { Box } from "@mui/material";
// Custom
import Footer from "../../components/Footer";
import SecondaryLayout from "../../components/Layout/SecondaryLayout";
import Navbar from "../../components/Navbar";

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
        <Navbar />
        <Footer fixed={true} />
      </SecondaryLayout>
    </Box>
  );
};

export default Home;
