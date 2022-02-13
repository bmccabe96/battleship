import { Ship } from './ship.js';
import { Gameboard } from './gameboard.js'

// let test = new Ship(2);
// console.log(test);
// test.hit(0);
// console.log(test.ship);
// console.log(test.isSunk());
// test.hit(1);
// console.log(test.ship);
// console.log(test.isSunk());

let board = new Gameboard();
console.log(board);
let ship = new Ship(2);
board.placeShip(ship, 'horizontal', 0, 0);
console.log(board);

let ship2 = new Ship(3);
board.placeShip(ship2, 'horizontal', 0, 0);
board.placeShip(ship2, 'vertical', 2, 0);
board.placeShip(ship2, 'vertical', 4, 4);
console.log(board);
console.log(board.gameBoardArray[0][0].ship.length);
console.log(board.gameBoardArray[4][4].ship.length);