// Custom
import { useEffect } from "react";
import Footer from "../../components/Footer";
import SecondaryLayout from "../../components/Layout/SecondaryLayout";
import OverlayLoader from "../../components/Spinner/OverlayLoader";
import { useGetProfileQuery } from "../../redux/api/userApiSlice";
import { setUserProfile } from "../../redux/auth/authSlice";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();

  // todo: GET USER API CALL
  const { data, isLoading } = useGetProfileQuery({});

  // todo: Save organizationID into local storage
  useEffect(() => {
    dispatch(setUserProfile(data?.data));
    localStorage.setItem("userProfile", JSON.stringify(data?.data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <SecondaryLayout>
      {isLoading && <OverlayLoader />}

      <Footer fixed={true} />
    </SecondaryLayout>
  );
};

export default Home;
