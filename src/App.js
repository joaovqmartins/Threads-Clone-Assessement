import React, { useState } from "react";
import "./App.css";

import FetchData from "./components/FetchData";
import Users from "./components/Users";
import Posts from "./components/Posts";
import Comments from "./components/Comments";
import ReloadPage from "./components/ReloadPage";
import BackButton from "./components/BackButton";
import GridToList from "./components/GridToList";

function App() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);
  const [isGridView, setIsGridView] = useState(true);

  const handleDeleteComment = (id) => {
    setComments((prev) => prev.filter((comment) => comment.id !== id));
  };

  const handleBack = () => {
    if (selectedPost) {
      setSelectedPost(null);
    } else if (selectedUser) {
      setSelectedUser(null);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <nav className="App-nav">
          <ReloadPage />
          <p>Página inicial</p>
          <GridToList onChangeView={() => setIsGridView(!isGridView)} />
        </nav>
      </header>

      <main className={`App-main ${isGridView ? "grid-view" : "list-view"}`}>
        <div className={`App-card ${isGridView ? "grid-view" : "list-view"}`}>
          {selectedUser === null
            ? users.map((user) => (
                <Users
                  key={user.id}
                  user={user}
                  onClick={() => setSelectedUser(user.id)}
                />
              ))
            : selectedPost === null
            ? posts.map((post) => (
                <Posts
                  key={post.id}
                  post={post}
                  onClick={() => setSelectedPost(post.id)}
                />
              ))
            : comments.map((comment) => (
                <Comments
                  key={comment.id}
                  comment={comment}
                  onDelete={handleDeleteComment}
                />
              ))}
        </div>
      </main>

      <footer className="App-footer">
        <BackButton onBack={handleBack} />
      </footer>

      <FetchData
        setUsers={setUsers}
        setPosts={setPosts}
        setComments={setComments}
        selectedUser={selectedUser}
        selectedPost={selectedPost}
      />
    </div>
  );
}

export default App;
