// MUI Imports
import { Box } from "@mui/material";
// Custom
import SecondaryHeader from "../Header/SecondaryHeader";
import Navbar from "../Navbar";

interface SecondaryLayoutProps {
  children: React.ReactNode;
}

const SecondaryLayout = ({ children }: SecondaryLayoutProps) => {
  return (
    <>
      <SecondaryHeader />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Navbar />
      </Box>
      <Box>{children}</Box>
    </>
  );
};

export default SecondaryLayout;
