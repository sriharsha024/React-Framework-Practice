import './App.css'

function App() {

  const name="K Sri Harsha Royal";
  const profession="Full Stack Developer";
  const projects=[
    {
       title : "Bank Application",
       descrption:" A backend application using spring boot and spring security. ",
       link:"#"
    },
    {
      title : "Quiz Application",
      descrption:" A backend application using spring boot. ",
      link:"#"
   },
   {
    title : "Ecommerce Application",
    descrption:" A web application built using React,spring boot and spring security. ",
    link:"#"
  }
   
  ]
   
  return (
    <div className='App'>
      {/* Header section */}
      <header className='header'>
        <h1>{name}</h1>
        <p>{profession}</p>
        <nav>
          <a href='#about'>About</a>
          <a href='#projects'> Projects</a>
          <a href='#contact'> Contact</a>
        </nav>
      </header>
      {/* About section*/}
      <section id='about' className='about-section'>
        <h2>About</h2>
        <p>Hello, I am {name}, passionate {profession}. I love building web applications.</p>
      </section>

      {/* Projects section */}
      <section id='projects' className='project-section'>
         <h2>Projects</h2>
         <div className='project-list'>
          {projects.map((project, index) => (
            <div key={index} className='project-item'>
            <h3>{project.title}</h3>
            <p>{project.descrption}</p> {/* Correct the typo: descrption -> description */}
            <a href={project.link} target='_blank' rel='noopener noreferrer'>
                View Project
            </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact section*/}
      <section id='contact' className='contact-section'>
        <h2>Contact me</h2>
        <p>If you would like to get in touch, feel free to email me at<a href='mailto:harsha@gmail.com'> harsha@gmail.com</a> </p>
      </section>

      {/*Footer section */}
      <footer id='footer' className='footer-section'>
        <p> @2025. All Right reserved</p>
      </footer>

    </div>
  )
}

export default App
