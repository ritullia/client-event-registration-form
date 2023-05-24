import { useContext, useEffect } from "react";
import { AuthenticationContext } from "./AuthenticationContext";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

export const Protected = ({ isLoading, setIsLoading }) => {
  const { isSignedIn, setIsSignedIn } = useContext(AuthenticationContext);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:5000/token/verify", {
        headers: {
          authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        if (response.data.id) {
          setIsSignedIn(true);
          navigate(location.pathname);
          setIsLoading(false);
        }
        console.log(response.data.id);
      })
      .catch((err) => console.log(err));
  }, []);

  if (isLoading) {
    return <div>Page is Loading</div>;
  }

  if (!isSignedIn) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};
