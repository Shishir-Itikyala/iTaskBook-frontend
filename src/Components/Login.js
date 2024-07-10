import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";

const Login = (props) => {
    const [credentails,setCredentials] =useState({email:"",password:""});
    const navigate = useNavigate();
    const onChange=(e)=>{
        setCredentials({...credentails, [e.target.name]:e.target.value})
    }
    const handleSubmit= async (e)=>{
        e.preventDefault();
        const response = await fetch(`https://inotebook-backend-u6ju.onrender.com/api/auth/login/`, {
            method: "POST",
      
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({email:credentails.email,password:credentails.password }),
      
            
          });
          const json=await response.json();
          console.log(json);
          if(json.success)
          {
            localStorage.setItem('token',json.auth_token);
            props.showAlert("LoggedIn Successfully","success");
            navigate('/');
          }
          else
          {
            props.showAlert("Invalid Credentails","danger");
          }
    }
  return (
    
    <div>
      <h2 className='my-3'> Login to continue with iTaskBook.... </h2>
      <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" onChange={onChange} name="email" id="email" aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" onChange={onChange} name="password" id="password"/>
  </div>
  
  <button type="submit" className="btn btn-primary" >Submit</button>
</form>
    </div>
  )
}

export default Login
