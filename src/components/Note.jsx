import React from "react";
import "./Note.css";
const Note = (props) => {
  const handleDelete = () => {
    props.deleteNote(props.id);
  };
  return (
    <div className="notatka">
      <div className="card w-100">
        <div className="card-header">{props.title}</div>
        <div className="card-body">
          <p className="card-text">{props.body}</p>
          <a href="#" className="btn btn-danger btn-sm" onClick={handleDelete}>
            Usuń
          </a>
        </div>
      </div>
    </div>
  );
};

export default Note;
