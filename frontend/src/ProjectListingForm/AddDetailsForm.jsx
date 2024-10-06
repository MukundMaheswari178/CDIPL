import React, { useState } from 'react';
import axios from 'axios';
import './AddDetailsForm.css'; // Import the CSS file
import { useNavigate, useParams } from 'react-router-dom';
import config from '../config';
import Topbar from '../scenes/global/Topbar';
import Sidebar from '../scenes/global/Sidebar';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../theme";


const AddDetailsForm = () => {
    const { tittle } = useParams(); // Use useParams to get the project tittle
  const [youtubeLink, setYoutubeLink] = useState('');
  const [description, setDescription] = useState('');
  const [locationLink, setLocationLink] = useState('');
  const [message, setMessage] = useState('');
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${config.baseURL}/add/${tittle}`, {
        youtubeLink,
        description,
        locationLink,
      });
      setMessage('Details added successfully!');
     
    } catch (error) {
      console.error(error);
      setMessage('Error adding details');
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
    <div className="additional-form-container">
      <h2 className="form-title">Add Additional Details for {tittle}</h2>
      <form className="additional-details-form" onSubmit={handleSubmit}>
        <input
          className="form-input"
          type="text"
          value={youtubeLink}
          onChange={(e) => setYoutubeLink(e.target.value)}
          placeholder="YouTube Link"
        />
        <textarea
          className="form-textarea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <input
          className="form-input"
          type="text"
          value={locationLink}
          onChange={(e) => setLocationLink(e.target.value)}
          placeholder="Location Link"
        />
        <button className="form-button" type="submit">
          Submit
        </button>
      </form>
      {message && <p className="form-message">{message}</p>}
    </div>
    </main>
    </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
    </div>
  );
};

export default AddDetailsForm;
