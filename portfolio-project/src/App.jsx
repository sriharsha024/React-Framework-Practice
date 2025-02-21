import './App.css'
import About from './components/About';
import Header from './components/Header';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {

  return (
    <div className='App'>
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
