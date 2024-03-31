// MUI Imports
import { Box } from "@mui/material";
// Custom
import Header from "../Header";
import Footer from "../Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Box>{children}</Box>
      <Footer />
    </>
  );
};

export default Layout;
