import React from "react";
import { ErrorBoundary } from "../../components";
import Home from "../Home/Home";
import { Navbar} from "../../components"
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import { Login } from "../Login/Login";
import Register from "../Register/Register";

const Homepage = ()=>{
  return(
    <ErrorBoundary>
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router> 

    </ErrorBoundary>
  );
}
export default Homepage;