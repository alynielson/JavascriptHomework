"use strict";

function getNumberFromUser() {
    let numberFromUser = prompt("Enter a positive integer:");
    return numberFromUser;
}

function turnNumberToString(anyNumber) {
    let numberAsString = anyNumber.toString();
    return numberAsString;
}

function createSquaredDigitArray(string) {
    let i = 0;
    let squaredDigitArray = [];
    while (i <= (string.length - 1)) {
        let digit = Number(string[i]);
        let digit_squared = Math.pow(digit,2);
        squaredDigitArray.push(digit_squared);    
        i++;
    }
    return squaredDigitArray;
}

function addArrayTogether(array) {
    let i = 0;
    let sum = 0;
    while (i <= (array.length-1)) {
        sum = sum + array[i];
        i++;
    }
    return sum;
}

function checkIfSumIs1(sumOfSquaredDigits) {
    let sumIs1;
    if (sumOfSquaredDigits === 1) {
        sumIs1 = true;
    } 
    else {
        sumIs1 = false;
    }
    return sumIs1;
}

function checkArrayOfSumsForDuplicates(sumOfSquaredDigits,arrayOfSums) {
    let containsRepeats;
    if (arrayOfSums.includes(sumOfSquaredDigits,0) === true) {
        containsRepeats = true;
    }
    else {
        containsRepeats = false;
    }
    return containsRepeats;
}

function addToArrayOfSums(arrayOfSums,sumOfSquaredDigits) {
    arrayOfSums.push(sumOfSquaredDigits);
    return(arrayOfSums);
}

function doHappyNumberMath(anyNumber) {
    let string = turnNumberToString(anyNumber);
    let squaredDigitArray = createSquaredDigitArray(string);
    let sumOfSquaredDigits = addArrayTogether(squaredDigitArray);
    return sumOfSquaredDigits;
}

function checkIfHappyNumber(sumOfSquaredDigits,arrayOfSums) {
    let isHappyNumber;
    if (checkIfSumIs1(sumOfSquaredDigits) === true) {
        isHappyNumber = true;
        return isHappyNumber;
    }
    else {
        if (checkArrayOfSumsForDuplicates(sumOfSquaredDigits,arrayOfSums) === true) {
            isHappyNumber = false;
            return isHappyNumber;
        }
        else {
            arrayOfSums = addToArrayOfSums(arrayOfSums,sumOfSquaredDigits);
        }
    }
}

function displayResult() {
    let anyNumber = getNumberFromUser();
    let arrayOfSums = [];
    let sumOfSquaredDigits = doHappyNumberMath(anyNumber);
    while (checkIfHappyNumber(sumOfSquaredDigits,arrayOfSums) === undefined) {
        sumOfSquaredDigits = doHappyNumberMath(sumOfSquaredDigits);
    }
    if (checkIfHappyNumber(sumOfSquaredDigits,arrayOfSums) === true) {
        console.log("Your number is happy!");
    }
    else if (checkIfHappyNumber(sumOfSquaredDigits,arrayOfSums) === false) {
        console.log("Your number is not happy!");
    }
}

displayResult();



