import { Link } from "react-router-dom";
import { useState } from "react";
import Form from "./Form";

function Navbar() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <nav className="flex justify-between items-center border-b-[1px] border-black/20 w-full px-10 h-[4rem]">
        <Link to="/" className="h-20 w-40 flex justify-center items-center">
          <img
            src="./src/assets/images/Logo.png"
            alt="logo"
            className="object-cover object-center"
          />
        </Link>
        <div>
          <button
            onClick={() => setShowForm(true)}
            className="outline px-6 py-1 outline-black/40 rounded-full hover:bg-[#F75D34] hover:text-white duration-200 cursor-p"
          >
            Sell
          </button>
        </div>
        <div className="flex justify-center items-center gap-8">
          <Link
            to="/login"
            className="outline px-4 py-1 outline-black/40 rounded-full hover:bg-[#168ADE] hover:text-white duration-200"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="outline px-4 py-1 outline-black/40 rounded-full hover:bg-[#168ADE] hover:text-white duration-200"
          >
            Sign up
          </Link>
        </div>
      </nav>
      {showForm && <Form onClose={() => setShowForm(false)} />}
    </div>
  );
}

export default Navbar;
