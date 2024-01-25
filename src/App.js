import React from "react";
import Navbar from './Navbar/navbar';
import Home from "./Home/home";
import {Routes, Route} from 'react-router-dom';
import ParticlesBg from "./Components/Particles";
import AnimCursor from "./Cursor/CircleCursor";

const App = () => {
  return (
    <React.Fragment>
      <ParticlesBg/>
      <Navbar/>
      <Routes>
        <Route to='/' element={<Home/>}/>
      </Routes>
    </React.Fragment>
  );
}

export default App;
