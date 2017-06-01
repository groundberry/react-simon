import React, { Component } from 'react';
import './Simon.css';

class Simon extends Component {
  constructor() {
    super();
    this.state = {
      status: 'off',
    };
  }

  render() {
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
}

export default Simon;
