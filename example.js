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
let userNAME;
let carSELECTEDfalse = false;
let insuranceSLIDERvariable = true;


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

function getUSERname() {
    userNAMEselect.value = String(userNAMEselect.value);

    userNAME = '<p>Hello ' + userNAME + ', below are the avalable cars at Bobs Rentals, the number of seats they have, and the price per day</p>';
    userNAMEtext.innerHTML = userNAME;

}







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
//what car is selected and what price

//Selected car and rental time
function carANDtime() {
    userCARchoice = '<p>The car you have selected is the ' + cars[carSELECTED] + '</p>';
    userCARtext.innerHTML = userCARchoice
//'' cahnges it to html not js, like ""
//examle1.innerHTML += example2 adds what is above to the html

    userTIMEchoice = '<p>How long would you like to rent the ' + cars[carSELECTED] + '</p>';
    userTIMEtext.innerHTML = userTIMEchoice;

    for (i = 1; i < (carMAXtime + 1); i++) {
        carTIME = '<option value="' + i + '"> ' + i + '</option>';
        carTIMEselect.innerHTML += carTIME;
    }
}

//Checking if insurance slider is true or false
function insuranceSLIDER() {
    if (insuranceSLIDERvariable == true) {
        insuranceSLIDERvariable = false;
        console.log(insuranceSLIDERvariable);
        return;
    }

    if (insuranceSLIDERvariable == false) {
        insuranceSLIDERvariable = true;
        console.log(insuranceSLIDERvariable);
        return;
    }
}


//Getting the rental time and displaying the total price
function getCARtimeSELECT() {
    carTIMEselect.value = Number(carTIMEselect.value)
    if (insuranceSLIDERvariable == true) {
        userCARprice = '<p>The total price of the ' + cars[carSELECTED] + ' for ' + carTIMEselect.value + ' days is $' + ((carsPRICE[carSELECTED] + 15) * carTIMEselect.value) + '</p>';
        userCARpriceTEXT.innerHTML = userCARprice;
    }

    if (insuranceSLIDERvariable == false) {
        userCARprice = '<p>The total price of the ' + cars[carSELECTED] + ' for ' + carTIMEselect.value + ' days is $' + (carsPRICE[carSELECTED] * carTIMEselect.value) + '</p>';
        userCARpriceTEXT.innerHTML = userCARprice;
    }
}


/********************************
Extra code for later use


********************************/ 