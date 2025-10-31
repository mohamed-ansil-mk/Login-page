import React from "react";
import "./App.css";

function App() {
  return (
    <div className="login-container">
      <h1 className="title">V I S U R A</h1>
      <form className="login-form">
        <input
          type="text"
          placeholder="Username"
          className="input-field"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="input-field"
          required
        />
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