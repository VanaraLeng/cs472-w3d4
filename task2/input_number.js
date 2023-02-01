const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let sum = 0;

const getNumber = function(number) {
    if (number === "stop") {
        console.log(`Total: ${sum}`);
        readline.close();
    } else {
        sum += parseInt(number);
        readline.question('Please input number:  ', getNumber);
    }
}

readline.question('Please input number:  ', getNumber);