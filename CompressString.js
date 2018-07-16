"use strict";


function compressString(string) {
    string = prompt("Type anything here:");
    let addedString = "";

    let i = 0;
    while (i <= (string.length-1)) {
        let sameCharCount = 1;
        for (let j=i; string[j] === string[j+1]; j++) {
            sameCharCount ++;
            i ++;
        }
        addedString = addedString + sameCharCount.toString() + string[i];
        i ++;
    }

    return addedString;
}
console.log(compressString());







