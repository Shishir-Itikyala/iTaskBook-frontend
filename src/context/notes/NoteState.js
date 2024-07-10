import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "https://itaskbook-backend.onrender.com";
  const initialNotes = [];
  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes/`, {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
        auth_token:
          localStorage.getItem("token"),
      },

      body: JSON.stringify(),
    });
    const json=await response.json();
    console.log(json);
    setNotes(json);
  }
  const addNote = async (title, description, duedate) => {
    const response = await fetch(`${host}/api/notes/addnote/`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        auth_token:
          localStorage.getItem("token"),
      },

      body: JSON.stringify({ title, description, duedate }),
    });
    const note=await response.json();
    setNotes(notes.concat(note));
  };
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}/`, {
      method: "DELETE",

      headers: {
        "Content-Type": "application/json",
        auth_token:
          localStorage.getItem("token"),
      },

      
    });
    const json=response.json();
    
    const newNotes=notes.filter((note)=>{return note._id !== id})
    setNotes(newNotes);
  }
  const editNote = async (id, title, description, due_date) => {
    const response = await fetch(`${host}/api/notes/updatenote/${id}/`, {
      method: "PUT",

      headers: {
        "Content-Type": "application/json",
        auth_token:
          localStorage.getItem("token"),
      },

      body: JSON.stringify({ title, description, due_date }),
    });
    const json = await response.json();
    console.log(json);
    let newNotes=JSON.parse(JSON.stringify(notes))
    for (let index = 0; index < notes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].due_date = due_date;
        break;
      }
      
    }
    setNotes(newNotes);
  };
  const [notes, setNotes] = useState(initialNotes);
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote,getNotes,editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
