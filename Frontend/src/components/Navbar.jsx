import { Link } from "react-router-dom";
import { useState } from "react";
// import Form from "./Form";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SearchIcon from "@mui/icons-material/Search";

function Navbar() {
  const role = localStorage.getItem("userRole");

  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <nav className="flex justify-between items-center border-b-[1px] border-black/5 w-full px-10 h-[4rem]">
        <Link to="/" className="h-20 w-20 flex justify-center items-center">
          <img
            src="./src/assets/images/Logo.png"
            alt="logo"
            className="object-cover object-center"
          />
        </Link>
        {role === "admin" && (
          <Link
            to="/admin"
            className="outline px-6 py-1 rounded-full hover:bg-[#F75D34] hover:text-white duration-200 cursor-p"
          >
            Admin
          </Link>
        )}

        <div className="flex items-center rounded-full w-[28%] p-2 gap-2 outline outline-black/20 text-[0.8rem]">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search Tractors eg. Mahindra or Swaraj"
            className="w-full outline-none"
          />
        </div>

        <div>
          <button
            onClick={() => setShowForm(true)}
            className="outline px-6 py-1 bg-[#0D3B66] text-white rounded-full cursor-pointer"
          >
            Sell
          </button>
        </div>   
        <div className="flex justify-center items-center gap-2">
          <PersonOutlineIcon />
          <Link to="/login">Login</Link>/<Link to="/signup">Sign up</Link>
        </div>
      </nav>
      {showForm && <Form onClose={() => setShowForm(false)} />}
    </div>
  );
}

export default Navbar;
