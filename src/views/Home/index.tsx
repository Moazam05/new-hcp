import { Box } from "@mui/material";
import Layout from "../../components/Layout";
import OverlayLoader from "../../components/Spinner/OverlayLoader";
import { useGetUserQuery } from "../../redux/api/userApiSlice";
import Footer from "../../components/Footer";

const Home = () => {
  // GET USER API BIND
  const { data, isLoading } = useGetUserQuery({});

  return (
    <Layout>
      {isLoading && <OverlayLoader />}

      <Box>
        Welcome <h2>{data?.data?.firstName}</h2>
      </Box>
      <Footer />
    </Layout>
  );
};

export default Home;
