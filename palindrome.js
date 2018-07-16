"use strict";

function getStringFromUser() { //also lowercases all letters so it won't care whether or not any letter is capitalized
    let originalString = prompt ("Type anything here:");
    return originalString.toLowerCase();
}

function reverseString(originalString) {
    let newString = "";
    let stringToAdd = "";

    for (let i=originalString.length; i >= 1; i--) {
        stringToAdd = originalString[i-1];
        newString = newString + stringToAdd;
    }

    return newString;  
}

function checkIfPalindrome(stringToCheck) {
    stringToCheck = getStringFromUser();
    if (stringToCheck === reverseString(stringToCheck)) {
        return true;
    }
    else {
        return false;
    }
}

function displayMessage(stringToCheck) {
    if (checkIfPalindrome(stringToCheck) === true) {
        console.log("The string you entered is a palindrome!");
    }
    else {
    console.log("The string you entered is NOT a palindrome!");
    }
}

displayMessage();