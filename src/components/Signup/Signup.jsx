import React, { useContext, useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {

  const {createUser}= useContext(AuthContext)

  const [error, setError]= useState('')
  
  const handleSingUp = event =>{
    setError('')
    event.preventDefault()
    const emailField = event.target.email.value;
    const passwordField =event.target.password.value;
    const confirmField =event.target.confirm.value;

    if(passwordField !==confirmField){
      setError("Password didn't Match")
      return
    }
    else if(passwordField < 6){
      setError('Password Must be 6 Characters or longer')
      return
    }

    createUser(emailField , passwordField)
    .then((result)=>{
    const newUser = result.user;
      event.target.reset()
      toast.success('SignUp Successfull', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    })
    .catch(error =>{
      setError(error.message)
    })

  
  }

  const [show, setShow]= useState(true)
  const handleshowPassword=()=>{
    setShow(!show)
  }
  return (
    <div className="signuppage">
      <div className="container">
        <div className="signupbox">
          <form onSubmit={handleSingUp}>
            <h2>Sign Up</h2>
            <div className="form-control">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" required />
            </div>
            <div className="form-control">
              <label htmlFor="password">Password</label>
              <input type={show ? 'password' : 'text'} name="password" required/>
            </div>
            <div className="form-control">
              <label htmlFor="confirm">Confirm Password</label>
              <input type={show ? 'password' : 'text'} name="confirm" required/>
              {show? <FontAwesomeIcon onClick={handleshowPassword} icon={faEyeSlash} id='eyeoff'/> : <FontAwesomeIcon onClick={handleshowPassword} icon={faEye} id='eyeoff'/> }
            </div>
            <p id="errortext">{error}</p>
            <button type="submit" className="submitbtn" value='sign up'>Sign Up</button>
          </form>
          <ToastContainer />
          <p>Already have an account ? <Link to='/login'> Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
<h2>Signup Page</h2>;
