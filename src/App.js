import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbarcomp from "./Components/Nav";
import Home from "./Components/Home1.js";
// import About from "./Components/About1.js";
import NoteState from "./context/notes/NoteState.js";
import Alert from "./Components/Alert.js";
import Login from "./Components/Login.js";
import SignUp from "./Components/SignUp.js";
import { useState } from "react";




function App() {
  const [alert, setAlert]=useState({message:"",type:""});
  const showAlert =(message,type)=>{
    setAlert({
      message:message,
      type:type
    })
    setTimeout(()=>{
      setAlert({message:"",type:""});
    },1500);
  }
  return (
    <>
    <NoteState>
     <Router>
    <Navbarcomp />
    <Alert alert={alert}/>
    <div className="container">
      
      <Routes>
        <Route path="/" element={<Home showAlert={showAlert}/>} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/login" element={<Login showAlert={showAlert}/>} />
        <Route path="/signup" element={<SignUp showAlert={showAlert}/>} />
      </Routes>
      </div>
    </Router>
    </NoteState>
    </>
  );
}

export default App;