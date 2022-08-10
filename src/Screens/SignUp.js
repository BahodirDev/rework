import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../styles/signup.css';
import M from 'materialize-css';

function SignUp(props){

  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('');

  const navigate = useNavigate()


  const postData =(e)=>{
    e.preventDefault();
    fetch('http://localhost:5000/signup',{
      method:'post',
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name,
        username:email,
        password
      })
    })
    .then(result=>result.json())
    .then(data=>{
      if(data.msg){
        M.toast({html:data.msg,classes:'green'})
        navigate('/sign')
      }else{
        M.toast({html:data.error,classes:'red'})
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
              className="user_full_name"
              placeholder="Ismingiz"
              value={name}
              onChange={e=>setName(e.target.value)}
            />
            <input type="text"
              className="user_email"
              placeholder="Foydalanuvchi ismi"
              value={email}
              onChange={e=>setEmail(e.target.value)} />
            <input
              type="password"
              className="user_password"
              placeholder="Password"
              value={password}
              onChange={e=>setPassword(e.target.value)}
            />
            <button className="login_btn" onClick={postData}>Ro'yhatdan o'tish</button>
          </form>
          <form action="#" className="signup_form">
            <input
              type="email"
              className="user_email"
              placeholder="Email"
              value={email}
              onChange={e=>setEmail(e.target.value)}
            />
            <input
              type="password"
              className="user_password"
              placeholder="Password"
            />
            <button className="login_btn">LogIn</button>
          </form>
        </div>
        <div className="back_card">
          <div className="login_msg">
            <h2>Have account?</h2>
            <button className="login_msg_btn">LogIn</button>
          </div>
          <div className="signup_msg">
            <h4>Account allaqchon mavjudmi</h4>
              <Link to={"/sign"}>
            <button className="signup_msg_btn" style={{marginTop:'10px'}}>
          Kirish
            </button>
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
