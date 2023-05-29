import "./App.css";
import { EventsList } from "./components/EventsList";
import { NavBar } from "./components/NavBar";
import { AdminPanel } from "./components/AdminPanel";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Footer } from "./components/Footer";
import { useContext, useEffect, useState } from "react";
import { AuthenticationContext } from "./components/AuthenticationContext";
import { Protected } from "./components/Protected";
import { HomePage } from "./components/HomePage";
import { AdminUserList } from "./components/AdminUserList";
import axios from "axios";

function App() {
  const { setIsSignedIn } = useContext(AuthenticationContext);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();

  const handleLogOut = () => {
    localStorage.removeItem("token");
    setIsSignedIn(false);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:5000/token/verify", {
        headers: {
          authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        console.log(response);
        if (response.data.id) {
          setIsSignedIn(true);
          navigate(location.pathname);
          setIsLoading(false);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <NavBar isLoading={isLoading} onLogout={handleLogOut} />
      <Routes>
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/register" />
        <Route element={<HomePage />} path="/" />
        <Route
          element={
            <Protected isLoading={isLoading} setIsLoading={setIsLoading} />
          }
        >
          <Route element={<AdminUserList />} path="/users" />
          <Route element={<EventsList />} path="/clients" />
          <Route element={<AdminPanel />} path="/admin" />
        </Route>
      </Routes>
      <Footer isLoading={isLoading} />
    </>
  );
}

export default App;
