import React, { useContext } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Signup = () => {

  const {createUser}= useContext(AuthContext)

  const handleSingUp = event =>{
    event.preventDefault()
    const emailField = event.target.email.value;
    const passwordField =event.target.password.value;
    const confirmField =event.target.confirm.value;

    createUser(emailField , passwordField, confirmField)
    .then((result)=>{
    const newUser = result.user
      console.log(newUser)
      event.target.reset()
    })
    .catch(error =>{
      console.log(error)
    })
  
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
              <input type="password" name="password" required/>
            </div>
            <div className="form-control">
              <label htmlFor="confirm">Confirm Password</label>
              <input type="password" name="confirm" required/>
            </div>
            <button type="submit" className="submitbtn" value='sign up'>Sign Up</button>
          </form>
          <p>Already have an account ? <Link to='/login'> Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
<h2>Signup Page</h2>;
