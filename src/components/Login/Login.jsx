import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import googleIcon from '../../images/google_300221.png';
import githubIcon from '../../images/github_733609.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './Login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

  const {signIn, googleSignIn, githubSignIn}= useContext(AuthContext)
const navigate = useNavigate()
const location = useLocation()
const [error, setError]= useState('')


const from = location.state?.from?.pathname || '/';
    const handleLogin = event =>{
      event.preventDefault()
        const email = event.target.email.value;
        const password =event.target.password.value;
       

        signIn(email , password)
        .then( result=>{
         const loggedUser= result.user;
          console.log(loggedUser)
          event.target.reset()
          navigate(from, { replace: true })
        })
        .catch(error=>{
          setError(error.message)
        })
        toast.success('Login Successfull', {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
    }

    const handleGoogleLogin =()=>{
      googleSignIn()
      .then(result=>{
        const loguser= result.user;
        console.log(loguser)
      })
      .catch(error=>{
        setError(error.message)
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
        setError(error.message)
      })
      navigate(from, { replace: true })
    }

    const [show, setShow]= useState(false)
    const handleshowPassword=()=>{
      setShow(!show)
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
              <input id='passwordinput' type={show ? 'password' : 'text'} name="password" required/>
              {show? <FontAwesomeIcon onClick={handleshowPassword} icon={faEyeSlash} id='eyeoff'/> : <FontAwesomeIcon onClick={handleshowPassword} icon={faEye} id='eyeoff'/> }
            </div>
            <p id="errortext">{error}</p>
            <button type='submit' className="submitbtn">Login</button>
          </form>
          <ToastContainer />
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