import "./Login.css";

function Login() {
  return (
    <div className="login-container">
      <div className="login-popup">
        <input type="text" placeholder="Username" />
        <input type="text" placeholder="Password" />
        <button>Login</button>
      </div>
    </div>
  );
}

export default Login;
