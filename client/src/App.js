import './App.css';
import React from 'react';
import Register from './Register';
import {Login,Home} from './Login';
import Navbar from './Navbar';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  ); 
}

export default App;
