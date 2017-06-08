import React, { Component } from 'react';
import Control from './Control';
import {
  getRandomColors,
  playGreen,
  playRed,
  playYellow,
  playBlue,
} from './actions';
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
          onClick={playGreen}
        >
          Green
        </button>
        <button
          className="Simon-button Simon-buttonRed"
          onClick={playRed}
        >
          Red
        </button>
        <button
          className="Simon-button Simon-buttonYellow"
          onClick={playYellow}
        >
          Yellow
        </button>
        <button
          className="Simon-button Simon-buttonBlue"
          onClick={playBlue}
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
