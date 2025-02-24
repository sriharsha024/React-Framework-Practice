import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      setDarkMode(JSON.parse(savedMode));
      document.documentElement.classList.toggle('dark', JSON.parse(savedMode));
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', JSON.stringify(newMode));
    document.documentElement.classList.toggle('dark', newMode);
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl text-center w-full max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold mb-4 dark:text-white">Welcome</h1>
        <p className="mb-4 text-lg dark:text-gray-300">
          This is a simple example with Tailwind CSS and Dark Mode.
        </p>
        <ul className="list-none mt-8 flex justify-center gap-6">
          <li className="bg-custom-red text-white p-4 rounded-lg w-40 text-center">
            Item 1
          </li>
          <li className="bg-custom-red text-white p-4 rounded-lg w-40 text-center">
            Item 2
          </li>
          <li className="bg-custom-red text-white p-4 rounded-lg w-40 text-center">
            Item 3
          </li>
        </ul>
        <button
          className="bg-custom-green text-white px-6 py-3 rounded-full mt-6"
          onClick={toggleDarkMode}
        >
          Toggle Dark Mode
        </button>
      </div>
    </div>
  );
}

export default App;
