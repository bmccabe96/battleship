export class Gameboard {
    constructor() {
        this.gameBoardArray = this._createGameBoardArray();
        this.missedAttacks = [];
        this.ships = [];
    }
    _createGameBoardArray() {
        let array = [];
        for (let i = 0; i < 10; i++) {
            let subArray = [];
            for (let j = 0; j < 10; j++) {
                subArray.push( {'ship': undefined, 'shipIndex': undefined } );
            }
            array.push(subArray);
        }
        return array;
    }

    getGameBoard() {
        return this.gameBoardArray;
    }

    _validPlace(length, direction, x, y) {
        if (direction === 'horizontal') {
            if (x + length > 9) {
                return false;
            }
            for (let i = 0; i < length; i++) {
                if (this.gameBoardArray[y][x+i].ship !== undefined) {
                    return false;
                }
            }
        } else if (direction === 'vertical') {
            if (y + length > 9) {
                return false;
            }
            for (let i = 0; i < length; i++) {
                if (this.gameBoardArray[y+i][x].ship !== undefined) {
                    return false;
                }
            }
        }
        return true;
    }

    placeShip(ship, direction, x, y) {
        if (this._validPlace(ship.getShipLength(), direction, x, y) && direction === 'horizontal') {
            for (let i = 0; i < ship.getShipLength(); i++) {
                this.gameBoardArray[y][x+i].ship = ship;
                this.gameBoardArray[y][x+i].shipIndex = i;
            }
            this.ships.push(ship);
        } else if (this._validPlace(ship.getShipLength(), direction, x, y) && direction === 'vertical') {
            for (let i = 0; i < ship.getShipLength(); i++) {
                this.gameBoardArray[y+i][x].ship = ship;
                this.gameBoardArray[y+i][x].shipIndex = i;
            }
            this.ships.push(ship);
        }
        else {
            return "INVALID PLACEMENT";
        }
    }

    receiveAttack(x, y) {
        if(this.gameBoardArray[y][x].ship !== undefined) {
            this.gameBoardArray[y][x].ship.hit(this.gameBoardArray[y][x].shipIndex);
        } else {
            this.missedAttacks.push( { x, y } );
        }
    }

    getMissedAttacks() {
        return this.missedAttacks;
    }

    allShipsSunk() {
        for (let i = 0; i < this.ships.length; i++) {
            for (let j = 0; j < this.ships[i].ship.length; j++) {
                if(this.ships[i].ship[j].hit === false) {
                    return false;
                }
            }
        }
        return true;
    }
}
