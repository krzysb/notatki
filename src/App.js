import { useState } from "react";
import "./App.css";
import CreateForm from "./components/CreateForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Note from "./components/Note";
import { NotesWrapper } from "./components/NotesWrapper";

function App() {
  const [notes, setNotes] = useState([]);
  const addNote = (note) => {
    setNotes((prev) => [...prev, note]);
  };

  return (
    <div className="App">
      <Header />
      <CreateForm addNote={addNote} />
      <NotesWrapper notes={notes} setNotes={setNotes} />
      <Footer />
    </div>
  );
}

export default App;
