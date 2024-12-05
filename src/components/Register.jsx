// src/pages/Register.js
import React, { useState } from "react";
import { register } from "../services/Apiendpoints"; 

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [account_type, setAccountype] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await register({
        username,
        email,
        account_type,
        password,
        name : username,
        phone_number : phone,
      });

      if (response.status === 201) {
        setSuccess("Registration successful! Please log in.");
        setError("");
      }
    } catch (err) {
      if (err.response && err.response.data) {
        const errorData = err.response.data;
        if (errorData.username) {
          setError(errorData.username[0]);
        } else if (errorData.email) {
          setError(errorData.email[0]);
        } else {
          console.log(errorData);
          setError("Registration failed. Please try again.");
        }
      } else {
        setError("An error occurred. Please try again.");
      }
    }
  };

  return (
      <div className="w-full max-w-xs p-6 bg-black border border-gray-700 rounded-lg shadow-md">
        {/* Instagram Logo */}
        <img
          src="https://www.logo.wine/a/logo/Instagram/Instagram-Wordmark-Logo.wine.svg"
          alt="Instagram"
          className="text-3xl font-bold text-center mb-2"
        />

        {/* Register Form */}
        <form onSubmit={handleRegister} className="space-y-4">
          {error && <p style={{ color: "red" }}>{error}</p>}
          {success && <p style={{ color: "green" }}>{success}</p>}
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:border-gray-500"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:border-gray-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="phone"
            placeholder="phone_number"
            className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:border-gray-500"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
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
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:border-gray-500"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <select
            className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:border-gray-500"
            value={account_type}
            onChange={(e) => setAccountype(e.target.value)}
            required
          >
            <option value="">Select Account Type</option>
            <option value="private">Private</option>
            <option value="public">Public</option>
          </select>

          <button
            type="submit"
            className="w-full py-2 bg-blue-500 rounded-md hover:bg-gradient-to-t hover:from-blue-400 hover:to-blue-600"
          >
            Register
          </button>
        </form>
      </div>
  );
};

export default Register;