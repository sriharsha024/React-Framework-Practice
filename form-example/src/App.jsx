import { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    text: 'N/A',
    checkbox: false,
    radio: 'N/A',
    select: 'N/A'
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  return (
    <div className="app-container">
      <h1>Form Example</h1>
      <form>
        <div>
          <label>
            Text Input:
            <input
              type="text"
              name="text"
              placeholder="Enter your name"
              value={formData.text === 'N/A' ? '' : formData.text}
              onChange={handleChange}
              onBlur={(e) => {
                if (e.target.value === '') {
                  setFormData({ ...formData, text: 'N/A' });
                }
              }}
            />
          </label>
        </div>
        <div>
          <label>
            <strong>Checkbox:</strong>
            <input
              type="checkbox"
              name="checkbox"
              checked={formData.checkbox}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <strong>Radio:</strong>
          <label>
            Option 1:
            <input
              type="radio"
              name="radio"
              value="option1"
              checked={formData.radio === 'option1'}
              onChange={handleChange}
            />
          </label>
          <label>
            Option 2:
            <input
              type="radio"
              name="radio"
              value="option2"
              checked={formData.radio === 'option2'}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            <strong>Select:</strong>
            <select
              name="select"
              value={formData.select}
              onChange={handleChange}
            >
              <option value="N/A">--Please choose an option--</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </select>
          </label>
        </div>
      </form>
      <div className="form-output">
        <h2>Form Data</h2>
        <p><strong>Text:</strong> {formData.text}</p>
        <p><strong>Checkbox:</strong> {formData.checkbox ? 'Checked' : 'Unchecked'}</p>
        <p><strong>Radio:</strong> {formData.radio}</p>
        <p><strong>Select:</strong> {formData.select}</p>
      </div>
    </div>
  );
}

export default App;