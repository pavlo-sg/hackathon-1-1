// src/components/RideModal.js
import React from 'react';
import Modal from 'react-modal';
import { useState } from 'react';
import CompanyRankingModal from '../companyRankingModal'

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
      const [companyRankingModalIsOpen, setCompanyRankingModalIsOpen] = useState(false);

  const openCompanyRankingModal = () => {
    setCompanyRankingModalIsOpen(true);
  };

  const closeCompanyRankingModal = () => {
    setCompanyRankingModalIsOpen(false);
  };
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
      <button onClick={openCompanyRankingModal}>Company Ranking</button>
      <CompanyRankingModal isOpen={companyRankingModalIsOpen} onRequestClose={closeCompanyRankingModal} />  
    </Modal>
  );
};

export default RideModal;