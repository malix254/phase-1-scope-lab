// Declare customerName to be "bob" in global scope using var keyword
var customerName = 'bob';

// Function to return the customerName
function returnCustomerName() {
  return customerName;
}

// Function to modify customerName to uppercase
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Function to set the best customer
function setBestCustomer() {
  bestCustomer = 'not bob'; // Declare bestCustomer in global scope and assign it
}

// Function to overwrite the best customer
function overwriteBestCustomer(newBestCustomer) {
  bestCustomer = newBestCustomer; // Changes the global variable bestCustomer
}

// Declare a constant in global scope called leastFavoriteCustomer
const leastFavoriteCustomer = 'someone';

// Function to change the least favorite customer
function changeLeastFavoriteCustomer(newLeastFavoriteCustomer) {
  throw new Error("Assignment to constant variable."); // Throws an error when attempting to change a constant
}
