import React from 'react';
import './About.css';

function About() {
  const name = "K Sri Harsha Royal";
  const profession = "Full Stack Developer";
  const description = "I love building web applications and have a strong passion for learning new technologies. With a background in both front-end and back-end development, I strive to create seamless and efficient user experiences.";

  return (
    <section id='about' className='about-section'>
      <h2>About Me</h2>
      <p>Hello, I am {name}, a passionate {profession}. {description}</p>
      <p>In my free time, I enjoy contributing to open-source projects, exploring new programming languages, and staying updated with the latest industry trends.</p>
    </section>
  );
}

export default About;