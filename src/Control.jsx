import React from 'react';
import './Control.css';

function Control() {
  return (
    <div className="Control">
      <h2 className="Control-appName">simon</h2>
      <div className="Control-boxCount" />
      <h3 className="Control-textCount">Count</h3>
      <button className="Control-button Control-buttonStart" />
      <h3 className="Control-textStart">Start</h3>
      <button className="Control-button Control-buttonOnOff" />
      <h3 className="Control-textOnOff">On/Off</h3>
      <button className="Control-button Control-buttonLast" />
      <h3 className="Control-textLast">Last</h3>
    </div>
  );
}

export default Control;
