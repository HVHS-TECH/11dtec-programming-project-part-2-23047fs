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

//Arrays
cars = ['BAC Mono', 'MX5', 'Mini', 'i30', 'Falcon', 'Kona', 'Prado', 'Outlander', 'Estima'];
carsPRICE = ['25', '45', '30', '35', '60', '55', '70', '85', '90'];

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

    userCARchoice = '<p>The car you have selected is the ' + cars[carSELECTED];
    userCARtext.innerHTML += userCARchoice

    for (i = 0; i < carMAXtime; i++) {
        carTIME = '<option value=""' + i + '"> ' + i + '</option>';
        carTIMEselect.innerHTML += carTIME;
    }
}

/********************************
    for (i = 0; i < cars.length; i++) {
        carCHOICES = '<option value=""' + cars[i] + '"> ' + cars[i] + '</option>';
        carSELECT.innerHTML += carCHOICES;
    }
makes a drop down select button
*/ 