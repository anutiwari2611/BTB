import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CloseIcon from "@mui/icons-material/Close";

function Login({ onClose }) {
  const [show, setShow] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        data
      );
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userRole", res.data.user.role);

      console.log("Logged In", data);
      navigate("/");
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="bg-black/70 h-screen w-full fixed top-0 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white rounded-xl px-5 py-10 relative w-96">

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Email Input */}
          <input
            type="email"
            placeholder="example@gmail.com"
            name="email"
            value={data.email}
            onChange={handleChange}
            className="outline p-3 rounded-lg border"
          />

          {/* Password Input with Toggle */}
          <div className="relative">
            <input
              type={show ? "text" : "password"}
              placeholder="Password"
              name="password"
              value={data.password}
              onChange={handleChange}
              className="outline p-3 rounded-lg border w-full"
            />
            <button
              type="button"
              onClick={() => setShow((prev) => !prev)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"
            >
              {show ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-amber-400 p-3 rounded-lg cursor-pointer hover:bg-amber-500 duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
