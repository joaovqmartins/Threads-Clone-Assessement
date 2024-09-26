import React from "react";
import remove from "../assets/remove-button.png";

const Comments = ({ comment, onDelete }) => {
  const [firstName, lastName] = comment.name.split(" ");
  const formattedEmail = `@${comment.email.split("@")[0].toLowerCase()}`;

  const handleDelete = () => {
    if (window.confirm("Você realmente deseja excluir este comentário?")) {
      onDelete(comment.id);
    }
  };

  return (
    <div className="Comment-card">
      <p className="comment-header">
        <span className="first-name">{firstName}</span>{" "}
        <span className="last-name">{lastName}</span>{" "}
        <span className="email">{formattedEmail}</span>
        <p className="separator">__________________________</p>{" "}
      </p>
      <p className="comment-body">{comment.body.substring(0, 140)}</p>
      <button onClick={handleDelete}>
        <img src={remove} alt="Excluir comentário" className="Img-icon" />
      </button>
    </div>
  );
};

export default Comments;
