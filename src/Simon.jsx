import React, { Component } from 'react';
import Control from './Control';
import { getRandomColors } from './actions';
import './Simon.css';

class Simon extends Component {
  constructor() {
    super();
    this.state = {
      sequence: [],
      status: 'off',
    };

    this.handleClickOnOff = this.handleClickOnOff.bind(this);
  }

  handleClickOnOff() {
    this.setState({
      sequence: getRandomColors(),
    });
  }

  render() {
    return (
      <div className="Simon">
        <button
          className="Simon-button Simon-buttonGreen"
        >
          Green
        </button>
        <button
          className="Simon-button Simon-buttonRed"
        >
          Red
        </button>
        <button
          className="Simon-button Simon-buttonYellow"
        >
          Yellow
        </button>
        <button
          className="Simon-button Simon-buttonBlue"
        >
          Blue
        </button>
        <div className="Simon-control">
          <Control onClickOnOff={this.handleClickOnOff} />
        </div>
      </div>
    );
  }
}

export default Simon;
