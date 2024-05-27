import React, { useState, useEffect } from "react";
import RideModal from "../rideModal";
const RequestRideForm = () => {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [distance, setDistance] = useState(null);
  const [duration, setDuration] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const fetchDistanceMatrix = async () => {
      const url = `https://hackathon-1-1.netlify.app/.netlify/functions/hack`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.rows.length > 0 && data.rows[0].elements.length > 0) {
          const element = data.rows[0].elements[0];
          setDistance(element.distance.text);
          setDuration(element.duration.text);
        }
      } catch (error) {
        console.error("Error fetching the Distance Matrix:", error);
      }
    };

    fetchDistanceMatrix();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <div className="request-ride-form">
      <h2>Request a Ride</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="pickup">Pickup Location:</label>
          <input
            type="text"
            id="pickup"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            placeholder="Enter your pickup location"
          />
        </div>
        <div className="form-group">
          <label htmlFor="dropoff">Dropoff Location:</label>
          <input
            type="text"
            id="dropoff"
            value={dropoff}
            onChange={(e) => setDropoff(e.target.value)}
            placeholder="Enter your dropoff location"
          />
        </div>
        <button type="submit">Request Ride</button>
      </form>
      <RideModal isOpen={modalIsOpen} onRequestClose={closeModal} />
      <div>
        <h1>Distance Matrix</h1>
        {distance && duration ? (
          <div>
            <p>Distance: {distance}</p>
            <p>Duration: {duration}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>

      <iframe
        referrerPolicy="no-referrer-when-downgrade"
        title="map"
        width="450"
        height="250"
        frameBorder="0"
        allowFullScreen
        style={{ border: 0 }}
        src={`https://www.google.com/maps/embed/v1/directions
              ?key=AIzaSyAGtrYV4g9feB2dZUQrVXKGkWQFnXgB3IU
              &origin=Oslo+Norway
              &destination=Telemark+Norway
              &avoid=tolls|highways
        `}
      ></iframe>
    </div>
  );
};

export default RequestRideForm;

// const styles = {
//   container: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#f0f0f0',
//   },
//   heading: {
//     marginBottom: '20px',
//   },
//   form: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     gap: '10px',
//     padding: '20px',
//     border: '1px solid #ccc',
//     borderRadius: '8px',
//     backgroundColor: '#fff',
//   },
//   label: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'flex-start',
//   },
//   input: {
//     padding: '10px',
//     marginTop: '5px',
//     borderRadius: '4px',
//     border: '1px solid #ccc',
//     width: '200px',
//   },
//   button: {
//     padding: '10px 20px',
//     borderRadius: '4px',
//     border: 'none',
//     backgroundColor: '#007BFF',
//     color: '#fff',
//     cursor: 'pointer',
//   },
// };
