import "./App.css";
import { EventsList } from "./components/EventsList";
import { NavBar } from "./components/NavBar";
import { AdminPanel } from "./components/AdminPanel";
import { Routes, Route } from "react-router-dom";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Footer } from "./components/Footer";
import { useContext, useState } from "react";
import { AuthenticationContext } from "./components/AuthenticationContext";
import { Protected } from "./components/Protected";
import { HomePage } from "./components/HomePage";

function App() {
  const { setIsSignedIn } = useContext(AuthenticationContext);
  const [isLoading, setIsLoading] = useState(true);

  const handleLogOut = () => {
    localStorage.removeItem("token");
    setIsSignedIn(false);
  };

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
          <Route element={<EventsList />} path="/clients" />
          <Route element={<AdminPanel />} path="/admin" />
        </Route>
      </Routes>
      <Footer isLoading={isLoading} />
    </>
  );
}

export default App;
