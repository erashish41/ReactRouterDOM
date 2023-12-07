import "./App.css";
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainHeader from './MainHeader'
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Error from './Error';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element ={<MainHeader/>}>
          <Route index element = {<Home/>} />
          <Route path = "/about" element = {<About/>}/>
          <Route path = "/contact" element = {<Contact/>}/>
          <Route path= "*" element = {<Error/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App