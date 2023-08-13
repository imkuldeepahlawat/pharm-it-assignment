import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Inventory from "./components/Inventory";

function App() {
  return (
    <div className="w-full bg-[#99f6e4] h-[100vh] text-center p-[2rem]">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route  path="/manageInventory" element={<Inventory/>} />
      </Routes>
    </div>
  );
}

export default App;
