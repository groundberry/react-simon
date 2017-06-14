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
      userInput: [],
    };

    this.handleClickOnOff = this.handleClickOnOff.bind(this);
    this.handleClickAddColor = this.handleClickAddColor.bind(this);
    this.addGreen = this.handleClickAddColor.bind(this, 'Green');
    this.addRed = this.handleClickAddColor.bind(this, 'Red');
    this.addYellow = this.handleClickAddColor.bind(this, 'Yellow');
    this.addBlue = this.handleClickAddColor.bind(this, 'Blue');
  }

  handleClickOnOff() {
    this.setState({
      sequence: getRandomColors(),
    });
  }

  handleClickAddColor(color) {
    playGreen();
    playRed();
    playYellow();
    playBlue();

    this.setState({
      userInput: this.state.userInput.concat(color),
    });
  }

  render() {
    return (
      <div className="Simon">
        <button
          className="Simon-button Simon-buttonGreen"
          value="Green"
          onClick={this.addGreen}
        >
          Green
        </button>
        <button
          className="Simon-button Simon-buttonRed"
          onClick={this.addRed}
        >
          Red
        </button>
        <button
          className="Simon-button Simon-buttonYellow"
          onClick={this.addYellow}
        >
          Yellow
        </button>
        <button
          className="Simon-button Simon-buttonBlue"
          onClick={this.addBlue}
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
