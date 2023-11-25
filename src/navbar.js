import React, { useState } from "react";
import { Link } from "react-router-dom";
import {FaBars} from 'react-icons/fa'
import "./navbar.css";

const Navber = () => {
    const [toggle,setToggle] = useState(false);
    return (
        <div className="navbar">
            <h2 className="compHeading">TAHA</h2>
            <ul className={toggle ? 'hideLinksContainer' : 'linksContainer'}>
                <li className="links"><a href="/">home</a></li>
                <li className="links"><a href='/about'>about</a></li>
                <li className="links"><a href="/expertise">expertise</a></li>
                <li className="links"><a href='/projects'>projects</a></li>
            </ul>
            <FaBars className="toggleBtn" onClick={()=>setToggle(!toggle)}/>
        </div>
    )
}
export default Navber;