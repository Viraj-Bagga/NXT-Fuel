import React, { useState } from 'react';
import './FuelOrderForm.css';

const FuelOrderForm = ({ onAddOrder }) => {
  const [formData, setFormData] = useState({
    aircraft: '',
    fuelType: '',
    amount: '',
    location: ''
  });
  
  const [showSuccess, setShowSuccess] = useState(false);
  const [nozzleType, setNozzleType] = useState('');

  // Aircraft database with fuel and nozzle compatibility
  const aircraftData = {
    'C172': { fuel: 'Avgas 100LL', nozzle: 'Over-wing' },
    'A320': { fuel: 'Jet-A', nozzle: 'Under-wing' },
    'G550': { fuel: 'Jet-A', nozzle: 'Under-wing' },
    'AW139': { fuel: 'Jet-A', nozzle: 'Over-wing' },
    'King Air 350': { fuel: 'Jet-A', nozzle: 'Over-wing' }
  };

  const aircraftOptions = [
    { value: '', label: 'Select Aircraft Type' },
    { value: 'C172', label: 'Cessna 172' },
    { value: 'A320', label: 'Airbus A320' },
    { value: 'G550', label: 'Gulfstream G550' },
    { value: 'AW139', label: 'AW139 Helicopter' },
    { value: 'King Air 350', label: 'Beechcraft King Air 350' }
  ];

  const fuelOptions = [
    { value: '', label: 'Select Fuel Type' },
    { value: 'Jet-A', label: 'Jet-A' },
    { value: 'Avgas 100LL', label: 'Avgas 100LL' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Auto-set fuel type and nozzle when aircraft is selected
    if (name === 'aircraft' && value && aircraftData[value]) {
      const aircraft = aircraftData[value];
      setFormData(prev => ({
        ...prev,
        aircraft: value,
        fuelType: aircraft.fuel
      }));
      setNozzleType(aircraft.nozzle);
    } else if (name === 'aircraft' && !value) {
      setNozzleType('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.aircraft || !formData.fuelType || !formData.amount || !formData.location) {
      alert('Please fill in all fields');
      return;
    }

    const newOrder = {
      ...formData,
      nozzle: nozzleType,
      amount: parseInt(formData.amount)
    };

    onAddOrder(newOrder);
    
    // Reset form
    setFormData({
      aircraft: '',
      fuelType: '',
      amount: '',
      location: ''
    });
    setNozzleType('');
    
    // Show success message
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">⛽ Fuel Order Request</h2>
      </div>
      <div className="card-body">
        {showSuccess && (
          <div className="success-message">
            ✅ Refuel order placed successfully! Check the logbook below.
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="fuel-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="aircraft" className="form-label">Aircraft Type</label>
              <select
                id="aircraft"
                name="aircraft"
                value={formData.aircraft}
                onChange={handleInputChange}
                className="form-select"
                required
              >
                {aircraftOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="fuelType" className="form-label">Fuel Type</label>
              <select
                id="fuelType"
                name="fuelType"
                value={formData.fuelType}
                onChange={handleInputChange}
                className="form-select"
                required
              >
                {fuelOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {nozzleType && (
            <div className="nozzle-info">
              <span className="nozzle-label">🔧 Nozzle Type:</span>
              <span className="nozzle-value">{nozzleType}</span>
            </div>
          )}

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="amount" className="form-label">Fuel Amount (Liters)</label>
              <input
                type="number"
                id="amount"
                name="amount"
                value={formData.amount}
                onChange={handleInputChange}
                className="form-input"
                placeholder="e.g. 2000"
                min="1"
                max="50000"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="location" className="form-label">Location</label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className="form-input"
                placeholder="e.g. Gate A1, Hangar 3"
                required
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary btn-submit">
            📋 Submit Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default FuelOrderForm;
