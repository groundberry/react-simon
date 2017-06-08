/* eslint-disable  import/prefer-default-export */

export function getRandomNumber() {
  return Math.floor(Math.random() * 4);
}

export function getRandomColor() {
  const arrOfColors = ['Red', 'Yellow', 'Blue', 'Green'];
  return arrOfColors[getRandomNumber()];
}

export function getRandomColors() {
  const result = [];
  for (let i = 0; i < 20; i += 1) {
    result.push(getRandomColor());
  }
  return result;
}

const soundGreen = new Audio('./soundGreen.mp3');
const soundRed = new Audio('./soundRed.mp3');
const soundYellow = new Audio('./soundYellow.mp3');
const soundBlue = new Audio('./soundBlue.mp3');

export function playGreen() {
  soundGreen.play();
}

export function playRed() {
  soundRed.play();
}

export function playYellow() {
  soundYellow.play();
}

export function playBlue() {
  soundBlue.play();
}
