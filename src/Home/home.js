import React, { useState } from "react";
import { FaGithub, FaInstagram, FaTwitter, FaLinkedin, FaHtml5, FaCss3Alt, FaReact, FaNode} from "react-icons/fa";
import {IoLogoJavascript} from 'react-icons/io';
import {SiExpress, SiMongodb, SiStyledcomponents} from 'react-icons/si';
import { useRef } from "react";
import './home.css';
export const HomeContext = React.createContext();
const Home = (props) => {
    const [hoverProj,setHoverProj] = useState(false);
    const [hoverProj1,setHoverProj1] = useState(false);
    const [hoverProj2,setHoverProj2] = useState(false);
    const ref = useRef(null);
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const handleAboutClick = () => {
        ref.current?.scrollIntoView({behavior: 'smooth'})
    }
    const handleExpertiseClick = () => {
        ref1.current?.scrollIntoView({behavior: 'smooth'})
    }
    const handleProjectsClick = () => {
        ref2.current?.scrollIntoView({behavior: 'smooth'})
    }
    return (
        <HomeContext.Provider value={{handleAboutClick,handleExpertiseClick,handleProjectsClick}}>
            {props.children}
        <main className="homePage">
            <div className="homeintroCont">
            <section className="home">
            <article className="introduction">
            <h2 className="introHeading">Taha Asif</h2>
            <h3>Web Developer</h3>
            <p>Welcome to my world, where I turn ideas into interactive wonders</p>
            <article className="socialIcons">
            <FaGithub onClick={()=>window.open('https://github.com/TahaCl', '_blank')}/>
            <FaInstagram onClick={()=>window.open('https://www.instagram.com/taha.asif1/', '_blank')}/>
            <FaTwitter onClick={()=>window.open('https://twitter.com/TahaAsi59083539/likes', '_blank')}/>
            <FaLinkedin onClick={()=>window.open('https://pk.linkedin.com/', '_blank')}/>
            </article>
            <article className="responsiveBar">
                <h6 className="aboutH6" onClick={handleAboutClick}>About</h6>
                <h6 className="expertiseH6" onClick={handleExpertiseClick}>Expertise</h6>
                <h6 className="ProjectsH6" onClick={handleProjectsClick}>Projects</h6>
            </article>
            </article>
            <div className="profilePic"/>
            </section>
            </div>
            <div className="rightContent">
            <section ref={ref} className="about">
                <h2 style={{
                    marginBottom:'1rem',
                }}>About</h2>
                <p>As of 2020, my journey into the world of programming began with a fascination for C++. The initial exposure fueled my passion, leading me to delve deeper during my A-levels. Recognizing the vast potential in web development, I conducted extensive research, discovering the dynamic market for creating functional and innovative websites. Currently a self-taught university student, I may lack extensive experience, but my commitment to mastering web development promises a fulfilling journey ahead.</p>
                <p style={{
                    marginTop:'0.7rem',
                }}>While my professional focus revolves around coding and designing, I find balance in moments away from the screen. Outside of my coding endeavors, I immerse myself in the world of music and frequently embark on walks. These activities provide the perfect backdrop for brainstorming creative solutions, allowing me to bring fresh perspectives to my web development projects.</p>
            </section>
            <div ref={ref1} style={{
                marginTop:'1rem',
                marginLeft:'1.8rem',
                zIndex:'1'
            }}>
                <h2>Expertise</h2>
            </div>
            <section className="expertise">
                <article className="expIcon">
                    <FaHtml5 className="expertiseIcons"/>
                    <h5>HTML</h5>
                </article>
                <article>
                    <FaCss3Alt className="expertiseIcons"/>
                    <h5>CSS</h5>
                </article>
                <article className="expIcon">
                    <IoLogoJavascript className="expertiseIcons"/>
                    <h5>JS</h5>
                </article>
                <article className="expIcon">
                    <FaReact className="expertiseIcons"/>
                    <h5>React</h5>
                </article>
                <article className="expIcon">
                    <FaNode className="expertiseIcons"/>
                    <h5>Node</h5>
                </article>
                <article className="expIcon">
                    <SiExpress className="expertiseIcons"/>
                    <h5>Express</h5>
                </article>
                <article className="expIcon">
                    <SiMongodb className="expertiseIcons"/>
                    <h5>MongoDB</h5>
                </article>
                <article className="expIcon">
                    <SiStyledcomponents className="expertiseIcons"/>
                    <h5 style={{
                        display:'flex',
                        flexWrap:'wrap',
                        width:'130px'
                    }}>Styled Components</h5>
                </article>
            </section>
            <div ref={ref2} style={{
                marginTop:'1rem',
                marginLeft:'1.8rem',
            }}>
                <h2>Projects</h2>
            </div>
            <section onMouseOut={()=>{
                    setHoverProj(false);
                    setHoverProj1(false);
                    setHoverProj2(false);
                }}  className="projects">
                <article className='indvidualProject'>
                    <div onMouseOver={()=>setHoverProj(true)} className={hoverProj ? 'hoverProjectImg' : 'projectImg'}></div>
                    <button onMouseOver={()=>setHoverProj(true)} onClick={()=>window.open('https://github.com/TahaCl/ecommerce', '_blank')} className={hoverProj ? 'hover' : 'notHover'}>View Code In Github</button>
                </article>
                <article className="indvidualProject">
                    <div onMouseOver={()=>setHoverProj1(true)} className={hoverProj1 ? 'hoverProjectImg' : 'projectImg1'}></div>
                    <button onMouseOver={()=>setHoverProj1(true)} onClick={()=>window.open('https://github.com/TahaCl/delivery', '_blank')} className={hoverProj1 ? 'hover' : 'notHover'}>View Code In Github</button>
                </article>
                <article className="indvidualProject">
                    <div onMouseOver={()=>setHoverProj2(true)} className={hoverProj2 ? 'hoverProjectImg' : 'projectImg2'}></div>
                    <button onMouseOver={()=>setHoverProj2(true)} onClick={()=>window.open('https://github.com/TahaCl/booking', '_blank')} className={hoverProj2 ? 'hover' : 'notHover'}>View Code In Github</button>
                </article>
            </section>
            <section className="footer">
                <p style={{
                    width:'90%',
                    zIndex:'1',
                }}>Loosely designed and coded in Visual Studio Code by yours truly. Built with React.js and CSS, deployed with Netlify.</p>
            </section>
            </div>
        </main>
        </HomeContext.Provider>
    )
}
export default Home;