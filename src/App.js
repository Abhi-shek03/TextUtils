import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import React, { useState } from 'react';
import Alert from './Components/Alert'
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


function App() {

  const [mode, setmode] = useState('light');

  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) =>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null)
      }, 2000);
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = '#282828'
      showAlert('Dark mode has been enabled','success')
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white'
      showAlert('Light mode has been enabled','success')
    }
  } 
  return (
    <>
    <BrowserRouter>
      <Navbar Title = 'TextUtils' Home = 'Home' About = 'About Us' mode = {mode} toggleMode = {toggleMode}/>
      <Alert alert = {alert}/>
      <div className='container my-3' >
      <Routes>
          <Route exact path="/about" element={<About mode = {mode}/>}>
          </Route>
          <Route exact path="/" element={<TextForm Heading='Enter the text to analyze' showAlert = {showAlert} mode = {mode}/>}>
          </Route>
      </Routes>  
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;

