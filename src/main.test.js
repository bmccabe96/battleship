import { Ship } from './ship.js';
import { Gameboard } from './gameboard.js'

describe('Ship', () => {
    let ship = new Ship(5);

    test('defines hit()', () => {
        expect(typeof ship.hit).toBe('function');
    });
    test('defines isSunk()', () => {
        expect(typeof ship.isSunk).toBe('function');
    });
    test('Ship should return an array as long as length', () => {
        expect(ship.getShipLength()).toBe(5);
    });
    test('Hitting a ship should update the shipSlots', () => {
        let testHitting = new Ship(2);
        testHitting.hit(1);
        expect(testHitting.ship).toStrictEqual([ { 'hit': false }, { 'hit': true } ]);
    });
    test('Test sinking a ship', () => {
        let testHitting = new Ship(2);
        testHitting.hit(0);
        expect(testHitting.isSunk()).toBe(false);
        testHitting.hit(1);
        expect(testHitting.isSunk()).toBe(true);
    });
});

describe('Gameboard', () => {
    test('Creating a gameboard has empty cells', () => {
        let board = new Gameboard();
        for (let i = 0; i < 10; i ++) {
            for (let j = 0; j < 10; j++) {
                expect(board.getGameBoard()[i][j])
                .toStrictEqual({'ship': undefined, 'shipIndex': undefined });
            }
        }
    });
    test('Placing a ship horizontally on empty board', () => {
        let board = new Gameboard();
        let ship = new Ship(3);
        board.placeShip(ship, 'horizontal', 0, 0);
        expect(board.getGameBoard()[0][0]).toStrictEqual( { 'ship': ship, 'shipIndex': 0} ); 
        expect(board.getGameBoard()[0][1]).toStrictEqual( { 'ship': ship, 'shipIndex': 1} ); 
        expect(board.getGameBoard()[0][2]).toStrictEqual( { 'ship': ship, 'shipIndex': 2} ); 
    });
    test('Placing a ship vertically on empty board', () => {
        let board = new Gameboard();
        let ship = new Ship(3);
        board.placeShip(ship, 'vertical', 1, 1);
        expect(board.getGameBoard()[1][1]).toStrictEqual( { 'ship': ship, 'shipIndex': 0} ); 
        expect(board.getGameBoard()[2][1]).toStrictEqual( { 'ship': ship, 'shipIndex': 1} ); 
        expect(board.getGameBoard()[3][1]).toStrictEqual( { 'ship': ship, 'shipIndex': 2} ); 
    });
    test('Catch placing a ship horizontally and extending beyond the gameboard', () => {
        let board = new Gameboard();
        let ship = new Ship(3);
        expect(board.placeShip(ship, 'horizontal', 7, 0)).toBe('INVALID PLACEMENT');
    });
    test('Catch placing a ship vertically and extending beyond the gameboard', () => {
        let board = new Gameboard();
        let ship = new Ship(3);
        expect(board.placeShip(ship, 'vertical', 0, 7)).toBe('INVALID PLACEMENT');
    });
    test('Catch placing a ship horizontally and interfering w another ship', () => {
        let board = new Gameboard();
        let ship1 = new Ship(3);
        board.placeShip(ship1, 'vertical', 2, 0);
        let ship2 = new Ship(4);
        expect(board.placeShip(ship2, 'horizontal', 0, 0))
        .toBe('INVALID PLACEMENT');
    });
    test('Catch placing a ship vertically and interfering w another ship', () => {
        let board = new Gameboard();
        let ship1 = new Ship(3);
        board.placeShip(ship1, 'horizontal', 2, 1);
        let ship2 = new Ship(4);
        expect(board.placeShip(ship2, 'vertical', 3, 0))
        .toBe('INVALID PLACEMENT');
    });
    test('Receive attack works on empty ship', () => {
        let board = new Gameboard();
        let ship1 = new Ship(3);
        board.placeShip(ship1, 'horizontal', 2, 1);
        board.receiveAttack(3, 1);
        console.log(board.getGameBoard()[1][2]);
        expect(board.getGameBoard()[1][2].ship.ship[1].hit).toBe(true);
    });
});