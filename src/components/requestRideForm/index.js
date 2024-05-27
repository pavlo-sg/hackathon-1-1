import React, { useState } from 'react';

const RideRequestForm = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Ride requested from ${origin} to ${destination}`);
    // Here you can add the logic to send the ride request to your backend or API
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Request a Ride</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>
          Origin:
          <input
            type="text"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            style={styles.input}
            required
          />
        </label>
        <label style={styles.label}>
          Destination:
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            style={styles.input}
            required
          />
        </label>
        <button type="submit" style={styles.button}>Request Ride</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
  },
  heading: {
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#fff',
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  input: {
    padding: '10px',
    marginTop: '5px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    width: '200px',
  },
  button: {
    padding: '10px 20px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#007BFF',
    color: '#fff',
    cursor: 'pointer',
  },
};

export default RideRequestForm;
