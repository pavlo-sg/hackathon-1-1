import React from 'react';
import './index.css';

const FakeAppIcon = ({ icon, label, onClick }) => {
  return (
    <div className="fake-app-icon" onClick={onClick}>
      <div className="icon-container">
        {icon}
      </div>
      <div className="label">{label}</div>
    </div>
  );
};

export default FakeAppIcon;