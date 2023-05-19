import "./App.css";
import { EventsList } from "./components/EventsList";
import { NavBar } from "./components/NavBar";
import { AdminPanel } from "./components/AdminPanel";
import { Routes, Route } from "react-router-dom";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Footer } from "./components/Footer";
import { useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <>
      <NavBar isLoading={isLoading} />
      <Routes>
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/register" />
        <Route element={<EventsList />} path="/events" />
        <Route element={<AdminPanel />} path="/admin" />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
