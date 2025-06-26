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
let userSEAT;
let userSEATchoices = "";
let numberUSERseats;
let cardNUMBER;

//Arrays
let cars = ['BAC Mono', 'MX5', 'Mini', 'i30', 'Falcon', 'Kona', 'Prado', 'Outlander', 'Estima'];
let carSEAT = [1, 2, 4, 4, 5, 5, 5, 7, 8];
let carsPRICE = [25, 45, 30, 35, 60, 55, 70, 85, 90];

/********************************
Main code
********************************/
//Hides stuff until form completion
function autoSTART() {
    document.getElementById("carINFO").style.visibility = "hidden";
    document.getElementById("formBOX").style.visibility = "hidden";
    document.getElementById("formAGE").style.visibility = "hidden";
    document.getElementById("formCAR").style.visibility = "hidden";
    document.getElementById("formBOX").style.visibility = "hidden";
}

function start() {

}

/********************************
Functions
********************************/
function fakeCARDnumber() {
    fakeCARDnumberSELECT.value = Number(fakeCARDnumberSELECT.value);

    if (!isNaN(fakeCARDnumberSELECT.value)) {
        cardNUMBER = '<p>This was a scam :)</p>';
        fakeCARDnumberTEXT.innerHTML = cardNUMBER;
    }
}

//User name validation
function getUSERname() {
    if (!isNaN(userNAMEselect.value) || userNAMEselect.value == "" || userNAMEselect.value == " ") {
        userNAME = '<p>Sorry but ' + userNAMEselect.value + ' is not a real name, you must enter a real name to start the process of renting a car online.</p>';
        userNAMEtext.innerHTML = userNAME;
    }

    if (isNaN(userNAMEselect.value)) {
        userNAME = '<p>Hello ' + userNAMEselect.value + ', please enter your age in the form below.</p>';
        userNAMEtext.innerHTML = userNAME;
        document.getElementById("formAGE").style.visibility = "visible";
    }
}

//User age validation
function getUSERage() {
    userAGEselect.value = Number(userAGEselect.value);

    if (userAGEselect.value >= 18 && userAGEselect.value <= 100) {
        userAGE = '<p>Hello ' + userNAMEselect.value + ', please enter how many seats you would like in your rental car.</p>';
        userAGEtext.innerHTML = userAGE;
        document.getElementById("formCAR").style.visibility = "visible";
    } else {
        userAGE = '<p>Sorry but if you are younger than 18 or older than 100 you are unable to rent from us online.</p>';
        userAGEtext.innerHTML = userAGE;
    }
}

//Recommended car
function getUSERseat() {
    userAGEselect.value = Number(userAGEselect.value);
    userSEATselect.value = Math.abs(userSEATselect.value);

    //Allows valid car seats
    if (userSEATselect.value == 3) {
        userSEATselect.value = 4;
    }
    if (userSEATselect.value == 6) {
        userSEATselect.value = 7;
    }

    //What car is recommended
    if (userSEATselect.value >= 8) {
        userSEAT = '<p>Hello ' + userNAMEselect.value + ', the recommended car for you is the Estima, it has 8 seats.</p>';
        userSEATtext.innerHTML = userSEAT;
    } else if (userSEATselect.value == 1) {
        userSEAT = '<p>Hello ' + userNAMEselect.value + ', the recommended car for you is the BAC Mono, it has 1 seat.</p>';
        userSEATtext.innerHTML = userSEAT;
    } else {
        for (i = 0; i <= carSEAT.length; i++) {
            if (userSEATselect.value == carSEAT[i]) {
                userSEATchoices += cars[i] + ', ';
                numberUSERseats = carSEAT[i];
            }
        }
        userSEAT = '<p>Hello ' + userNAMEselect.value + ', the recommended cars for you are the ' + userSEATchoices + ' they have ' + numberUSERseats + ' seats. Below are the avalable cars at Bobs Rentals please select which one you would like.</p>';
        userSEATtext.innerHTML = userSEAT;
    }

    document.getElementById("carINFO").style.visibility = "visible";
}

//Once car image is pressed it selects it and unhides the rest of the form
function car0() {
    carSELECTED = 0;
    document.getElementById("formBOX").style.visibility = "visible";
    carANDtime();
}

function car1() {
    carSELECTED = 1;
    document.getElementById("formBOX").style.visibility = "visible";
    carANDtime();
}

function car2() {
    carSELECTED = 2;
    document.getElementById("formBOX").style.visibility = "visible";
    carANDtime();
}

function car3() {
    carSELECTED = 3;
    document.getElementById("formBOX").style.visibility = "visible";
    carANDtime();
}

function car4() {
    carSELECTED = 4;
    document.getElementById("formBOX").style.visibility = "visible";
    carANDtime();
}

function car5() {
    carSELECTED = 5;
    document.getElementById("formBOX").style.visibility = "visible";
    carANDtime();
}

function car6() {
    carSELECTED = 6;
    document.getElementById("formBOX").style.visibility = "visible";
    carANDtime();
}

function car7() {
    carSELECTED = 7;
    document.getElementById("formBOX").style.visibility = "visible";
    carANDtime();
}

function car8() {
    carSELECTED = 8;
    document.getElementById("formBOX").style.visibility = "visible";
    carANDtime();
}

//Selected car and rental time
function carANDtime() {
    userCARchoice = '<p>The car you have selected is the ' + cars[carSELECTED] + '</p>';
    userCARtext.innerHTML = userCARchoice;
    //'' changes it to html not js, like ""
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