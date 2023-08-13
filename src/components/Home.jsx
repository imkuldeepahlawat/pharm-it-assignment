import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  
  return (
    <div>
      <h1 className="uppercase text-5xl">pharamit</h1>
      <h2 className="text-2xl font-lightbold">Inventory Management System</h2>
      <p>
        Go To{" "}
        <Link to="/manageInventory" >
          <button className="text-[#172554] bg-[#60a5fa] p-2 rounded-lg">
            Inventory Page
          </button>
        </Link>
      </p>
    </div>
  );
};

export default Home;
