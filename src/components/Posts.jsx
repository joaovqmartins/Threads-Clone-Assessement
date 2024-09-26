import React from "react";

const Posts = ({ post, onClick }) => (
  <div className="Post-card" onClick={onClick}>
    <h4 className="post-title">{post.title}</h4>
    <p className="separator">__________________________</p>
    <p className="post-body">{post.body}</p>
  </div>
);

export default Posts;
