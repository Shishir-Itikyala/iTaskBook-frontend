import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";
const SignUp = (props) => {
    const [credentails,setCredentials] =useState({name:"",email:"",password:"",cpassord:""});
    const onChange=(e)=>{
        setCredentials({...credentails, [e.target.name]:e.target.value})
    }
    const navigate = useNavigate();
    const handleSubmit= async (e)=>{
        e.preventDefault();
        const response = await fetch(`https://inotebook-backend-u6ju.onrender.com/api/auth/createuser/`, {
            method: "POST",
      
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ name:credentails.name,email:credentails.email,password:credentails.password }),
      
            
          });
          const json=await response.json();
          console.log(json);
          if(json.success==true)
          {
            localStorage.setItem('token',json.auth_token);
            props.showAlert("SignedUp Successfully","success")
            navigate('/');
          }
          else
          {
            props.showAlert("Enter Valid Credentials","danger")
          }
            
          
    }
  return (
    <div>
      <h2 className='my-3'> SignUp to continue with iNoteBook.... </h2>
      <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" name="name" id="name" onChange={onChange} minLength={5} required    aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email</label>
    <input type="email" className="form-control" name="email" id="email"onChange={onChange}  aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" name="password" onChange={onChange} minLength={5} required  id="password"/>
  </div>
  <div className="mb-3">
    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
    <input type="password" className="form-control" name="cpassword"onChange={onChange}  id="cpassword"/>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default SignUp
