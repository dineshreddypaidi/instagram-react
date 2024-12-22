import React, { useState, useEffect } from "react";
import { userFeed } from "../services/Apiendpoints";
import Post from "../components/Post";

const UserFeed = () => {
  const [userdata, setUserdata] = useState([]);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [loading, setLoading] = useState(false);

  const fetchData = async (currentPage) => {
    try {
      setLoading(true);
      const response = await userFeed(currentPage);
      const { feed, pagination } = response.data
      setUserdata((prevData) => [...prevData, ...feed]);
      setHasNextPage(pagination.has_next);
    } catch (error) {
      console.error("Error fetching user data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleScroll = () => {
    const isNearBottom = window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 100;

    if (isNearBottom && !loading && hasNextPage) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  // Fetch data whenever the `page` state changes
  useEffect(() => {
    fetchData(page);
  }, [page]);

  // Attach the scroll event listener on mount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  },);

  return (
    <div>
      <h1>Hi</h1>
      {userdata.length > 0
        ? userdata.map((post) => <Post key={post.post_id} {...post} />)
        : !loading && <p>No posts found.</p>}
      {loading && <p>Loading more...</p>}
    </div>
  );
};

export default UserFeed;
