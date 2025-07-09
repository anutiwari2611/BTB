import { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";


function Login() {
  const [show,setShow]=useState(false)
  const [data,setData]=useState({
    email:"",
    password:""

  })
  const navigate=useNavigate()
  const handleChange=(e)=>{
    const {name,value}=e.target;
    setData((prev)=>({
      ...prev,
      [name]:value
    }))

  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    alert("Logged In")
    Console.log("Logged In" ,data)
    navigate("/")
    
  }
  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
      <div className="login-popup">
        <input type="email" placeholder="example@gmail.com" name="email" value={data.email} onChange={handleChange}/>
        <input type={setShow?"text":"password"} placeholder="Password" name="password" value={data.password} onChange={handleChange} />
        {/* <button onClick={(prev)=>!prev}>{setShow?"Hide":"Show"}</button> */}
        <button type="submit">Login</button>
      </div>
      </form>
    </div>
  );
}

export default Login;
