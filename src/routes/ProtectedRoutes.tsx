// React Imports
import { Navigate, useNavigate } from "react-router-dom";
import { selectedUserExpired } from "../redux/auth/authSlice";
import useTypedSelector from "../hooks/useTypedSelector";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ToastAlert from "../components/ToastAlert";

const ProtectedRoutes = (props: any) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userExpired = useTypedSelector(selectedUserExpired);
  // const userExpired = "2024-05-18T09:00:00Z";

  useEffect(() => {
    const tokenExpirationTime = new Date(userExpired).getTime();

    const checkTokenExpiration = () => {
      const currentTime = new Date().getTime();
      if (currentTime >= tokenExpirationTime) {
        ToastAlert("Session Expired", "error");
        localStorage.clear();
        navigate("/login");
      }
    };

    // Check immediately in case the token is already expired
    checkTokenExpiration();

    // Set an interval to check periodically
    const intervalId = setInterval(checkTokenExpiration, 1000); // Check every second

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, [dispatch, navigate, userExpired]);

  if (localStorage.getItem("user")) {
    return props.children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoutes;
