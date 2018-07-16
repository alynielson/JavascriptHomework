"use strict";

function addTwoNumbers(currentNumber,previousNumber) {
    let nextNumber = currentNumber + previousNumber;
    return nextNumber;
}

function createSequence(firstNumber, endIndex) {
    let secondNumber = firstNumber;
    let index = 0;
    let sequence = [firstNumber,secondNumber];
    while (index <= endIndex) {
        sequence.push(addTwoNumbers(sequence[index],sequence[index+1]));
        index++;
    }
    return sequence;
}

function getHowLongToBuildSequence() {
    let sequenceLength = prompt("How many Fibonacci numbers would you like to see?")
    return sequenceLength;
}

function getWhereToStart() {
    let firstNumber = prompt("What number would you like to see first?")
    firstNumber = Number(firstNumber);
    return firstNumber;
}

function getWhereToEnd(sequenceLength) {
    let endIndex = Number(sequenceLength) - 3; //subtract 1 because index starts at 0, subtract 2 more for the first two repeat numbers - I guess there is a bug in the case that you only want 1 number?
    return endIndex;
}

function createSequenceBasedOnUserInput() {
    let firstNumber = getWhereToStart();
    let sequenceLength = getHowLongToBuildSequence(); 
    let endIndex = getWhereToEnd(sequenceLength);
    console.log(createSequence(firstNumber, endIndex))
}

createSequenceBasedOnUserInput();