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
      <Navbar />
      <Box>{children}</Box>
    </>
  );
};

export default SecondaryLayout;
