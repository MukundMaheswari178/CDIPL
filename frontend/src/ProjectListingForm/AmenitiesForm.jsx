import React, { useState } from 'react';
import axios from 'axios';
import './AmenitiesForm.css';
import { useNavigate, useParams } from 'react-router-dom';
import Topbar from '../scenes/global/Topbar';
import Sidebar from '../scenes/global/Sidebar';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../theme";
import config from '../config';

const AmenitiesForm = () => {
  const { tittle } = useParams(); // Use useParams to get the project tittle
  const [formData, setFormData] = useState({
    petArea: false,
    restaurant:false,
    gym: false,
    swimmingPool: false,
    parking: false,
    garden: false,
    clubhouse: false,
    security: false,
    tennisCourt: false,
    squashCourt: false,
    atms: false,
    cctv: false,
    centralWifi: false,
    multiplex: false,

    greenArea: false,
    barbequeArea: false,
    golfCourse: false,
    intercom: false,
    balcony: false,
    jacuzzi: false,
    fireFightingSystems	: false,
  

    // Add more amenities as needed
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const [step, setStep] = useState(1); // Tracks the current step of the form
  

  // Handle change for each checkbox
  const handleChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    try {
      // Post amenities data
      const response = await axios.post(`${config.baseURL}/amenities/${tittle}`, formData);
      
      if (response.data.success) {
        setMessage('Amenities submitted successfully');
          // Navigate to the upload form with the project title after successful submission
          navigate(`/upload/${tittle}`);
      }
    } catch (error) {
      setError('Error submitting amenities: ' + error.response?.data?.message || error.message);
    }
  };

  return (

    
    <div>
        
  
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <Sidebar isSidebar={isSidebar} />
            <main className="content">
              <Topbar setIsSidebar={setIsSidebar} />
    <div className="amenities-container">
      <h2 style={{color:"black"}}>Submit Amenities</h2>
      <form onSubmit={handleSubmit}>
        {Object.keys(formData).map((amenity) => (
          <div className="amenities-mb-3" key={amenity}>
            <label className="amenities-form-label">
              <input
                type="checkbox"
                name={amenity}
                checked={formData[amenity]}
                onChange={handleChange}
              />
              {amenity.charAt(0).toUpperCase() + amenity.slice(1)}
            </label>
          </div>
        ))}
        <button type="submit" className="amenities-btn amenities-btn-primary">Submit Amenities</button>
      </form>

      {message && <p className="success-message">{message}</p>}
      {error && <p className="error-message">{error}</p>}
    </div>

    
    </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
      </div>
  );
};

export default AmenitiesForm;
