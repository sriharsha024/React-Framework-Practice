import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: "Bank Application",
      description: "A backend application using Spring Boot and Spring Security.",
      link: "#"
    },
    {
      title: "Quiz Application",
      description: "A backend application using Spring Boot.",
      link: "#"
    },
    {
      title: "Ecommerce Application",
      description: "A web application built using React, Spring Boot, and Spring Security.",
      link: "#"
    }
  ];

  return (
    <section id='projects' className='project-section'>
      <h2>Projects</h2>
      <div className='project-list'>
        {projects.map((project, index) => (
          <div key={index} className='project-item'>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target='_blank' rel='noopener noreferrer'>
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;