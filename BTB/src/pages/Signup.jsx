import "./Signup.css";

function Signup() {
  return (
    <div className="signup-container">
      <div className="signup-popup">
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Username" />
        <input type="text" placeholder="Password" />
        <button>Sign up</button>
      </div>
    </div>
  );
}

export default Signup;
