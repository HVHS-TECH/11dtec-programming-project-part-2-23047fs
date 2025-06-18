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
let cars = ['BAC Mono', 'MX5', 'Mini', 'i30', 'Falcon', 'Kona', 'Prado', 'Outlander', 'Estima'];
let carsPRICE = [25, 45, 30, 35, 60, 55, 70, 85, 90];

/********************************
Main code
********************************/
function autoSTART() {
    document.getElementById("carINFO").style.visibility = "hidden";
    console.log(cars)
}

function start() {

}

/********************************
Functions
********************************/

function getUSERname() {
    userNAMEselect.value = String(userNAMEselect.value);
    userNAME = '<p>Hello ' + userNAMEselect.value + ', please input your age in the form below</p>';
    userNAMEtext.innerHTML = userNAME;

    if (isNaN(userNAMEselect.value) || userNAME.select.value == "" || userNAME.select.value == " ") {
        userAGE = '<p>Sorry but you must enter a real name to start the process of renting a car online</p>';
    }
}

function getUSERage() {
    userAGEselect.value = Number(userAGEselect.value);
    userAGE = '<p>Hello ' + userNAMEselect.value + ', below are the avalable cars at Bobs Rentals, the number of seats they have, and the price per day</p>';
    userAGEtext.innerHTML = userAGE;

    if (userAGEselect.value >= 18) {
        document.getElementById("carINFO").style.visibility = "visible";
    } else {
        userAGE = '<p>Sorry but you are too young to be able to rent a car from us online</p>';
        userAGEtext.innerHTML = userAGE;
    }
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