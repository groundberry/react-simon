import React from 'react';
import './Simon.css';

function Simon() {
  return (
    <div className="Simon">
      <button className="Simon-button Simon-buttonGreen">
        Green
      </button>
      <button className="Simon-button Simon-buttonRed">
        Red
      </button>
      <button className="Simon-button Simon-buttonYellow">
        Yellow
      </button>
      <button className="Simon-button Simon-buttonBlue">
        Blue
      </button>
      <div className="Simon-control">
        Simon
      </div>
    </div>
  );
}

export default Simon;
