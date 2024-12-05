import React, { useState } from "react";
import { login } from "../services/Apiendpoints";
import Register from './Register';
import { encryptToken } from "../services/secret";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [isTrue, setIstrue] = useState(true);

  const loginHandler = () => {
    setIstrue(!isTrue);
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login({ username, password });
      const token = response.data.token;
      const encryptedtoken = encryptToken(token);
      localStorage.setItem("token", encryptedtoken);
      setError("loggin succesful");
    } catch (err) {
      if (err.response && err.response.data) {
      const errorData = err.response.data;
      if (errorData.error) {
        setError(errorData.error);
      }
      else {
        setError("password incorrect");
      }
      }
    };
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      {isTrue ? (
        <div className="w-full max-w-xs p-6 bg-black border border-gray-700 rounded-lg shadow-md">
          {/* Instagram Logo */}
          <img
            src="https://www.logo.wine/a/logo/Instagram/Instagram-Wordmark-Logo.wine.svg"
            alt="Instagram"
            className="text-3xl font-bold text-center mb-2"
          />

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            {error && <p style={{ color: "red" }}>{error}</p>}
            <input
              type="text"
              placeholder="Username, Email or Phone number"
              className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:border-gray-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:border-gray-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {/* Login Button */}
            <button
              type="submit"
              className="w-full mt-4 py-2 bg-blue-500 rounded-md hover:bg-gradient-to-t hover:from-blue-400 hover:to-blue-600"
            >
              Log in
            </button>
          </form>

          {/* OR Divider */}
          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-700" />
            <span className="px-2 text-gray-400">OR</span>
            <hr className="flex-grow border-gray-700" />
          </div>

          {/* Forgot Password */}
          <div className="mt-4 text-center">
            <button
              className="text-gray-400 hover:underline"
              onClick={() => alert("Forgot Password clicked")}
            >
              Forgot password?
            </button>
          </div>
        </div>
      ) : (
        <Register />
      )}

      {/* Signup and Login swap*/}
      <div className="w-full max-w-xs mt-4 p-4 bg-black border border-gray-700 rounded-lg text-center">
        <p className="text-gray-400">
          {isTrue ? (
            <>
              Don't have an account?{' '}
              <button className="text-blue-500 font-medium hover:underline" onClick={loginHandler}>
                Sign up
              </button>
            </>
          ) : (
            <>
              Have an account?{' '}
              <button className="text-blue-500 font-medium hover:underline" onClick={loginHandler}>
                Log in
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default Login;