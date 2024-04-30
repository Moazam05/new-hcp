// React Imports
import { useState } from "react";
// MUI
import { Box } from "@mui/material";
// Custom
import Footer from "../../components/Footer";
import SecondaryLayout from "../../components/Layout/SecondaryLayout";

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
        <Box>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
          quam amet nobis dicta accusamus dolor explicabo nisi accusantium quas
          placeat magnam recusandae nesciunt necessitatibus reiciendis, fugiat
          reprehenderit deleniti temporibus. Enim!{" "}
        </Box>
        <Footer fixed={true} />
      </SecondaryLayout>
    </Box>
  );
};

export default Home;
