// src/components/Login.tsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fakeAuthService } from "../services/authService";
import { addUser } from "../redux/authSlice";

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean | null>(null);

  const handleLogin = async () => {
    try {
      const obj = await fakeAuthService.login(username, password);
      dispatch(addUser(obj?.data));
      setSuccess(true);
      history("/dashboard");
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        // Handle other types of errors if needed
        setError("An error occurred");
      }
      setSuccess(false);
    }
  };
  return (
    <div className="wrapper">
      <div className="login-container">
        <div className="login-card">
          <div className="form">
            <h1>Login Page</h1>
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
            <button className="button" onClick={handleLogin}>
              Login
            </button>
            <h5>
              create account?<a href="/signup"> Create</a>
            </h5>
            {success !== null && (
              <p style={{ color: success ? "green" : "red" }}>
                {success ? "Login successful!" : "Login failed."}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
