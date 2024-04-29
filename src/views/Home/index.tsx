import { Box } from "@mui/material";
import Layout from "../../components/Layout";
import OverlayLoader from "../../components/Spinner/OverlayLoader";
import { useGetUserQuery } from "../../redux/api/userApiSlice";

const Home = () => {
  // GET USER API BIND
  const { data, isLoading } = useGetUserQuery({});

  return (
    <Layout>
      {isLoading && <OverlayLoader />}

      <Box>
        Welcome <h2>{data?.data?.firstName}</h2>
      </Box>
    </Layout>
  );
};

export default Home;
