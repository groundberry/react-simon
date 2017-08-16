import React from 'react';
import PropTypes from 'prop-types';
import './Control.css';

function Control(props) {
  return (
    <div className="Control">
      <h2 className="Control-appName">simon</h2>
      <div className="Control-boxCount">
        {props.round}
      </div>
      <h3 className="Control-textCount">Round</h3>
      <button
        className="Control-button Control-buttonStart"
        onClick={props.onClickStart}
      />
      <h3 className="Control-textStart">Start</h3>
      <button
        className="Control-button Control-buttonOnOff"
        onClick={props.onClickOnOff}
      />
      <h3 className="Control-textOnOff">On/Off</h3>
      <button
        className="Control-button Control-buttonLast"
        onClick={props.onClickStart}
      />
      <h3 className="Control-textLast">Last</h3>
    </div>
  );
}

Control.propTypes = {
  onClickOnOff: PropTypes.func.isRequired,
  onClickStart: PropTypes.func.isRequired,
  round: PropTypes.number,
};

Control.defaultProps = {
  round: null,
};

export default Control;
