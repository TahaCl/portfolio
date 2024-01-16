import React, { useState } from "react";
import { FaGithub, FaInstagram, FaTwitter, FaLinkedin, FaHtml5, FaCss3Alt, FaReact, FaNode, FaExternalLinkAlt} from "react-icons/fa";
import {IoLogoJavascript} from 'react-icons/io';
import {SiExpress, SiMongodb, SiStyledcomponents} from 'react-icons/si';
import './home.css';

const Home = () => {
    const [hoverProj,setHoverProj] = useState(false);
    return (
        <main className="homePage">
            <div className="homeintroCont">
            <section className="home">
            <article className="introduction">
            <h2 className="introHeading">Taha Asif</h2>
            <h3>Web Developer</h3>
            <p>Welcome to my world, where I turn ideas into interactive wonders</p>
            <article className="socialIcons">
            <FaGithub onClick={()=>window.open('https://github.com/TahaCantLose', '_blank')}/>
            <FaInstagram onClick={()=>window.open('https://www.instagram.com/taha.asif1/', '_blank')}/>
            <FaTwitter onClick={()=>window.open('https://twitter.com/TahaAsi59083539/likes', '_blank')}/>
            <FaLinkedin onClick={()=>window.open('https://pk.linkedin.com/', '_blank')}/>
            </article>
            <article className="responsiveBar">
                <h6 onClick={()=>window.scrollTo(0,0)}>About</h6>
                <h6 onClick={()=>window.scrollTo(0,310)}>Expertise</h6>
                <h6 onClick={()=>window.scrollTo(0,721)}>Projects</h6>
            </article>
            </article>
            <div className="profilePic"/>
            </section>
            </div>
            <div className="rightContent">
            <section className="about">
                <h2 style={{
                    marginBottom:'1rem',
                }}>About</h2>
                <p>As of 2020, my journey into the world of programming began with a fascination for C++. The initial exposure fueled my passion, leading me to delve deeper during my A-levels. Recognizing the vast potential in web development, I conducted extensive research, discovering the dynamic market for creating functional and innovative websites. Currently a self-taught university student, I may lack extensive experience, but my commitment to mastering web development promises a fulfilling journey ahead.</p>
                <p style={{
                    marginTop:'0.7rem',
                }}>While my professional focus revolves around coding and designing, I find balance in moments away from the screen. Outside of my coding endeavors, I immerse myself in the world of music and frequently embark on walks. These activities provide the perfect backdrop for brainstorming creative solutions, allowing me to bring fresh perspectives to my web development projects.</p>
            </section>
            <div style={{
                marginTop:'1rem',
                marginLeft:'1.8rem',
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
            <div style={{
                marginTop:'1rem',
                marginLeft:'1.8rem',
            }}>
                <h2>Projects</h2>
            </div>
            <section className="projects">
                <article onMouseLeave={()=>setHoverProj(false)} className='indvidualProject'>
                    <div onMouseOver={()=>setHoverProj(true)} className={hoverProj ? 'hoverProjectImg' : 'projectImg'}></div>
                    <FaExternalLinkAlt className={hoverProj ? 'hover' : 'notHover'} />
                </article>
                <article className="indvidualProject">
                    <div onMouseOver={()=>setHoverProj(true)} className={hoverProj ? 'hoverProjectImg' : 'projectImg1'}></div>
                    <FaExternalLinkAlt className={hoverProj ? 'hover' : 'notHover'} />
                </article>
                <article className="indvidualProject">
                    <div onMouseOver={()=>setHoverProj(true)} className={hoverProj ? 'hoverProjectImg' : 'projectImg2'}></div>
                    <FaExternalLinkAlt className={hoverProj ? 'hover' : 'notHover'} />
                </article>
            </section>
            <section className="footer">
                <p style={{
                    width:'90%'
                }}>Loosely designed and coded in Visual Studio Code by yours truly. Built with React.js and CSS, deployed with Vercel.</p>
            </section>
            </div>
        </main>
    )
}
export default Home;