/********************************
Name of task: Rental Car 2
Author: Finley
Date: Term 2
********************************/
console.log("Running car_rentals_2.js");

//Variables
const carMAXtime = 30;
const carMINtime = 1;
let carSELECTED;
let carTIME;
let userCARchoice;
let carCHOICES;
let userTIMEchoice;
let userCARprice;
let carSELECTEDfalse = false;

//Arrays
cars = ['BAC Mono', 'MX5', 'Mini', 'i30', 'Falcon', 'Kona', 'Prado', 'Outlander', 'Estima'];
carsPRICE = [25, 45, 30, 35, 60, 55, 70, 85, 90];

/********************************
Main code
********************************/
function autoSTART() {

}

function start() {

}

/********************************
Functions
********************************/
function car0() {
    carSELECTED = 0;
    carANDtime()
}

function car1() {
    carSELECTED = 1;
    carANDtime()
}

function car2() {
    carSELECTED = 2;
    carANDtime()
}

function car3() {
    carSELECTED = 3;
    carANDtime()
}

function car4() {
    carSELECTED = 4;
    carANDtime()
}

function car5() {
    carSELECTED = 5;
    carANDtime()
}

function car6() {
    carSELECTED = 6;
    carANDtime()
}

function car7() {
    carSELECTED = 7;
    carANDtime()
}
function car8() {
    carSELECTED = 8;
    carANDtime()
}
function carANDtime() {
    userCARchoice = '<p>The car you have selected is the ' + cars[carSELECTED] + '</p>';
    userCARtext.innerHTML += userCARchoice

    userTIMEchoice = '<p>How long would you like to rent the ' + cars[carSELECTED] + '</p>';
    userTIMEtext.innerHTML += userTIMEchoice;

    for (i = 1; i < (carMAXtime + 1); i++) {
        carTIME = '<option value="' + i + '"> ' + i + '</option>';
        carTIMEselect.innerHTML += carTIME;
    }
}

function getCARtimeSELECT() {
    console.log(carTIMEselect.value);
    carTIMEselect.value = Number(carTIMEselect.value)
    userCARprice = '<p>The total price of the ' + cars[carSELECTED] + ' for ' + carTIMEselect.value + ' days is $' + (carsPRICE[carSELECTED] * carTIMEselect.value) + '</p>';
    userCARpriceTEXT.innerHTML += userCARprice;
    console.log(carTIMEselect.value);
}


/********************************
Extra code for later use



********************************/ 