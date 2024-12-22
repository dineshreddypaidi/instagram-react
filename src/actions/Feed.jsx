import React, { useState, useEffect } from "react";
import { userFeed } from "../services/Apiendpoints";

const UserFeed = () => {
  const [userdata, setUserdata] = useState(null);

  const fetchData = async () => {
    try {
      const response = await userFeed(1);
      console.log(response.data);
      setUserdata(response.data.feed);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {userdata ? (
        <div>
          <pre>{JSON.stringify(userdata, null, 2)}</pre>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default UserFeed;
