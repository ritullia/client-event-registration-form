import { useContext } from "react";
import { AuthenticationContext } from "./AuthenticationContext";
import { Navigate, Outlet } from "react-router-dom";

//Protected paliekam sitaip, nes pati request useEffect siunciam is app.js

export const Protected = ({ isLoading, setIsLoading }) => {
  const { isSignedIn } = useContext(AuthenticationContext);

  if (isLoading) {
    return <div>Page is Loading</div>;
  }

  if (!isSignedIn) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};
