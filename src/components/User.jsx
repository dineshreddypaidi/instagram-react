import React, { useState, useEffect } from "react";
import { userData } from "../services/Apiendpoints";

const User = () => {
  const [userdata, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await userData();
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show loading state
  }

  return (
    <div>
      <h1>Hi</h1>
      {userData ? (
        <div>
          <h2>User Data:</h2>
          <pre>{JSON.stringify(userdata, null, 2)}</pre>
        </div>
      ) : (
        <p>No user data available.</p>
      )}
    </div>
  );
};

export default User;
