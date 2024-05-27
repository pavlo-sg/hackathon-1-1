// src/components/IphoneFrame.js
import React from 'react';
import './index.css';

const IphoneFrame = ({ children }) => {
  return (
    <div className="iphone-frame">
      <div className="notch">
        <div className="camera"></div>
        <div className="speaker"></div>
      </div>
      <div className="screen">
        {children}
      </div>
      <div className="home-button"></div>
    </div>
  );
};

export default IphoneFrame;

