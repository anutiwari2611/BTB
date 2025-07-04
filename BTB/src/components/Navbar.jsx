import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <Link to="/" className="logo"><img src="./src/assets/images/Logo.png" alt="logo" /></Link>
      <div className="nav-links">
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign up</Link>
      </div>
    </nav>
  );
}

export default Navbar;
