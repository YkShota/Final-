/********* create variables *********/
let dailyRate = 35; // Default daily rate
let dayCounter = 0; // Counter for the number of selected days

/********* colour change days of the week *********/
function toggleDay(day) {
    const dayElement = document.getElementById(day);

    if (!dayElement.classList.contains("clicked")) {
        dayElement.classList.add("clicked");
        dayCounter++;
    } else {
        dayElement.classList.remove("clicked");
        dayCounter--;
    }

    calculateCost();
}

/********* clear days *********/
function clearDays() {
    const dayElements = document.querySelectorAll('.day-selector li');

    dayElements.forEach(day => {
        day.classList.remove("clicked");
    });

    dayCounter = 0;
    calculateCost();
}

/********* change rate *********/
function setHalfDay() {
    dailyRate = 20;
    document.getElementById("half").classList.add("clicked");
    document.getElementById("full").classList.remove("clicked");
    calculateCost();
}

function setFullDay() {
    dailyRate = 35;
    document.getElementById("full").classList.add("clicked");
    document.getElementById("half").classList.remove("clicked");
    calculateCost();
}

/********* calculate *********/
function calculateCost() {
    const calculatedCostElement = document.getElementById("calculated-cost");
    const totalCost = dailyRate * dayCounter;
    calculatedCostElement.innerHTML = totalCost;
}

/********* Event Listeners *********/
document.getElementById("clear-button").addEventListener("click", clearDays);
document.getElementById("half").addEventListener("click", setHalfDay);
document.getElementById("full").addEventListener("click", setFullDay);

const dayElements = document.querySelectorAll('.day-selector li');

dayElements.forEach(day => {
    day.addEventListener("click", function () {
        toggleDay(day.id);
    });
});
