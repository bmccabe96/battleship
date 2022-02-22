import { Ship } from './ship.js';
import { Gameboard } from './gameboard.js';

export class boardUI {
    constructor () {
        this.playerBoard = new Gameboard();
        this.aiBoard = new Gameboard();
        this.playerBoardUI = this.createBoard('playerBoard');
        this.aiBoardUI = null;
        this.AIAttacks = [];
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
        switch (data.id) {
            case 'carrier': {
                if (this.validPlacement(data.alignment, x, y, parseInt(data.length))) {
                    this.dropShipPlaceHelper(data.length, data.id, data.alignment, x, y);
                } else {
                    alert("Invalid placement");
                }
                break;
            }
            case 'battleship': {
                if (this.validPlacement(data.alignment, x, y, parseInt(data.length))) {
                    this.dropShipPlaceHelper(data.length, data.id, data.alignment, x, y);
                } else {
                    alert("Invalid placement");
                }                
                break;
            }
            case 'submarine': {
                if (this.validPlacement(data.alignment, x, y, parseInt(data.length))) {
                    this.dropShipPlaceHelper(data.length, data.id, data.alignment, x, y);
                } else {
                    alert("Invalid placement");
                }                
                break;
            }
            case 'cruiser': {
                if (this.validPlacement(data.alignment, x, y, parseInt(data.length))) {
                    this.dropShipPlaceHelper(data.length, data.id, data.alignment, x, y);
                } else {
                    alert("Invalid placement");
                }                
                break;
            }
            case 'destroyer': {
                if (this.validPlacement(data.alignment, x, y, parseInt(data.length))) {
                    this.dropShipPlaceHelper(data.length, data.id, data.alignment, x, y);
                } else {
                    alert("Invalid placement");
                }                
                break;
            }    
        }
    }
    dropShipPlaceHelper(length, id, alignment, x, y) {
        let ship = new Ship(parseInt(length));
        this.playerBoard.placeShip(ship, alignment, x, y);
        this.updateDisplayShipDrop(this.playerBoardUI, this.playerBoard);
        document.querySelector(`#${id}`).remove();
        if(this.playerBoard.ships.length === 5) {
            this.aiBoardUI = this.createBoard('aiBoard');
        }
    }
    validPlacement(alignment, x, y, length) {
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

    updateDisplayShipDrop(boardName, board) {
        let boardArray = board.getGameBoard();
        for (let i = 0; i < boardArray.length; i++) {
            for (let j = 0; j < boardArray.length; j++) {
                if (boardArray[i][j].ship && boardName === this.playerBoardUI) {
                    // console.log(i, j);
                    let cell = document.querySelector(`.${boardName} [data-data-x='${j}'][data-data-y='${i}']`);
                    // console.log(cell);
                    cell.classList.add('placed-ship');
                }
            }
        }
    }

    updateDisplay(boardName, board) {
        let boardArray = board.getGameBoard();        
        if (boardName === this.aiBoardUI) {
            // console.log(board.getHits());
            // console.log(board.getMissedAttacks());   
            for (let i = 0; i < boardArray.length; i++) {
                for (let j = 0; j < boardArray.length; j++) {
                    let cell = document.querySelector(`.${boardName} [data-data-x='${j}'][data-data-y='${i}']`);
                    let existsHits = Boolean(this.aiBoard.getHits().find(board => board.x === j && board.y === i));
                    let existsMiss = Boolean(this.aiBoard.getMissedAttacks().find(board => board.x === j && board.y === i));
                    if (existsHits) {
                        cell.classList.add('hit-ship');
                    }
                    if (existsMiss) {
                        cell.classList.add('missed-attack');
                    }
                }
            }        
        }
        if (boardName === this.playerBoardUI) {
            for (let i = 0; i < boardArray.length; i++) {
                for (let j = 0; j < boardArray.length; j++) {
                    let cell = document.querySelector(`.${boardName} [data-data-x='${j}'][data-data-y='${i}']`);
                    let existsHits = Boolean(this.playerBoard.getHits().find(board => board.x === j && board.y === i));
                    let existsMiss = Boolean(this.playerBoard.getMissedAttacks().find(board => board.x === j && board.y === i));
                    if (existsHits) {
                        cell.classList.add('hit-ship');
                    }
                    if (existsMiss) {
                        cell.classList.add('missed-attack');
                    }
                }
            }     
        }
        // console.log(boardArray);
        // console.log(missedAttacks);
    }

    generateAIAttack() {
        function _getRandomArbitrary(min, max) { //random min inclusive and max inclusive
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        let attackX = _getRandomArbitrary(0, 9);
        let attackY = _getRandomArbitrary(0, 9);
        let existing = Boolean(this.AIAttacks.find(board => board.x === attackX && board.y === attackY));
        while(true) {
            if (!existing) { 
                this.AIAttacks.push( { 'x': attackX, 'y': attackY });
                this.playerBoard.receiveAttack(attackX, attackY);
                this.updateDisplay(this.playerBoardUI, this.playerBoard);
                if(this.checkForWinner(this.playerBoard)) {
                    const winnerHTML = document.querySelector('.winning-message');
                    winnerHTML.textContent = 'CPU WINS';
                    const newGame = document.querySelector('.new-game');
                    newGame.classList.toggle('hide');
                    newGame.addEventListener('click', () => {
                        this.refreshWindow();
                    });
                }                
                return;
            }else {
                attackX = _getRandomArbitrary(0, 9);
                attackY = _getRandomArbitrary(0, 9);
                existing = Boolean(this.AIAttacks.find(board => board.x === attackX && board.y === attackY));
            }
        }
    }

    attackEvent(target) {
        let x = parseInt(target.dataset.dataX);
        let y = parseInt(target.dataset.dataY);
        const existsHits = Boolean(this.aiBoard.getHits().find(board => board.x === x && board.y === y));
        const existsMiss = Boolean(this.aiBoard.getMissedAttacks().find(board => board.x === x && board.y === y));
        if (existsHits || existsMiss) {
            console.log("Already attacked");
        } else {
            this.aiBoard.receiveAttack(x, y);
            this.updateDisplay(this.aiBoardUI, this.aiBoard);
            if(this.checkForWinner(this.aiBoard)) {
                const winnerHTML = document.querySelector('.winning-message');
                winnerHTML.textContent = 'PLAYER WINS';
                let oldAIBoard = document.querySelector(".aiBoard");
                let newBoard = oldAIBoard.cloneNode(true);
                oldAIBoard.parentNode.replaceChild(newBoard, oldAIBoard);
                const newGame = document.querySelector('.new-game');
                newGame.classList.toggle('hide');
                newGame.addEventListener('click', () => {
                    this.refreshWindow();
                });
            }else {
                setTimeout(() => {
                    this.generateAIAttack();
                }, 150);
            }
            
        }
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

    checkForWinner(board) {
        if(board.allShipsSunk()) {
            return true;
        }
        else {
            return false;
        }
    }
}

