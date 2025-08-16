import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registered");
    console.log("Submitted", data);
    navigate("/"); 
  };

  return (
    <div className="bg-black/70 h-screen w-full fixed top-0 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white rounded-xl px-5 py-10">
        <form onSubmit={handleSubmit} className="flex flex-col gap-10">
          <input
            type="email"
            placeholder="Email"
            value={data.email}
            name="email"
            onChange={handleChange}
            required
            className="outline p-3 rounded-lg"
          />
          <input
            type="text"
            placeholder="Username"
            value={data.name}
            name="name"
            onChange={handleChange}
            required
            className="outline p-3 rounded-lg"
          />
          <input
            type="text"
            placeholder="Password"
            value={data.password}
            name="password"
            onChange={handleChange}
            required
            className="outline p-3 rounded-lg"
          />
          <div className="flex justify-evenly">
            <button
              type="submit"
              className="outline px-4 py-1 outline-black/40 rounded-lg hover:bg-[#168ADE] hover:text-white duration-200"
            >
              Sign up
            </button>
            <Link to="/login">
              <button
                type="button"
                className="outline px-4 py-1 outline-black/40 rounded-lg hover:bg-[#168ADE] hover:text-white duration-200"
              >
                Login
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
