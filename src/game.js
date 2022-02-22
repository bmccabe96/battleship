import { boardUI } from './UI.js';


function game() {
    let b = new boardUI();
    b.dragStart(b.carrierHTML);
    b.dragStart(b.battleshipHTML);
    b.dragStart(b.submarineHTML);
    b.dragStart(b.cruiserHTML);
    b.dragStart(b.destroyerHTML);



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

    b.randomizeAIBoard();
    // let attack = generateAIAttack();
    // console.log(attack);
    // console.log(AIAttacks);


}

export {game};