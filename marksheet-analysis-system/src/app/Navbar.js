import React from "react";
import { FcWorkflow } from "react-icons/fc";

const Navbar = () => (
  <nav style={{ backgroundColor: "black", padding: "10px" }}>
    <div style={{ display: "flex", alignItems: "center" }}>
      <FcWorkflow size={55} style={{ marginRight: "10px", color: "white" }} />
      <ul className="flex ml-auto">
        <li style={{ marginRight: "40px", marginLeft: "20px" }}>
          <a href="/" className="text-md font-medium text-white">
            Home
          </a>
        </li>
        <li style={{ marginRight: "20px" }}>
          <a href="/search" className="text-md font-medium text-white">
            Search
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
