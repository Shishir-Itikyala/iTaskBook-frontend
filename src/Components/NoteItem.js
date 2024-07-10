import React,{useContext, useState}from 'react'
import noteContext from '../context/notes/noteContext';

const NoteItem = (props) => {
  const { note } = props;
  const {updateNote}=props;
  const context=useContext(noteContext);
  const {deleteNote} = context;
  console.log(note);
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <p className="card-text">{"Due date: "+new Date(note.due_date).getDate()+"-"+new Date(note.due_date).getMonth()+"-"+new Date(note.due_date).getFullYear()}</p>
          <i onClick={()=>{deleteNote(note._id)
          props.showAlert("Deleted Successfully","success")}}className="fa-solid fa-trash mx-2"></i>
          <i className="fa-solid fa-pen-to-square mx-2" onClick={()=>{updateNote(note)
         }} ></i>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
