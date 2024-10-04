import React, { useState, useEffect } from 'react';
import './PropertyListing.css';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';

const PropertyListing = () => {
  const [filters, setFilters] = useState({
    bhkType: '2 BHK',
    priceRange: [0, 10000000],
    areaRange: [0, 5000],
    propertyStatus: 'Under Construction',
    furnishing: 'Full',
    propertyType: 'Apartment',
    facing: 'North',
    searchQuery: ''
  });

  const [properties, setProperties] = useState([
    // Example property data (replace with API data)
    { id: 1, tittle: '2-BHK-Flat-in-East-Of-Kailash', name: '2 BHK Flat in East Of Kailash', price: '₹35 Lacs', area: '713 sqft', emi: '₹20,060/Month', facing: 'North', bathrooms: 2, parking: 'Bike', imageUrl: 'property1.jpg' },
    { id: 2, tittle: '3-BHK-Apartment-in-Gurgaon',name: '3 BHK Apartment in Gurgaon', price: '₹65 Lacs', area: '1200 sqft', emi: '₹40,060/Month', facing: 'East', bathrooms: 3, parking: 'Car', imageUrl: 'property2.jpg' },
    { id: 3, tittle: '1-BHK-Studio-in-Noida',name: '1 BHK Studio in Noida', price: '₹25 Lacs', area: '500 sqft', emi: '₹15,060/Month', facing: 'West', bathrooms: 1, parking: 'None', imageUrl: 'property3.jpg' },
    // Add more properties here...
  ]);

  // Handle filter changes
  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  // Filter properties by search query
  const filteredProperties = properties.filter(property =>
    property.tittle.toLowerCase().includes(filters.searchQuery.toLowerCase())
  );

  return (
    <div>
    <div className="property-listing-container">
      {/* Left side: Fixed Filter */}
      <div className="filter-panel">
        <h3>Filters</h3>
        <div className="filter-item">
          <label>BHK Type:</label>
          <div className="bhk-options">
            <button className={filters.bhkType === '1 BHK' ? 'active' : ''} onClick={() => setFilters({ ...filters, bhkType: '1 BHK' })}>1 BHK</button>
            <button className={filters.bhkType === '2 BHK' ? 'active' : ''} onClick={() => setFilters({ ...filters, bhkType: '2 BHK' })}>2 BHK</button>
            <button className={filters.bhkType === '3 BHK' ? 'active' : ''} onClick={() => setFilters({ ...filters, bhkType: '3 BHK' })}>3 BHK</button>
            <button className={filters.bhkType === '4 BHK' ? 'active' : ''} onClick={() => setFilters({ ...filters, bhkType: '4 BHK' })}>4 BHK</button>
          </div>
        </div>

        <div className="filter-item">
          <label>Price Range: ₹0 to ₹{filters.priceRange[1] / 1000000} Cr</label>
          <input
            type="range"
            min="0"
            max="10000000"
            step="100000"
            value={filters.priceRange[1]}
            onChange={(e) => setFilters({ ...filters, priceRange: [0, e.target.value] })}
          />
        </div>

        <div className="filter-item">
          <label>Area Range: 0 to {filters.areaRange[1]} sqft</label>
          <input
            type="range"
            min="0"
            max="5000"
            step="100"
            value={filters.areaRange[1]}
            onChange={(e) => setFilters({ ...filters, areaRange: [0, e.target.value] })}
          />
        </div>

        <div className="filter-item">
          <label>Property Status:</label>
          <select name="propertyStatus" value={filters.propertyStatus} onChange={handleChange}>
            <option value="Under Construction">Under Construction</option>
            <option value="Ready">Ready</option>
          </select>
        </div>

        <div className="filter-item">
          <label>Furnishing:</label>
          <select name="furnishing" value={filters.furnishing} onChange={handleChange}>
            <option value="Full">Full</option>
            <option value="Semi">Semi</option>
            <option value="None">None</option>
          </select>
        </div>

        <div className="filter-item">
          <label>Facing:</label>
          <select name="facing" value={filters.facing} onChange={handleChange}>
            <option value="North">North</option>
            <option value="East">East</option>
            <option value="South">South</option>
            <option value="West">West</option>
          </select>
        </div>
      </div>

      {/* Right side: Property Listings and Live Search */}
      <div className="property-listings">
        {/* Live Search */}
        <div className="live-search">
          <input
            type="text"
            placeholder="Search properties..."
            value={filters.searchQuery}
            onChange={(e) => setFilters({ ...filters, searchQuery: e.target.value })}
          />
        </div>

        {/* Property Cards */}
        <div className="property-card-container">
          {filteredProperties.map(property => (
            <div key={property.id} className="property-card">
              <img src={property.imageUrl} alt={property.title} />
              <div className="property-details">
                <h4>{property.tittle}</h4>
                <p>{property.price} | {property.area}</p>
                <p><strong>{property.facing} Facing</strong> | {property.bathrooms} Bathrooms | {property.parking} Parking</p>
                <Link to={`/project/${property.tittle}`}><button className="details-btn">Get Owner Details</button></Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default PropertyListing;
