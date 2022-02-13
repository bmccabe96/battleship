export class Ship {
    constructor(length) {
        this.length = length;
        this.ship = this._createShip();
    }
    getShipLength() {
        return this.ship.length;
    }
    _createShip() {
        let shipSlots = [];
        for(let i = 0; i < this.length; i++) {
            shipSlots.push({ hit: false})
        }
        return shipSlots;
    }
    hit(num) {
        this.ship[num].hit = true;
    }
    isSunk() {
        for(let i = 0; i < this.length; i++) {
            if (this.ship[i].hit === false){
                return false;
            }
        }
        return true;
    }
}

