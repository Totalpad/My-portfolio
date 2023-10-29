import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";
import "../styles/Home.css";
import PhotoCard from "../components/PhotoCard";
import photo from "../assets/npphoto.jpg";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import git from "../assets/git.png";

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
        </span>

        {/* <span className="icons">
          <img src={html} alt="html" />
          <img src={css} alt="css" />
          <img src={js} alt="js" />
          <img src={react} alt="react" />
          <img src={git} alt="git" />
        </span> */}
      </div>
    </div>
  );
}

export default Home;
