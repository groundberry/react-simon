import React from 'react';
import PropTypes from 'prop-types';
import './Control.css';

function Control(props) {
  return (
    <div className="Control">
      <h2 className="Control-appName">simon</h2>
      <div className="Control-boxCount" />
      <h3 className="Control-textCount">Count</h3>
      <button className="Control-button Control-buttonStart" />
      <h3 className="Control-textStart">Start</h3>
      <button
        className="Control-button Control-buttonOnOff"
        onClick={props.onClickOnOff}
      />
      <h3 className="Control-textOnOff">On/Off</h3>
      <button className="Control-button Control-buttonLast" />
      <h3 className="Control-textLast">Last</h3>
    </div>
  );
}

Control.propTypes = {
  onClickOnOff: PropTypes.func.isRequired,
};

export default Control;
