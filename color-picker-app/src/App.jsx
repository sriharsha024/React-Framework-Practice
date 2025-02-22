import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('#ffffff');
  const [colorName, setColorName] = useState('White');

  const colors = [
    { hex: '#FF5733', name: 'Red' },
    { hex: '#33FF57', name: 'Green' },
    { hex: '#3357FF', name: 'Blue' },
    { hex: '#FF33A1', name: 'Pink' },
    { hex: '#A133FF', name: 'Purple' },
    { hex: '#33FFF5', name: 'Cyan' },
    { hex: '#FF8C33', name: 'Orange' },
    { hex: '#8CFF33', name: 'Lime' },
    { hex: '#FFD700', name: 'Gold' },
    { hex: '#33FF8C', name: 'Mint' }
  ];

  const handleColorChange = (colorOption) => {
    setColor(colorOption.hex);
    setColorName(colorOption.name);
  };

  const handleCustomColorChange = (e) => {
    setColor(e.target.value);
    setColorName(e.target.value);
  };

  return (
    <div className="app-container" style={{ backgroundColor: color }}>
      <h1>Color Picker App</h1>
      <div className="color-picker">
        {colors.map((colorOption) => (
          <button
            key={colorOption.hex}
            className="color-button"
            style={{ backgroundColor: colorOption.hex }}
            onClick={() => handleColorChange(colorOption)}
          />
        ))}
      </div>
      <input
        type="color"
        value={color}
        onChange={handleCustomColorChange}
        className="color-input"
      />
      <div className="color-display">
        <p>Selected Color: {colorName}</p>
      </div>
    </div>
  );
}

export default App;
