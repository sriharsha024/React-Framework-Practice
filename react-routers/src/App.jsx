import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";
import "./App.css";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-600 p-4 z-50">
      <ul className="flex justify-center space-x-6 text-white">
        <li className={location.pathname === "/" ? "text-yellow-500" : "text-gray-300"}>
          <Link to="/">Home</Link>
        </li>
        <li className={location.pathname === "/about" ? "text-yellow-500" : "text-gray-300"}>
          <Link to="/about">About</Link>
        </li>
        <li className={location.pathname === "/team" ? "text-yellow-500" : "text-gray-300"}>
          <Link to="/team">Team</Link>
        </li>
        <li className={location.pathname === "/contact" ? "text-yellow-500" : "text-gray-300"}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <button
        className="absolute top-2 right-8 bg-yellow-500 text-black py-2 px-4 rounded"
        onClick={() => navigate("/")}
      >
        Go Home
      </button>
    </nav>
  );
};

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('query');

  const handleButtonClick = (buttonName) => {
    navigate(`/?query=${buttonName}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-20">
      <div className="text-center">
        <h1 className="text-3xl font-bold">{query ? `Button clicked: ${query}` : 'Home'}</h1>
        <p className="mt-4">Welcome to our website! Explore our site to learn more about what we offer.</p>
        <div className="mt-6 flex justify-center space-x-4">
          <button className="bg-blue-500 text-black py-2 px-4 rounded" onClick={() => handleButtonClick('Goals')}>Goals</button>
          <button className="bg-green-500 text-black py-2 px-4 rounded" onClick={() => handleButtonClick('Mission')}>Mission</button>
          <button className="bg-red-500 text-black py-2 px-4 rounded" onClick={() => handleButtonClick('Teams')}>Teams</button>
        </div>
      </div>
    </div>
  );
};

const About = () => (
  <div className="min-h-screen flex items-center justify-center p-20">
    <div className="text-center">
      <h1 className="text-3xl font-bold">About Us</h1>
      <p className="mt-4">We are dedicated to providing the best service possible.</p>
    </div>
  </div>
);

const Team = () => (
  <div className="min-h-screen flex items-center justify-center p-20">
    <div className="text-center">
      <h2 className="text-2xl font-semibold">Meet Our Team</h2>
      <div className="mt-6 space-y-4">
        {["John Doe - CEO", "Jane Smith - CTO", "Alice Johnson - CFO"].map((member, index) => (
          <div key={index}>{member}</div>
        ))}
      </div>
    </div>
  </div>
);

const Contact = () => (
  <div className="min-h-screen flex items-center justify-center p-20">
    <div className="text-center">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <form className="mt-6 space-y-4">
        <input type="text" placeholder="Your Name" className="w-full p-2 border rounded" />
        <input type="email" placeholder="Your Email" className="w-full p-2 border rounded" />
        <textarea placeholder="Your Message" className="w-full p-2 border rounded"></textarea>
        <button className="w-full bg-blue-500 text-black py-2 rounded">Send Message</button>
      </form>
    </div>
  </div>
);

const App = () => (
  <Router>
    <Navbar />
    <div className="pt-20">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  </Router>
);

export default App;
