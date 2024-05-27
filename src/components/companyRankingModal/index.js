import React from 'react';
import Modal from 'react-modal';

const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
    width: '80%',
    height: '80%',
    maxWidth: '300px',
    maxHeight: '400px',
    overflow: 'auto',
    backgroundColor: '#fff', // Background color matching iPhoneFrame
  },
};

const CompanyRankingModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Company Ranking Modal"
            style={modalStyles}
    >
      <h2>Company Ranking</h2>
      <ol>
        <li>Person 1 - Score: 100</li>
        <li>Person 2 - Score: 90</li>
        <li>Person 3 - Score: 85</li>
        <li>Person 4 - Score: 80</li>
        <li>Person 5 - Score: 75</li>
      </ol>
      <button onClick={onRequestClose}>Close Modal</button>
    </Modal>
  );
};

export default CompanyRankingModal;