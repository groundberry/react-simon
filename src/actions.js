/* eslint-disable  import/prefer-default-export */

export function getRandomNumber() {
  return Math.floor(Math.random() * 4);
}

export function getRandomColor() {
  const arrOfColors = ['Red', 'Yellow', 'Blue', 'Green'];
  return arrOfColors[getRandomNumber()];
}

export function getArrOfColors() {
  const result = [];
  for (let i = 0; i < 20; i += 1) {
    result.push(getRandomColor());
  }
  return result;
}
