import React from 'react'
import ProjectItem from '../components/ProjectItem'
// import Porject1 from '../assets/project1.png';

import { ProjectList } from '../helpers/ProjectList'


import '../styles/Projects.css'

function Projects() {
  return (
    <div className='projects'>
      <h1>My Personal Projects</h1>
      <div className='projectList'>

        {ProjectList.map((project, idx) => {
          return <ProjectItem id={idx} name={project.name} image={project.image} key={project.name}/>
        })}

        

      </div>
    </div>
  )
}

export default Projects
