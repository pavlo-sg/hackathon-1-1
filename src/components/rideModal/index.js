// src/components/RideModal.js
import React from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';


const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '20px',
    border: 'none',
    padding: '20px',
    width: '80%', // Adjust the width as needed
    height: '80%', // Adjust the height as needed
    maxWidth: '300px', // Maximum width
    maxHeight: '300px', // Maximum height
    overflow: 'auto'
  }
};
const RideModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Request Ride Modal"
      style={modalStyles}
    >
      <h2>Request Ride</h2>
      <p>Save up to xx co2 carbon footprint by using different transportation...</p>
      <button onClick={onRequestClose}>Close Modal</button>
        
    </Modal>
  );
};

export default RideModal;