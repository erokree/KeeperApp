import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  function handleChange(event) {
    const { value, name } = event.target;
    setNote((prevValue) => {
      if (name === "title") {
        return { title: value, content: prevValue.content };
      } else if (name === "content") {
        return { title: prevValue.title, content: value };
      }
    });
  }
  function submitNote() {
    setNote({
      title: "",
      content: ""
    });
    return props.onClick(note);
  }
  return (
    <div>
      <form onSubmit={props.prevent}>
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={note.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
          onChange={handleChange}
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
