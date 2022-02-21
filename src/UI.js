import { Ship } from './ship.js';
import { Gameboard } from './gameboard.js';

export class boardUI {
    constructor () {
        this.playerBoard = new Gameboard();
        this.aiBoard = new Gameboard();
        this.playerBoardUI = this.createBoard('playerBoard');
        this.aiBoardUI = this.createBoard('aiBoard');
        this.battleshipHTML = document.querySelector("#battleship");
        this.carrierHTML = document.querySelector("#carrier");
        this.submarineHTML = document.querySelector("#submarine");
        this.destroyerHTML = document.querySelector("#destroyer");
        this.cruiserHTML = document.querySelector("#cruiser");
    }

    refreshWindow() {
        location.reload();
    }

    dropShip(e) {
        let data = JSON.parse(e.dataTransfer.getData('text/plain'));
        let x = parseInt(e.target.getAttribute('data-data-x'));
        let y = parseInt(e.target.getAttribute('data-data-y'));
        console.log(data, x, y);
        console.log(e.target);
        switch (data.id) {
            case 'carrier': {
                if (this.validPlacement(data.alignment, x, y, parseInt(data.length))) {
                    this.dropShipPlaceHelper(data.length, data.id, data.alignment, x, y);
                } else {
                    alert("YO YOU CANT DO THAT");
                }
                break;
            }
            case 'battleship': {
                if (this.validPlacement(data.alignment, x, y, parseInt(data.length))) {
                    this.dropShipPlaceHelper(data.length, data.id, data.alignment, x, y);
                } else {
                    alert("YO YOU CANT DO THAT");
                }                
                break;
            }
            case 'submarine': {
                if (this.validPlacement(data.alignment, x, y, parseInt(data.length))) {
                    this.dropShipPlaceHelper(data.length, data.id, data.alignment, x, y);
                } else {
                    alert("YO YOU CANT DO THAT");
                }                
                break;
            }
            case 'cruiser': {
                if (this.validPlacement(data.alignment, x, y, parseInt(data.length))) {
                    this.dropShipPlaceHelper(data.length, data.id, data.alignment, x, y);
                } else {
                    alert("YO YOU CANT DO THAT");
                }                
                break;
            }
            case 'destroyer': {
                if (this.validPlacement(data.alignment, x, y, parseInt(data.length))) {
                    this.dropShipPlaceHelper(data.length, data.id, data.alignment, x, y);
                } else {
                    alert("YO YOU CANT DO THAT");
                }                
                break;
            }    
        }
        console.log(this.playerBoard);
    }
    dropShipPlaceHelper(length, id, alignment, x, y) {
        let ship = new Ship(parseInt(length));
        this.playerBoard.placeShip(ship, alignment, x, y);
        this.updateDisplay(this.playerBoardUI, this.playerBoard);
        document.querySelector(`#${id}`).remove();
    }
    validPlacement(alignment, x, y, length) {
        console.log(alignment, x, y, length);
        if (alignment === 'vertical') {
            if (length + y > 10) {
                return false;
            }
            for (let i = 0; i < length; i++) {
                if (this.playerBoard.getGameBoard()[y+i][x].ship !== undefined) {
                    return false;
                }
            }
        }
        else {
            if (length + x > 10) {
                return false;
            }
            for (let i = 0; i < length; i++) {
                if (this.playerBoard.getGameBoard()[y][x+i].ship !== undefined) {
                    return false;
                }
            }
        }
        return true;
    }

    updateDisplay(boardName, board) {
        let boardArray = board.getGameBoard();
        let missedAttacks = board.getMissedAttacks();
        for (let i = 0; i < boardArray.length; i++) {
            for (let j = 0; j < boardArray.length; j++) {
                if (boardArray[i][j].ship && boardName === 'playerBoard') {
                    // console.log(i, j);
                    let cell = document.querySelector(`.${boardName} [data-data-x='${j}'][data-data-y='${i}']`);
                    // console.log(cell);
                    cell.classList.add('placed-ship');
                }
            }
        }
        // console.log(boardArray);
        // console.log(missedAttacks);
    }

    attackEvent(target) {
        let x = parseInt(target.dataset.dataX);
        let y = parseInt(target.dataset.dataY);
        this.aiBoard.receiveAttack(x, y);
        console.log(this.aiBoard);
    }

    dragStart(element) {
        element.addEventListener("dragstart", (e) => {
          e.dataTransfer.setData("text/plain", JSON.stringify({
            'id': e.target.id,
            'length': e.target.dataset.length,
            'alignment': e.target.classList.contains('horizontal') ? 'horizontal' : 'vertical'
          }));
        });
    }

    createBoard(boardName) {
        let board = document.querySelector(`.${boardName}`);
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                let cell = document.createElement('div');
                cell.classList.add('cell');
                cell.dataset.dataX = j;
                cell.dataset.dataY = i;
                if (boardName === "aiBoard") {
                    cell.addEventListener("click", (e) => {
                        this.attackEvent(e.target);
                    });
                } else if (boardName === "playerBoard") {
                    cell.addEventListener("dragover", (e) => {
                        e.preventDefault();
                    });
                    cell.addEventListener("drop", (e) => {
                        e.preventDefault();
                        this.dropShip(e);
                    });
                  }
                  board.appendChild(cell);
            }
        }
        return boardName;
    }

    randomizeAIBoard() {
        function _getRandomArbitrary(min, max) { //random min inclusive and max inclusive
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        const alignments = ['horizontal', 'vertical'];
        const ships = [new Ship(5), new Ship(4), new Ship(3), new Ship(3), new Ship(2)];
        for (let i = 0; i < ships.length; i++) {
            let alignment = alignments[Math.random() > 0.5 ? 1 : 0];
            let x = _getRandomArbitrary(0, 9);
            let y = _getRandomArbitrary(0, 9);
            try {
                if (this.aiBoard._validPlace(ships[i].length, alignment, x, y)) {
                    this.aiBoard.placeShip(ships[i], alignment, x, y);
                }
                else { //restart this iteration of loop if not valid place
                    i--;
                    continue;
                }
            } catch (e) {
                console.error(e);
            }
        }
    }
}

