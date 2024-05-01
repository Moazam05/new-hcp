import React, { useState } from "react";
import SecondaryLayout from "./SecondaryLayout";
import { Box } from "@mui/material";
import Navbar from "../Navbar";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
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
      </SecondaryLayout>
      {children}
    </Box>
  );
};

export default MainLayout;
