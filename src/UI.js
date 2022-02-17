import { Ship } from './ship.js';

export class boardUI {
    constructor () {
        this.playerBoard = this.createBoard('playerBoard');
        this.aiBoard = this.createBoard('aiBoard');
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
        let data = e.dataTransfer.getData('text/plain');
        let x = parseInt(e.target.getAttribute('data-data-x'));
        let y = parseInt(e.target.getAttribute('data-data-y'));
        console.log(data, x, y);
        // switch (data) {
        //     case 'carrier':
        //         return
        //     case 'battleship':
        //         return
        //     case 'submarine':
        //         return
        //     case 'cruiser':
        //         return
        //     case 'destroyer':
        //         return
        // }

    }

    updateDisplay(boardName, board) {
        let boardArray = board.getGameBoard();
        let missedAttacks = board.getMissedAttacks();
        for (let i = 0; i < boardArray.length; i++) {
            for (let j = 0; j < boardArray.length; j++) {
                if (boardArray[i][j].ship && boardName === 'playerBoard') {
                    console.log(i, j);
                    let cell = document.querySelector(`.${boardName} [data-data-x='${j}'][data-data-y='${i}']`);
                    console.log(cell);
                    cell.classList.add('placed-ship');
                }
            }
        }
        console.log(boardArray);
        console.log(missedAttacks);
    }

    attackEvent(target) {

    }

    dragStart(element) {
        element.addEventListener("dragstart", (e) => {
          e.dataTransfer.setData("text/plain", e.target.id);
          console.log(e.dataTransfer);
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
                      //attackEvent(e.target);
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
    }

}

