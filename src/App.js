import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Calculator from "./components/Calculator";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Calculator />} />
      </Routes>
    </>
  );
}

export default App;
