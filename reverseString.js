"use strict";

function getTextFromUser() {
    let originalString = prompt("Type anything here:");
    return originalString;  
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

function displayReversedString(originalString) {
    originalString =  getTextFromUser();
    let reversedString = reverseString(originalString);
    console.log(reversedString);
}

displayReversedString();
