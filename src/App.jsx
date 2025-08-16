import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Admin from "./components/Admin";
import ProtectAdmin from "./components/ProtectAdmin";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={
          <ProtectAdmin>
          <Admin/>
          </ProtectAdmin>
          }/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
