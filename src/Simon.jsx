import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Control from './Control';
import {
  turnGameOnOff,
  checkUserOption,
  playSequence,
} from './actions';

import {
  playSounds,
} from './utils';

import './Simon.css';

class Simon extends Component {
  constructor() {
    super();
    this.state = {
      sequence: [],
      status: 'off',
      round: null,
      currentColor: null,
      currentUserIndex: null,
    };

    this.handleClickOnOff = this.handleClickOnOff.bind(this);
    this.handleClickStart = this.handleClickStart.bind(this);
    this.handleUserTurn = this.handleUserTurn.bind(this);
    this.addGreen = this.handleUserTurn.bind(this, 'Green');
    this.addRed = this.handleUserTurn.bind(this, 'Red');
    this.addYellow = this.handleUserTurn.bind(this, 'Yellow');
    this.addBlue = this.handleUserTurn.bind(this, 'Blue');
  }

  handleClickOnOff() {
    this.setState(turnGameOnOff.bind(this));
  }

  handleClickStart() {
    const { sequence, round } = this.state;

    playSequence.bind(this, sequence, round)();
  }

  handleUserTurn(color) {
    playSounds(color);

    this.setState(checkUserOption.bind(null, color), () => {
      const { sequence, round, currentUserIndex } = this.state;
      if (currentUserIndex === 0) {
        playSequence.bind(this)(sequence, round);
      }
    });
  }

  render() {
    const { currentColor } = this.state;
    const activeClass = currentColor ? `active${currentColor}` : '';

    return (
      <div className={`Simon ${activeClass}`}>
        <button
          className="Simon-button Simon-buttonGreen"
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
          <Control
            round={this.state.round}
            onClickOnOff={this.handleClickOnOff}
            onClickStart={this.handleClickStart}
          />
        </div>
      </div>
    );
  }
}

Simon.propTypes = {
  round: PropTypes.number,
};

Simon.defaultProps = {
  round: null,
};

export default Simon;
