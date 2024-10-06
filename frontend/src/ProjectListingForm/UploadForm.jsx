import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import config from '../config';
import './UploadForm.css'; // Include your custom CSS file
import Topbar from '../scenes/global/Topbar';
import Sidebar from '../scenes/global/Sidebar';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../theme";

const UploadForm = () => {
  const { tittle } = useParams(); // Get project title from URL parameters

  // State for different file categories
  const [mainGallery, setMainGallery] = useState([]);
  const [logo, setLogo] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [paymentPlan, setPaymentPlan] = useState([]);
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  const handleFileChange = (setter) => (e) => {
    setter([...e.target.files]); // Update state with selected files
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    if (!mainGallery.length && !logo.length && !gallery.length && !paymentPlan.length) {
      setError('Please select files to upload in at least one category');
      return;
    }

    const uploadCategoryFiles = async (category, files) => {
      const formData = new FormData();
      files.forEach((file) => formData.append('files', file));

      try {
        await axios.post(`${config.baseURL}/upload/${tittle}/${category}`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        setMessage((prev) => `${prev}\n${category} uploaded successfully!`);
        navigate(`/floordetails/${tittle}`);
      } catch (error) {
        setError((prev) => `${prev}\nError uploading ${category}: ` + (error.response?.data?.message || error.message));
      }
    };

    // Upload files for each category
    if (mainGallery.length) await uploadCategoryFiles('mainGallery', mainGallery);
    if (logo.length) await uploadCategoryFiles('logo', logo);
    if (gallery.length) await uploadCategoryFiles('gallery', gallery);
    if (paymentPlan.length) await uploadCategoryFiles('paymentPlan', paymentPlan);
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
              <div className="upload-form-container">
                <h2 className="form-title">Upload Files for {tittle}</h2>
                <form className="upload-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Main Gallery</label>
                    <input type="file" multiple onChange={handleFileChange(setMainGallery)} />
                  </div>
                  <div className="form-group">
                    <label>Logo</label>
                    <input type="file" multiple onChange={handleFileChange(setLogo)} />
                  </div>
                  <div className="form-group">
                    <label>Gallery Photos / Videos</label>
                    <input type="file" multiple onChange={handleFileChange(setGallery)} />
                  </div>
                  <div className="form-group">
                    <label>Payment Plan</label>
                    <input type="file" multiple onChange={handleFileChange(setPaymentPlan)} />
                  </div>
                  <button type="submit" className="submit-button">Upload</button>
                </form>
                {message && <pre className="feedback-message">{message}</pre>}
                {error && <pre className="error-message">{error}</pre>}
              </div>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </div>
  );
};

export default UploadForm;
