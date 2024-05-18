// React Imports
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import ToastAlert from "../components/ToastAlert";

const ProtectedRoutes = (props: any) => {
  const navigate = useNavigate();

  const userStorage = localStorage.getItem("user");
  const userExpired = userStorage ? JSON.parse(userStorage).expiration : null;
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
  }, [navigate, userExpired]);

  if (localStorage.getItem("user")) {
    return props.children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoutes;
