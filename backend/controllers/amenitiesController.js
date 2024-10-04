const Project = require('../models/projectModel');
const Amenities = require('../models/Amenities');

const createOrUpdateAmenities = async (req, res) => {
  const { tittle } = req.params; // Ensure title is passed correctly
  const amenitiesData = req.body;

  try {
    // Check if the project exists
    const project = await Project.findOne({ where: { tittle } });
    if (!project) {
      return res.status(404).json({ success: false, message: 'Project not found' });
    }

    // Find or create the amenities for the project
    const [amenities, created] = await Amenities.findOrCreate({
      where: { tittle },
      defaults: amenitiesData,
    });

    // If amenities already exist, update them
    if (!created) {
      await amenities.update(amenitiesData); // Updates only the current row
    }

    res.status(200).json({
      success: true,
      message: 'Amenities submitted successfully',
      amenities,
    });
  } catch (error) {
    console.error('Error submitting amenities:', error);
    res.status(500).json({
      success: false,
      message: 'Error submitting amenities',
      error: error.message,
    });
  }
};

const getAmenitiesByProjectTitle = async (req, res) => {
  const { tittle } = req.params;  // Ensure you're using title as the parameter

  try {
    // Fetch the project and include its related amenities
    const amenities = await Amenities.findOne({
      where: { tittle },  // Use title to find the project
    });

    // Check if the project exists
    if (!amenities) {
      return res.status(404).json({ success: false, message: 'Amenities not found' });
    }

    // Return the amenities data associated with the project
    res.status(200).json({ success: true, amenities });
  } catch (error) {
    console.error('Error fetching amenities:', error);
    res.status(500).json({ success: false, message: 'Error fetching amenities', error: error.message });
  }
};

module.exports = {
  createOrUpdateAmenities,
  getAmenitiesByProjectTitle,  // Export the new function
};
