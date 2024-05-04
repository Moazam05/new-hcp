// React Imports
import React, { useState } from "react";
// MUI
import { Box } from "@mui/material";
// Custom
import SecondaryLayout from "./SecondaryLayout";
import Navbar from "../Navbar";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Box>
      <SecondaryLayout>
        <Navbar />
      </SecondaryLayout>
      {children}
    </Box>
  );
};

export default MainLayout;
