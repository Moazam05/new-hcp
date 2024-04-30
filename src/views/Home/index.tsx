// MUI Imports
import { Box } from "@mui/material";
// Custom
import Footer from "../../components/Footer";
import SecondaryLayout from "../../components/Layout/SecondaryLayout";

const Home = () => {
  return (
    <SecondaryLayout>
      <Box>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias quam
        amet nobis dicta accusamus dolor explicabo nisi accusantium quas placeat
        magnam recusandae nesciunt necessitatibus reiciendis, fugiat
        reprehenderit deleniti temporibus. Enim!{" "}
      </Box>
      <Footer fixed={true} />
    </SecondaryLayout>
  );
};

export default Home;
