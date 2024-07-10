import React, { useContext, useState } from 'react';
import noteContext from '../context/notes/noteContext';

const AddNote = (props) => {
  const context = useContext(noteContext);
  const { addNote } = context;
  const [note, setNote] = useState({ title: "", description: "", duedate: "" });

  const handleClick = (e) => {
    console.log("Submitted");
    e.preventDefault();
    addNote(note.title, note.description, note.duedate);
    props.showAlert("Note added successfully", "success");
    setNote({ title: "", description: "", duedate: "" });
  }

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <div className="container my-3">
        <h2>Add a Task</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              aria-describedby="emailHelp"
              onChange={onChange}
              minLength={5}
              required
              value={note.title}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              onChange={onChange}
              minLength={5}
              required
              value={note.description}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="duedate" className="form-label">
              Due Date
            </label>
            <input
              type="date"
              className="form-control"
              id="duedate"
              name="duedate"
              onChange={onChange}
              value={note.duedate}
            />
          </div>
          <button
            disabled={note.title.length < 5 || note.description.length < 5}
            type="submit"
            onClick={handleClick}
            className="btn btn-primary"
          >
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNote;
