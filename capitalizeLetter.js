"use strict";

function getStringFromUser() {
    let originalString = prompt("Type anything here:")
    return originalString;
}

function createNewString(originalString) {
    let addedString;
    let newString = "";
    for (let i=0; i <= (originalString.length-1); i++) {
        let letterAtIndex = originalString[i];
        if (i === 0) {
            addedString = letterAtIndex.toUpperCase();
        }
        else {
            let letterBeforeIndex = originalString[i-1];
            if (letterBeforeIndex === " ") {
                addedString = letterAtIndex.toUpperCase();
            } 
            else {
                addedString = letterAtIndex;
            }
        }
        newString = newString + addedString;
    }
    return newString;
}

function displayNewString(originalString) {
    originalString = getStringFromUser();
    console.log(createNewString(originalString));
}

displayNewString();