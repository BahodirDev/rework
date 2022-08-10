import React, { useState } from "react";
import "../styles/login.css";
import {Link, useNavigate} from 'react-router-dom';
import M from 'materialize-css';
import {useDispatch} from 'react-redux'
function Login(props) {


  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate();

  const dispatch = useDispatch()


  function LoginUser(e){
    // eslint-disable-next-line
    e.preventDefault();
    fetch('http://localhost:5000/signin',{
      method:'post',
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        username:email,
        password
      })
    })
    .then(data=>data.json())
    .then(result=>{
      if(result.error){
        M.toast({html:result.error,classes:"red"})
      }else{

        M.toast({html:"Muvaffaqiyatli amalga oshirildi",classes:'green'});
        localStorage.setItem("jwt",result.token);
        localStorage.setItem("user",JSON.stringify(result.user));
        dispatch({type:'PENDING',payload:JSON.parse(localStorage.getItem('user'))});
        console.log('birinchi',result);
        navigate('/')
      }
    })
  }

  return (
   <div className="body">
       <div className="containerr">
        <div className="front_card">
        <form action="#" className="login_form">
          <input
            type="text"
            className="user_email"
            placeholder="Username"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <input
            type="password"
            className="user_password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
          <button className="login_btn" onClick={LoginUser}>LogIn</button>
        </form>
        <form action="#" className="signup_form">
          <input type="text" className="user_full_name" placeholder="Full Name" />
          <input type="email" className="user_email" placeholder="Email" />
          <input type="password" className="user_password" placeholder="Password" />
          <button className="login_btn">SignUp</button>
        </form>
      </div>
      <div className="back_card">
        <div className="login_msg">
          <h2>Have account?</h2>
          <button className="login_msg_btn">LogIn</button>
        </div>
        <div className="signup_msg">
          <h4>Account yo'qmi..?</h4>
            <Link to={'/signup'}>
          <button className="signup_msg_btn " style={{marginTop:'5px'}}>
          Ro'yhatdan o'tish
          </button>
            </Link>
        </div>
      </div>
    </div>
   </div>
  );
}

export default Login;
