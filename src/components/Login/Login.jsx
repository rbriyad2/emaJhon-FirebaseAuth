import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import googleIcon from '../../images/google_300221.png';
import githubIcon from '../../images/github_733609.png';
import './Login.css';

const Login = () => {
  const {signIn, googleSignIn, githubSignIn}= useContext(AuthContext)
const navigate = useNavigate()
const location = useLocation()
console.log(location)

const from = location.state?.from?.pathname || '/';
    const handleLogin = event =>{
      event.preventDefault()
        const email = event.target.email.value;
        const password =event.target.password.value;
        console.log(email , password)

        signIn(email , password)
        .then( result=>{
         const loggedUser= result.user;
          console.log(loggedUser)
          event.target.reset()
          navigate(from, { replace: true })
        })
        .catch(error=>{
          console.log(error)
        })
    }

    const handleGoogleLogin =()=>{
      googleSignIn()
      .then(result=>{
        const loguser= result.user;
        console.log(loguser)
      })
      .catch(error=>{
        console.log(error.message)
      })
      navigate(from, { replace: true })
    }
    const handleGithubLogin =()=>{
      githubSignIn()
      .then(result=>{
        const loguser= result.user;
        console.log(loguser)
      })
      .catch(error=>{
        console.log(error.message)
      })
      navigate(from, { replace: true })
    }


    return (
        <div className="signuppage">
      <div className="container">
        <div className="signupbox">
            <h2>Login Your Account</h2>
          <form onSubmit={handleLogin}>
            <div className="form-control">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" required />
            </div>
            <div className="form-control">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" required/>
            </div>
            <button type='submit' className="submitbtn">Login</button>
          </form>
          <p>New t Ema-Jhon ? <Link to='/signup'> Create an Account</Link></p>
          <div className="otherLogin">
            <img onClick={handleGoogleLogin} src={googleIcon} alt="" />
            <img onClick={handleGithubLogin} src={githubIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
    );
};

export default Login;