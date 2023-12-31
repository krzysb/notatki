import React, { useState } from "react";
import "./CreateForm.css";
const CreateForm = ({ addNote }) => {
  const [note, setNote] = useState({
    title: "",
    body: "",
  });
  function handleChangeTitle(event) {
    const newTitle = event.target.value;
    setNote((prev) => {
      return {
        ...prev,
        title: newTitle,
      };
    });
  }
  function handleChangeBody(event) {
    const newBody = event.target.value;
    setNote((prev) => {
      return {
        ...prev,
        body: newBody,
      };
    });
  }
  const add = (e) => {
    e.preventDefault(); 
    addNote(note);
    setNote({ title: "", body: "" });
  };

  return (
    <div className="container d-flex justify-content-center">
      <div className="createForm">
        <form action="">
          <div className="input-group flex-nowrap">
            <span className="input-group-text my-2" id="addon-wrapping">
              Tytuł
            </span>
            <input onChange={handleChangeTitle} value={note.title} type="text" className="form-control my-2" placeholder="Wpisz tytuł" required />
          </div>
          <div className="input-group">
            <span className="input-group-text">Treść</span>
            <textarea name="body" onChange={handleChangeBody} value={note.body} className="form-control" rows={3} aria-label="With textarea" placeholder="Wpisz treść" required></textarea>
          </div>
          <button className="btn btn-success btn-sm my-2" onClick={add}>
            Dodaj
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateForm;
