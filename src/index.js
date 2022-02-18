import { Ship } from './ship.js';
import { Gameboard } from './gameboard.js'
import { boardUI } from './UI.js';

// let test = new Ship(2);
// console.log(test);
// test.hit(0);
// console.log(test.ship);
// console.log(test.isSunk());
// test.hit(1);
// console.log(test.ship);
// console.log(test.isSunk());

let board = new Gameboard();
let ship = new Ship(2);
board.placeShip(ship, 'horizontal', 0, 0);
let ship2 = new Ship(4);
board.placeShip(ship2, 'vertical', 3, 5);
// console.log(board);

// let ship2 = new Ship(3);
// board.placeShip(ship2, 'horizontal', 0, 0);
// board.placeShip(ship2, 'vertical', 2, 0);
// board.placeShip(ship2, 'vertical', 4, 4);
// console.log(board);
// console.log(board.gameBoardArray[0][0].ship.length);
// console.log(board.gameBoardArray[4][4].ship.length);


let b = new boardUI();
b.dragStart(b.carrierHTML);
b.dragStart(b.battleshipHTML);
b.dragStart(b.submarineHTML);
b.dragStart(b.cruiserHTML);
b.dragStart(b.destroyerHTML);

document.querySelector('p').addEventListener('click', () => {
    b.updateDisplay('playerBoard', board);
});

let htmlShips = document.querySelectorAll('.ship');
document.querySelector('.flip-alignment').addEventListener('click', () => {
    htmlShips.forEach(ship => {
        if (ship.classList.contains('horizontal')) {
            ship.classList.remove('horizontal');
            ship.classList.add('vertical');
        }
        else {
            ship.classList.remove('vertical');
            ship.classList.add('horizontal');
        }
    });
});


// placeMentShips.forEach(ship => {
//     ship.addEventListener('dragstart', dragStart);
//     ship.addEventListener('dragend', dragEnd);
// });

// function dragStart(e) {
//     e.dataTransfer.setData('text/plain', e.target.id);
//     e.target.classList.add('blur');
//     console.log(e.target.parentNode);
//     // setTimeout(() => {
//     //     e.target.classList.add('hide');
//     // }, 0);
// }
// function dragEnd(e) {
//     e.target.classList.remove('blur');
// }


// const boxes = document.querySelectorAll('.droppable');
// boxes.forEach(box => {
//     box.addEventListener('dragenter', dragEnter);
//     box.addEventListener('dragover', dragOver);
//     box.addEventListener('dragleave', dragLeave);
//     box.addEventListener('drop', drop);
// });
// function dragEnter(e) {
//     e.preventDefault();
//     e.target.classList.add('drag-over');
// }
// function dragOver(e) {
//     e.preventDefault();
//     e.target.classList.add('drag-over');
// }
// function dragLeave(e) {
//     e.target.classList.remove('drag-over');
// }
// function drop(e) {
//     e.target.classList.remove('drag-over');
//     // get the draggable element
//     const id = e.dataTransfer.getData('text/plain');
//     console.log(id);
//     const draggable = document.getElementById(id);
//     // add it to the drop target
//     e.target.appendChild(draggable);
//     // display the draggable element
//     draggable.classList.remove('hide');

// }

