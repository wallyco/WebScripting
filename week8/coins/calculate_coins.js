let userInput;
const QUARTER = 25;
const DIME = 10;
const NICKEL = 5;
const PENNIE = 1;

var $ = function (id) {
    return document.getElementById(id);
}

function getUserInput(){
    return userInput = parseInt(document.getElementById("cents").value);
}

function calculateChange(){
    val = getUserInput();
    let sum = val;
    let quart = 0;
    let dime = 0;
    let nicks = 0;
    let pennies = 0;

    if(sum / QUARTER != 0){
        quart = Math.floor(sum / QUARTER);
        sum -= QUARTER * quart;
    }
    if(sum / DIME != 0){
        dime = Math.floor(sum / DIME);
        sum -= (DIME * dime);
    }
    if(sum / NICKEL != 0){
        nicks = Math.floor(sum / NICKEL);
        sum -= (NICKEL * nicks);
    }
    pennies = val - (val - sum);

    document.getElementById("quarters").value = quart;
    document.getElementById("dimes").value = dime;
    document.getElementById("nickels").value = nicks;
    document.getElementById("pennies").value = pennies;



}

document.getElementById("calculate").addEventListener("click", calculateChange);

