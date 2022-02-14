import { Player } from "./player";

export class AI extends Player {
    constructor(name, enemyPlayer, enemyBoard) {
        super(name);
        this.turn = false;
        this.enemyBoard = enemyBoard;
        this.enemyPlayer = enemyPlayer;
        this.attackArray = this._createAttackArray();
    }
    getAttackArray() {
        return this.attackArray;
    }
    _createAttackArray() {
        //{ x : 9, y : 9 }
        let array = [];
        for (let x = 0; x < 10; x++) {
            for (let y = 0; y < 10; y++) {
                array.push( { 'x': x, 'y': y})
            }
        }
        return array;
    }
    generateRandomAttack() {
        if (this.checkTurn()) {
            let attack = this._popRandom(this.attackArray);
            this.attack(attack.x, attack.y, this.enemyPlayer, this.enemyBoard);
        }
    }
    _popRandom (array) {
        let i = (Math.random() * array.length) | 0
        return array.splice(i, 1)[0]
      }
}