import React from "react";
import Note from "./Note";
import "./NotesWrapper.css";
export const NotesWrapper = ({ notes, setNotes }) => {
  const deleteNote = (id) => {
    const newNotes = notes.filter((note, index) => index != id);
    setNotes(newNotes);
  };
  return (
    <div className="wrap">
      {notes.map((note, id) => (
        <Note title={note.title} body={note.body} deleteNote={deleteNote} id={id} key={id} />
      ))}
    </div>
  );
};
