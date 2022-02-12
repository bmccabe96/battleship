import { Ship } from './ship.js';

let test = new Ship(2);
console.log(test);
test.hit(0);
console.log(test.ship);
console.log(test.isSunk());
test.hit(1);
console.log(test.ship);
console.log(test.isSunk());

