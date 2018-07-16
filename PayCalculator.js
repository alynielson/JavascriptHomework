"use strict";

function calculateOvertimeHours(hoursFromUser) {
    let standardWorkWeek = 40;
    let OverTimeHours =  hoursFromUser - standardWorkWeek;
    return OverTimeHours;   
}

function calculateIfOvertime(hoursFromUser) {
    if (calculateOvertimeHours(hoursFromUser) > 0) {
        let didWorkOvertime = 1;
        return didWorkOvertime;
    }  
}

function calculateOvertimeRate(payFromUser,hoursFromUser) {
    let overtimeRate;
    if (calculateIfOvertime(hoursFromUser) === 1) {
        let overtimeMultiplier = 1.5;
        overtimeRate = payFromUser * overtimeMultiplier;
    }
    else {
        overtimeRate = 0;
    }
    return overtimeRate;
}

function calculateOvertimePay(payFromUser, hoursFromUser) {
    let overtimePay = calculateOvertimeRate(payFromUser, hoursFromUser) * calculateOvertimeHours(hoursFromUser);
    return overtimePay;
}

function calculateRegularPay(payFromUser, hoursFromUser) {
    let regularPay;
    if (calculateIfOvertime === 1) {
        let standardWorkWeek = 40;
        regularPay = standardWorkWeek * payFromUser;
    }
    else {
        regularPay = payFromUser * hoursFromUser;
    }
    return regularPay;
}

function calculateTotalPay() {

    let payFromUser = prompt("What is your regular pay per hour?");
    let hoursFromUser = prompt("How many hours did you work this week?");


    let totalPay = calculateRegularPay(payFromUser, hoursFromUser) + calculateOvertimePay(payFromUser, hoursFromUser);
    return totalPay;
}

function displayOutput() {
    console.log("Your pay for the week is: $" + calculateTotalPay() + ".");
}

displayOutput();



///// before using functions /////

// let regularRate = prompt("What is your regular pay per hour?");
// let hoursWorked = prompt("How many hours did you work this week?");
// let standardWorkWeek = 40;

// let payForWeek;

// if (hoursWorked > standardWorkWeek) {
//     let overtimeMultiplier = 1.5;
//     let overTimeHours = hoursWorked - standardWorkWeek;
//     let overTimeRate = regularRate * overtimeMultiplier;
//     payForWeek = (overTimeRate * overTimeHours) + (regularRate * 40);
// }

// else {
//     payForWeek = regularRate * hoursWorked;
// }

 
// console.log("Your pay for the week is: $" + payForWeek + ".");