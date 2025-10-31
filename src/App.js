import React,{useState} from "react";
import {useNavigate} from "react-router-dom";
import "./App.css";

function App() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePassword = () => setShowPassword(!showPassword);

  const handleLogin = (e) => {
    e.preventDefault();

    navigate("/Home");
  }

  return (
    <div className="login-container">
      <h1 className="title">V I S U R A</h1>
      <form className="login-form" onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          className="input-field"
          required/>
          <div className="password-container">
        <input
          type={showPassword ? "text": "password"}
          placeholder="Password"
          className="input-field password-input"
          required
        />
        <button type="button" className="toggle-btn" onClick={togglePassword}>
          {showPassword ? "🔒":"🔓"}
        </button>
        </div> 
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
      <p className="signup-text">
        Don’t have an account? <a href="#">Sign up</a>
      </p>
    </div>
  );
}

export default App;