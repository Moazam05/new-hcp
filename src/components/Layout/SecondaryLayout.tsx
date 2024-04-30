// MUI Imports
import { Box } from "@mui/material";
// Custom
import SecondaryHeader from "../Header/SecondaryHeader";

interface SecondaryLayoutProps {
  children: React.ReactNode;
}

const SecondaryLayout = ({ children }: SecondaryLayoutProps) => {
  return (
    <>
      <SecondaryHeader />
      <Box>{children}</Box>
    </>
  );
};

export default SecondaryLayout;
