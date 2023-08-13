import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Inventory from "./components/Inventory";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  
  return (
    <div className="w-fulltext-center p-[2rem]">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route  path="/manageInventory" element={<Inventory  />} />
      </Routes>
    </div>
  );
}

export default App;
