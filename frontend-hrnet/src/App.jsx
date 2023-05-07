import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import CreateEmployees from "./pages/createEmployees/CreateEmployees";
import CurrentEmployees from "./pages/currentEmployees/CurrentEmployees";
import Home from "./pages/home/Home";
import Error from "./pages/error/Error";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/employees" element={<CurrentEmployees />}></Route>
        <Route path="/create_employees" element={<CreateEmployees />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </div>
  );
}

export default App;
