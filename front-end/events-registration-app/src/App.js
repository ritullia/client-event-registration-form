import "./App.css";
import { EventsList } from "./components/EventsList";
import { NavBar } from "./components/NavBar";
import { AdminPanel } from "./components/AdminPanel";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route element={<EventsList />} path="/events" />
        <Route element={<AdminPanel />} path="/admin" />
      </Routes>
    </>
  );
}

export default App;
