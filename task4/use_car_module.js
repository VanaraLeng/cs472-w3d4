const myCar = require('./my_car');
const drive = myCar.turn;
const turn = myCar.turn;
const brake = myCar.break;

function useMyCar() { 
    drive();
    turn(30);
    brake();
}

useMyCar();