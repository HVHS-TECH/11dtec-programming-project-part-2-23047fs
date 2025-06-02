/********************************
Name of task: Rental Car 
Author: Finley
Date: Term 2
********************************/
console.log("Running car_rentals.js");

//Variables
const rentalPRICE = 50;
let userNAME;
let userNAMEinvalid = true;
let userAGE = 0;
let userAGEinvalid = true;
//let userLICENCE = false;
let userCARvariables = 0;
let userCARvariablesINVALID = true;
let userCAR = 0;
let userRECOMMENDEDcar;
let userCARdays = 0;
let userCARdaysINVALID = true;
let userTOTALprice;
let userCARDnumber;
let avalableCARS;

//Arrays
let cars = ["BAC Mono", "MX5", "Mini", "Falcon", "Outlander", "Estima"];
let carSEATS = [1, 2, 4, 5, 7, 8];

/********************************
Main code
********************************/
function autoSTART() {
    displayAVALABLEcars();
    console.log("running auto start");
}

function start() {
    userWELCOME();
    //userLICENCEcheck();
    findUSERcar();
    userCARdaysANDprice();
    userFINALcheck();
    checkVARIABLES();
}

/********************************
Functions
********************************/
//Welcomes user, user name, user age
function displayAVALABLEcars() {
    for (i = 0; i < cars.length; i++) {
        avalableCARS = `${avalableCARS} <br> \nCar ${(i + 1)} is ${cars[i]} it has ${carSEATS[i]} seats`;
    }
    //`` makes it html and ${} turns it back to javascript
    document.getElementById("avalableCARS").innerHTML = avalableCARS;
    console.log(avalableCARS);
}


function userWELCOME() {
    userNAME = prompt("Hello, what is your name");
    while (userNAMEinvalid == true) {
        if (userNAME == null || userNAME == "" || userNAME == " " || !isNaN(userNAME)) {
            userNAME = prompt("Invalid, what is your name");
        }
        else {
            userNAMEinvalid = false;
        }
    }
    //Validates user name and traps user until a valid name
    userAGE = prompt("Hello " + userNAME + ", what is your age");
    //Asks user name and age
    while (userAGEinvalid == true) {
        if (userAGE == null || userAGE == "" || userAGE == " " || userAGE < 16 || isNaN(userAGE)) {
            userAGE = prompt("Invalid, what is your age");
        }
        else {
            userAGEinvalid = false;
        }
    }
    userAGE = Number(userAGE);
    //Converts string to number
}

/*
function userLICENCEcheck() {
   if (userAGE == 16) {
       userLICENCE = prompt("Please verify if you have a licence, true or false");
   } else if (userAGE > 16) {
       userLICENCE = true;
   } else if (userAGE <= 15) {
       alert("Sorry but you can't have a car");
       userLICENCE = false;
   }
//Checks if user has a licence
}
*/
//Can't abort yet so it is redundant

//What car, seats
function findUSERcar() {
    userCARvariables = prompt(userNAME + " what would be the ideal number of seats in your vehicle (1-8)");
    while (userCARvariablesINVALID == true) {
        if (userCARvariables == null || userCARvariables == "" || userCARvariables == " " || userCARvariables < 1 || userCARvariables >= 9 || isNaN(userCARvariables)) {
            userCARvariables = prompt("Invalid, what would be the ideal number of seats in your vehicle (1-8)");
        }
        else {
            userCARvariablesINVALID = false;
        }
    }
    userCARvariables = userCARvariables - 1;
    if (userCARvariables >= 3 && userCARvariables < 6) {
        userCARvariables = userCARvariables - 1;
    } else if (userCARvariables >= 5) {
        userCARvariables = userCARvariables - 2;
    }
    //Calculates what seat and it is (prob complicated because of me and it goes 1,2,4,5,7,8 and it starts at 0)
    //If req seats are 3 or 6 they round up one
    userRECOMMENDEDcar = cars[userCARvariables];
    //Finds recommended car
    alert("The recommended car that meets your requirements is " + cars[userCARvariables] + ", it has " + carSEATS[userCARvariables] + " seats");
    //Tells user recommended car and its number of seats
}

//Number of days, price, card
function userCARdaysANDprice() {
    alert("Hello " + userNAME + " at Rob's Rentals the price is $50 per number of seats per day");
    userCARdays = prompt("How many days would you like to use a " + cars[userCARvariables]);
    while (userCARdaysINVALID == true) {
        if (userCARdays == null || userCARdays == "" || userCARdays == " " || userCARdays < 1 || isNaN(userCARdays)) {
            userCARdays = prompt("Invalid, How many days would you like to use a " + cars[userCARvariables]);
        }
        else {
            userCARdaysINVALID = false;
        }
    }
    userCARdays = Number(userCARdays);
    //Converts string to number
    userCARvariables = userCARvariables + 1;
    if (userCARvariables >= 3 && userCARvariables < 5) {
        userCARvariables = userCARvariables + 1;
    } else if (userCARvariables >= 5) {
        userCARvariables = userCARvariables + 2;
    }
    //Fixes the money calculation promblem
    userTOTALprice = userCARdays * userCARvariables * rentalPRICE;
    console.log("check " + userCARvariables);
    //Calculates price day * car seats + 1 (cause - 1 for arrays) * rental price
    userCARDnumber = prompt("The total cost for " + userCARdays + " days is $" + userTOTALprice + ". Please input your card number");
}

//Final check
function userFINALcheck() {
    alert("You have been assigned the " + cars[userCARvariables] + " for " + userCARdays + " days, the total cost is $" + userTOTALprice);
    //Final check with user
}

//Displays variables
function checkVARIABLES() {
    console.log(userNAME);
    console.log(userAGE);
    //console.log(userLICENCE);
    console.log(userCARvariables);
    console.log(userRECOMMENDEDcar);
    console.log(userCARdays);
    console.log(rentalPRICE);
    console.log(userTOTALprice);
    console.log(userCARDnumber);
//Easy to check if info is right
}