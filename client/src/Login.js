import React from "react";
import './App.css';
import logo from './logo.svg';
import { NavLink,useNavigate } from "react-router-dom";
import axios from "axios";
import jwt from 'jsonwebtoken';

const Home=()=>{
    return(
        <h1>Homepage</h1>
    )
}

const Login=()=>{
  const [email,setEmail]=React.useState('');
  const [password,setPassword]=React.useState('');
  const [error,setError]=React.useState('');
  const History=useNavigate();

  const handleSubmit=async (event)=>{
    event.preventDefault();
    const body={
      email,
      password
    };
    const response= await axios.post('http://localhost:8085/api/login',body);
    console.log(response);
    if(response.data.success){
      window.alert(response.data.message);
      History('/');
    }else{
      setError(response.data.message);
    }

  }

    return(
    <div className="App">
    <div className='inputform'>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h4>Welcome!</h4>
      </header>
      <form onSubmit={handleSubmit}>
      <div>
      <lable htmlFor="email" className="formtext">Email &nbsp;</lable>
      <input className="email" type="text" placeholder='Enter the email' required onChange={(e)=>{setEmail(e.target.value)}}></input>
      </div>
      <br></br>
      <div>
      <lable htmlFor="password" className="formtext">Password &nbsp;</lable>
      <input className="password" type="password" placeholder='Enter the Password' required onChange={(e)=>{setPassword(e.target.value)}}></input>
      </div>
      <div className='submission'>
      <button type='submit'>Login</button>
      </div>
      <p>Don't have a account</p><a className='link'><NavLink to='/register'>Create account!</NavLink></a>
      { error!=='' &&<p className='error'>{error}</p>}
      </form>
      </div>
      </div>
    );
}

export {Login,Home};
