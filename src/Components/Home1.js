import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import Notes from "./Notes";

const Home = (props) => {
  const context = useContext(noteContext);
  const { showAlert } = props;
  // console.log(notes);
  return (
    <div>
      
      <div className="row my-3">
        
        <Notes showAlert={showAlert}/>
       
      </div>
    </div>
  );
};

export default Home;
