// Write your solution in this file!

var customerName = "bob";

function upperCaseCustomerName() {
  return  customerName = customerName.toUpperCase();
}

var bestCustomer;
function setBestCustomer() {
   return bestCustomer = "not bob";
}
function overwriteBestCustomer(name) {
  return  bestCustomer = name;
}


const leastFavoriteCustomer = "Harry"
function changeLeastFavoriteCustomer(){
    return leastFavoriteCustomer = "billy";
}

console.log(changeLeastFavoriteCustomer());