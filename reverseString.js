"use strict";

let originalString = prompt("Type anything here:");
let newString = "";
let stringToAdd = "";

for (let i=originalString.length; i >= 1; i--) {
    stringToAdd = originalString[i-1];
    newString = newString + stringToAdd;
}

console.log(newString);