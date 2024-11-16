import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

function CustomerReg() {
  const dispatch = useDispatch();

  // State variables for customer details
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [preferredTransportType, setPreferredTransportType] = useState('Other');
  const [transportHistory, setTransportHistory] = useState([]);
  
  // Temporary states for adding a transport entry
  const [vehicleId, setVehicleId] = useState('');
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [status, setStatus] = useState('Pending');

  // Handler for adding a new transport entry to transport history
  const handleAddTransport = () => {
    const newEntry = {
      vehicleId,
      origin,
      destination,
      status,
      transportDate: new Date(),
    };
    
    setTransportHistory([...transportHistory, newEntry]);
    setVehicleId('');
    setOrigin('');
    setDestination('');
    setStatus('Pending');
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name,
      contactInfo: { email, phone },
      address: { street, city, state, zipCode },
      preferredTransportType,
      transportHistory,
    };

    // Dispatch action to save customer details (add your action here)
    // dispatch(addCustomer(formData));
    toast.success('Customer registered successfully');
  };

  return (
    <div className="customer-reg-container">
      <h2 className="form-title text-xl">Customer Details</h2>
      <form onSubmit={handleSubmit} className="customer-reg-form">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="custom-input my-2"
          placeholder="Customer Name"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="custom-input my-2"
          placeholder="Email"
        />
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className="custom-input my-2"
          placeholder="Phone"
        />
        <input
          type="text"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
          className="custom-input my-2"
          placeholder="Street"
        />
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="custom-input my-2"
          placeholder="City"
        />
        <input
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
          className="custom-input my-2"
          placeholder="State"
        />
        <input
          type="text"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          className="custom-input my-2"
          placeholder="Zip Code"
        />
         {/* <label>Preferred Transport Type</label>
        <select
          value={preferredTransportType}
          onChange={(e) => setPreferredTransportType(e.target.value)}
          className="custom-input my-2"
        >
          <option value="Truck">Truck</option>
          <option value="Van">Van</option>
          <option value="Car">Car</option>
          <option value="Bike">Bike</option>
          <option value="Other">Other</option>
        </select>

        
        <h3 className="text-lg my-4">Transport History</h3>
        {transportHistory.map((entry, index) => (
          <div key={index} className="transport-entry my-2">
            <p>Vehicle ID: {entry.vehicleId}</p>
            <p>Origin: {entry.origin}</p>
            <p>Destination: {entry.destination}</p>
            <p>Status: {entry.status}</p>
          </div>
        ))}
        
        <input
          type="text"
          value={vehicleId}
          onChange={(e) => setVehicleId(e.target.value)}
          className="custom-input my-2"
          placeholder="Vehicle ID"
        />
        <input
          type="text"
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
          className="custom-input my-2"
          placeholder="Origin"
        />
        <input
          type="text"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="custom-input my-2"
          placeholder="Destination"
        />
        <label>Status</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="custom-input my-2"
        >
          <option value="Pending">Pending</option>
          <option value="In Transit">In Transit</option>
          <option value="Delivered">Delivered</option>
          <option value="Cancelled">Cancelled</option>
        </select>
        <button
          type="button"
          onClick={handleAddTransport}
          className="submit-btn my-2"
        >
          Add Transport Entry
        </button> */} 

        <button type="submit" className="submit-btn">
          Register Customer
        </button>
      </form>
    </div>
  );
}

export default CustomerReg;
