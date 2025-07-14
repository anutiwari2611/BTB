import { Link } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";
import Form from "./Form";

function Navbar() {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <nav>
        <Link to="/" className="logo">
          <img src="./src/assets/images/Logo.png" alt="logo" />
        </Link>
        <div>
          <button onClick={() => setShowForm(true)}>Sell</button>
        </div>
        <div className="nav-links">
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign up</Link>
        </div>
      </nav>
      {showForm && <Form onClose={() => setShowForm(false)} />}
    </>
  );
}

export default Navbar;
