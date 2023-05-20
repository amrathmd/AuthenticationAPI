import React from 'react';
import {useState, useEffect} from 'react';
import {NavLink,useNavigate} from 'react-router-dom';
import axios from 'axios';
import '../style.css'
import logo from '../../logo.svg'


const Register=()=>{
    const [username,setUsername]=React.useState('');
    const [email,setEmail]=React.useState('');
    const [password,setPassword]=React.useState('');
    const [repeat_password,setRepeat]=React.useState('');
    const [error,setError]=React.useState('');
    const History=useNavigate();
    useEffect(()=>{
      setError('');
    },[]);

    const handleRegister=async (event: any )=>{
      event.preventDefault();
      setError('');

      const body={
        username: username,
        email: email,
        password: password,
      };
      if(repeat_password !== password){
          setError('Check confirmation password');
          return;
      }
      

      const response=(await axios.post('http://localhost:8085/api/register',body));
      if(!response.data.success) {
        setError(response.data.message);
        return;
      }
      else{
        window.alert('Registered Successful');
        History('/login');
      }
    
  
    }

    
    return(
        <div className='App'>
    <div className="register-form">
  <h2>Register</h2>
  <form onSubmit={handleRegister}>
  <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h4>Welcome!</h4>
      </header>
    <div className="form-group">
      <label htmlFor="email">Email</label>
      <input type="email" id="email" placeholder="Enter your email" onChange={(e)=>{setEmail(e.target.value);}} required></input>
    </div>
    <div className="form-group">
      <label htmlFor="username">Username</label>
      <input type="text" id="username" placeholder="Enter your username" required onChange={(e)=>{setUsername(e.target.value)}}></input>
    </div>
    <div className="form-group">
      <label htmlFor="password">Password</label>
      <input type="password" id="password" placeholder="Enter your password" required onChange={(e)=>{setPassword(e.target.value)}}></input>
    </div>
    <div className="form-group">
      <label htmlFor="repeat_password">Confirm Password</label>
      <input type="text" id="repeat_password" placeholder="Confirm Password" required onChange={(e)=>{setRepeat(e.target.value)}}></input>
    </div>
    <button type="submit" className='button'>Register</button>
    <p>Already have an account </p><a className="link"><NavLink to='/login'>Login!</NavLink></a>
    { error!=='' &&<p className='error'>{error}</p>}
  </form>
  
</div>
</div>

    )
}
export default Register;