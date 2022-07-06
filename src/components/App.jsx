import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

// const notes = [{head: "title1" , content:"content1"}];

function App() {
  const [notes, setNotes] = useState([]);
  function handleChange(data) {
    //console.log(data);

    setNotes([...notes, data]);
    // event.preventDefault();
  }
  function handleDelete(id) {
    setNotes((prevItems) => {
      return prevItems.filter((note, index) => {
        return index !== id;
      });
    });
  }
  function preventDef(event) {
    event.preventDefault();
  }
  return (
    <div>
      <Header />
      <CreateArea onClick={handleChange} prevent={preventDef} />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            del={handleDelete}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
