import React, { Component } from 'react';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';

const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;


function App() {
  return ( 
    <BrowserRouter>
      <div>        
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>about</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
   );
}

export default App;