import { FcWorkflow } from "react-icons/fc";

const Navbar = () => (
  <nav style={{ backgroundColor: "black", padding: "10px" }}>
    <div style={{ display: "flex", alignItems: "center" }}>
      <FcWorkflow size={55} style={{ marginRight: "10px", color: "white" }} />
      <ul className="flex ml-auto">
        <li style={{ marginRight: "40px", marginLeft: "40px" }}>
          <a href="/" className="text-xl font-medium text-white">
            Home
          </a>
        </li>
        <li style={{ marginRight: "40px" }}>
          <a href="/upload" className="text-xl font-medium text-white">
            Upload
          </a>
        </li>
        <li style={{ marginRight: "40px" }}>
          <a href="/search" className="text-xl font-medium text-white">
            Search
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
