import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
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
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Logged In");
    Console.log("Logged In", data);
    navigate("/");
  };
  return (
    // Whenever you want to show the login page just remove the "hidden word" below
    <div className="bg-black/70 h-screen w-full fixed top-0 backdrop-blur-sm flex justify-center items-center hidden"> 
      <div className="bg-white rounded-xl px-5 py-10">
        <form onSubmit={handleSubmit} className="flex flex-col gap-10">
            <input
              type="email"
              placeholder="example@gmail.com"
              name="email"
              value={data.email}
              onChange={handleChange}
              className="outline p-3 rounded-lg"
            />
            <input
              type={setShow ? "text" : "password"}
              placeholder="Password"
              name="password"
              value={data.password}
              onChange={handleChange}
              className="outline p-3 rounded-lg"
            />
            {/* <button onClick={(prev)=>!prev}>{setShow?"Hide":"Show"}</button> */}
            <button type="submit" className="bg-amber-400 p-3 rounded-lg cursor-pointer hover:bg-amber-500 duration-300">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
