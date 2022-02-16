export class boardUI {
    constructor () {
        this.playerBoard = this.createBoard('playerBoard');
        this.aiBoard = this.createBoard('aiBoard');
        this.battleshipHTML = document.querySelector("#battleship");
        this.carrierHTML = document.querySelector("#carrier");
        this.submarineHTML = document.querySelector("#submarine");
        this.destroyerHTML = document.querySelector("#destroyer");
        this.cruiser = document.querySelector("#cruiser");
    }

    refreshWindow() {
        location.reload();
    }
    dropShip(ship) {

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
                      //dropShip(e);
                    });
                  }
                  board.appendChild(cell);
            }
        }
    }
}

