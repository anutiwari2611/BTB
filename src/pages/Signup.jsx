import { useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";

function Signup() {
  const [data,setData]=useState({name:"",
    email:"",
    password:""})

    const handleChange=(e)=>{
      const {name,value}=e.target;
      setData((prev)=>({
        ...prev,
        [name]:value

      }))

    }
    const handleSubmit=(e)=>{
      e.preventDefault();
      alert("Registered");
      Console.log("Submitted",data);
    }
  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit}>
      <div className="signup-popup">
        <input type="email" placeholder="Email"  value={data.email} name="email" onChange={handleChange} required/>
        <input type="text" placeholder="Username" value={data.name} name="name" onChange={handleChange} required/>
        <input type="text" placeholder="Password" value={data.password} name="password" onChange={handleChange} required />
        <div class="but">
        <button type="Submit">Sign up</button>
        <button class="log"><Link to="/login">LogIn</Link></button>
        </div>
      </div>
      </form>
    </div>
  );
}

export default Signup;
