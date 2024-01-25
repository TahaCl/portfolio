import React, { useContext, useState } from "react";
import {FaBars} from 'react-icons/fa';
import { HomeContext } from "../Home/home";
import "./navbar.css";

const Navber = () => {
    const value = useContext(HomeContext);
    const [toggle,setToggle] = useState(false);
    return (
        <div className="navbar">
            <h2 className="compHeading">TAHA</h2>
            <ul className={toggle ? 'hideLinksContainer' : 'linksContainer'}>
                <li className="links"><a onClick={()=>window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}>home</a></li>
                <li className="links"><a onClick={value.handleAboutClick}>about</a></li>
                <li className="links"><a onClick={value.handleExpertiseClick}>expertise</a></li>
                <li className="links"><a onClick={value.handleProjectsClick}>projects</a></li>
            </ul>
            <FaBars className="toggleBtn" onClick={()=>setToggle(!toggle)}/>
        </div>
    )
}
export default Navber;