"use strict";

function checkIfNumberIsDivisible(anyNumber, multiple) {
    if (anyNumber % multiple === 0) {
        return true;
    }
    else {
        return false;
    }
}

function createSequenceOfIntegersToCheck(anyNumber) {
    let squareRootOfN = Math.pow(anyNumber, 0.5);
    let highestIntToCheck = Math.floor(squareRootOfN);
    let sequenceOfIntegersToCheck = []; 
    for (let i = 2; i <= highestIntToCheck; i++ ) {
        sequenceOfIntegersToCheck.push(i);
    }
    return sequenceOfIntegersToCheck;
}

function checkIfNumberIsPrime(anyNumber) {
    let isPrime;
    if (anyNumber === (2 || 3)) {
        isPrime = true;
    }
    else {
        let keepChecking = true;
        let i = 0;
        let sequence = createSequenceOfIntegersToCheck(anyNumber);
        while ((i <= sequence.length) && (keepChecking === true)) {
            if (checkIfNumberIsDivisible(anyNumber,sequence[i]) === true) {
                isPrime = false;
                keepChecking = false;
            }
            else {
                keepChecking = true;
            }
            i++;
        }
        if (keepChecking === true) {
            isPrime = true;
        }
    }
    return isPrime;
}

function createArrayOf100Numbers() {
    let arrayOf100Numbers = [];
    for (let i=2; i <= 100; i++) {
        arrayOf100Numbers.push(i);
    }
    return arrayOf100Numbers;
}

function createListOfPrimeNumbers(arrayOf100Numbers) {
    let listOfPrimeNumbers = []; 
    for (let i = 0; i <= arrayOf100Numbers.length -1; i++) {
        let numberIsPrime;
        numberIsPrime = checkIfNumberIsPrime(arrayOf100Numbers[i]);
        if (numberIsPrime === true) {
            listOfPrimeNumbers.push(arrayOf100Numbers[i]);
        }
    }
    return listOfPrimeNumbers;
}

function displayListOfPrimeNumbers() {
    let arrayOf100Numbers = createArrayOf100Numbers();
    let listOfPrimeNumbers = createListOfPrimeNumbers(arrayOf100Numbers);
    return listOfPrimeNumbers;
}

console.log(displayListOfPrimeNumbers());