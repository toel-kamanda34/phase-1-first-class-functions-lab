// Code your solution in this file!

const drivers = ['Antonia','Nuru','Amari','Mo'];

//function to return first two drivers
function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0,2);
}

//return last two
function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
}

//select drivers function
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

//function to create a fare multiplier
function createFareMultiplier(multiplier) {
    return function(fare) {
        return fare * multiplier;
    };
}
// Function to double the fare
const fareDoubler = createFareMultiplier(2);

//function to tripple the fare
const fareTripler = createFareMultiplier(3);

//function to select different drivers
function selectDifferentDrivers(drivers, selectingFunction) {
    return selectingFunction(drivers);
}
