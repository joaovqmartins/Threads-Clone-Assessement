import React, { useEffect } from "react";

const FetchData = ({
  setUsers,
  setPosts,
  setComments,
  selectedUser,
  selectedPost,
}) => {
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUsers(data);
    };

    fetchUsers();
  }, [setUsers]);

  useEffect(() => {
    if (selectedUser) {
      const fetchPosts = async () => {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?userId=${selectedUser}`
        );
        const data = await response.json();
        setPosts(data);
      };

      fetchPosts();
    }
  }, [selectedUser, setPosts]);

  useEffect(() => {
    if (selectedPost) {
      const fetchComments = async () => {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/comments?postId=${selectedPost}`
        );
        const data = await response.json();
        setComments(data);
      };

      fetchComments();
    }
  }, [selectedPost, setComments]);

  return null;
};

export default FetchData;
