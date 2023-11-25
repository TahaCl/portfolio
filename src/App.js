import React from "react";
import Navbar from './navbar';
import Home from "./home";
import {Routes, Route} from 'react-router-dom';
import AnimCursor from "./CircleCursor";

const App = () => {
  return (
    <React.Fragment>
      <AnimCursor/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </React.Fragment>
  );
}

export default App;
