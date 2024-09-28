// Get references to the banner and message elements in the DOM
const banner = document.getElementById("banner");
const message = document.getElementById("message");

// Initialize the car count to 0
let count = 0;

// Function to update the banner with the current car count
const changeCount = () => banner.innerHTML = `Car Count: ${count}`;

// Function to display an error message when there are no cars to subtract
const errorMessage = () => message.innerHTML = "No Cars To Subtract";

// Function to display a message indicating whether a car was added or subtracted
const changeMessage = (action) => message.innerHTML = `One car was ${action}`;

// Function to add a car to the count and update the display
const add = () => {
  count += 1;
  changeCount();
  changeMessage("added");
};

// Function to subtract a car from the count if possible and update the display
const subtract = () => {
  if (count > 0) {
    count -= 1;
    changeCount();
    changeMessage("subtracted");
  } else {
    errorMessage();
  }
};

// Get references to the add and subtract buttons in the DOM
const buttonAdd = document.getElementById("add");
const buttonSubtract = document.getElementById("subtract");

// Add event listeners to the buttons to handle click events
buttonAdd.addEventListener("click", add);
buttonSubtract.addEventListener("click", subtract);
