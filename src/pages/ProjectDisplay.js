import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/ProjectDisplay.css";
import PreviewIcon from "@mui/icons-material/Preview";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <>
      <div className="project">
        <h1>{project.name}</h1>
        <h3 className="description">{project.description}</h3>
        <img src={project.image}  alt="project.name"/>
        <p>
          <b>Skills:</b> {project.skills}
        </p>
      </div>
      <div className="icons">
        <a href={project.git} target="_blank">
          <GitHubIcon />{" "}
        </a>
        <a href={project.link} target="_blank">
          <PreviewIcon />
        </a>
      </div>
    </>
  );
}

export default ProjectDisplay;
