import React from "react";

const Users = ({ user, onClick }) => (
  <div className="User-card" onClick={onClick}>
    <h3 className="user-name">{user.name}</h3>
    <p className="user-phrase">{user.company.catchPhrase}</p>
  </div>
);

export default Users;
