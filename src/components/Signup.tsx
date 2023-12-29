// src/components/Signup.tsx
import React, { useState } from "react";
import { fakeAuthService } from "../services/authService";

const Signup: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState<boolean | null>(null);

  const handleSignup = async () => {
    try {
      await fakeAuthService.signup(username, password);
      setSuccess(true);
    } catch (err) {
      setSuccess(false);
    }
  };

  return (
    <div className="wrapper">
      <div className="login-container">
        <div className="login-card">
          <div className="form">
            <h1>Signup Page</h1>
            <input
              className="loginInput"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className="loginInput"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="button" onClick={handleSignup}>
              Signup
            </button>

            <h5>
              Sign In?<a href="/login"> Login</a>
            </h5>
            {success !== null && (
              <p style={{ color: success ? "green" : "red" }}>
                {success ? "Signup successful!" : "Signup failed."}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
