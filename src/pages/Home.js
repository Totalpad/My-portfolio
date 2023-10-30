import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";
import "../styles/Home.css";
import PhotoCard from "../components/PhotoCard";
import photo from "../assets/npphoto.jpg";
import html from "../assets/html.webp";
import css from "../assets/css.webp";
import js from "../assets/js.webp";
import react from "../assets/react.webp";
import git from "../assets/git.webp";
import vite from "../assets/vite.png";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <img src={photo} alt="my photo" />
        <h2>Hi 👋, I am Nikita</h2>
        <div className="prompt">
          <p>A React Front-End Developer 👨‍💻.</p>
          <a
            href="https://www.linkedin.com/in/nikita-perehudov/"
            target="_blank"
          >
            <LinkedInIcon />
          </a>
          <a href="mailto:perehudovnikita@gmail.com" target="_blank">
            <EmailIcon />
          </a>
          <a
            href="https://github.com/Totalpad?tab=repositories"
            target="_blank"
          >
            <GithubIcon />
          </a>
        </div>
      </div>

      <div className="skills">
        <h1>Skills 🛠</h1>
        
        <span className="icons">
          <PhotoCard img={html} />
          <PhotoCard img={css} />
          <PhotoCard img={js} />
          <PhotoCard img={react} />
          <PhotoCard img={git} />
          <PhotoCard img={vite}/>
        </span>
      </div>
    </div>
  );
}

export default Home;
