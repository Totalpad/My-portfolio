import React from 'react'
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import EmailIcon from "@mui/icons-material/Email"
import GithubIcon from "@mui/icons-material/GitHub"
import "../styles/Home.css"
import photo from "../assets/npphoto.jpg"
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import react from '../assets/react.png'
import git from '../assets/git.png'





function Home() {
  return (
    <div className='home'>
      <div className='about'>
        
        <img src={photo} alt='photo' />
        <h2>Hi, I am Nikita</h2>
        <div className='prompt'>
          <p>A React Front-End Developer with a passion for learning and creating.</p>
        <LinkedInIcon />
        <EmailIcon />
        <GithubIcon />
        
        </div>
      
      </div>

      <div className='skills'> 
      <h1>Skills</h1>
      <ol className='list'>
        <li className='item'>
          <h2>Front-End</h2>
        </li>
      </ol>
      <span className='icons'> 
            <img src={html} alt='html'/>
            <img src={css} alt='css'/>
            <img src={js} alt='js'/>
            <img src={react} alt='react'/>
            <img src={git} alt='git'/>
            </span>
      </div>
    </div>
  )
}

export default Home
