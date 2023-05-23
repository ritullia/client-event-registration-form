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
        <Route element={<EventsList />} path="/events" />
        <Route element={<AdminPanel />} path="/admin" />
        <Route
          element={
            <Protected isLoading={isLoading} setIsLoading={setIsLoading} />
          }
        >
          <Route element={<EventsList />} path="/events" />
          <Route element={<AdminPanel />} path="/admin" />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
