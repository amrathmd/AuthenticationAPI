import React from 'react';
import './App.css';
import logo from './logo.svg';
import {NavLink} from 'react-router-dom';

const Navbar=()=>{
    return(
        <div>
        <ul className='List'>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/login'>Login</NavLink></li>
            <li><NavLink to='/register'>Register</NavLink></li>
        </ul>
    </div>
    )
}
export default Navbar;