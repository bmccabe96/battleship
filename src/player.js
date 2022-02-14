export class Player {
    constructor(name) {
        this.name = name;
        this.turn = true;
    }
    getName() {
        return this.name;
    }
    startTurn(){
        if(this.turn === false) {
            this.turn = true;
        }
    }
    checkTurn() {
        return this.turn;
    }
    endTurn(otherPlayer) {
        if (this.turn === true) {
            this.turn = false;
            otherPlayer.startTurn();
        }
    }
    attack(x, y, enemyPlayer, enemyBoard) {
        if(this.checkTurn) {
            enemyBoard.receiveAttack(x, y);
            this.endTurn(enemyPlayer);
        }
    }
}