// MUI Imports
import { Box } from "@mui/material";
// Custom
import SecondaryHeader from "../Header/SecondaryHeader";

interface SecondaryLayoutProps {
  children: React.ReactNode;
  anchorEl: null | HTMLElement;
  setAnchorEl: (value: null | HTMLElement) => void;
  open: boolean;
}

const SecondaryLayout = ({
  children,
  anchorEl,
  setAnchorEl,
  open,
}: SecondaryLayoutProps) => {
  return (
    <>
      <SecondaryHeader
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
        open={open}
      />
      <Box>{children}</Box>
    </>
  );
};

export default SecondaryLayout;
