//Different paramters types example
// REMEMBER - Paramters are the INPUTS ----- RETURN are the OUTPUTS...............
console.log("Examples of different parameter types:");

//String Paramters
function greet(name){
    console.log("Hello, " + name + "!.");
}

//Number parameters
function calculateTotal(price, quantity){
    return price * quantity;
}

// Boolean parameter

function displayStatus(isActive){
    if (isActive){
        console.log("The system is active");
    } else{
        console.log("The system in Inactive")
    }
}

//Different return value types examples
console.log("Examples of different return value types:");

//return a number
function square(num){
    return num * num;
}

//return a string
function formatName(firstname,lastname){
    return lastName + ", " + firstName;
}

//return a boolean
function isAdult(age){
    return age >=18;
}
//--- Multiple functions to display the shopping card messages.........
//Greet User:
function greetUser(userName){
    console.log("Hello, ", userName);
}
//Calculate the total price
function calculateTotalPrice(price, quantity){
    return price * quantity;
}
// Display checkout status
function displayCheckoutStatus(readyForCheckout){
    if(readyForCheckout){
        console.log("Ready for checkout.");
    }else{
        console.log("Calculate total before proceeding to checkout");    
    }
}
// Now time to use the functions and see them in action

let userName = "Alice";
let price = 10.99;
let quantity = 3;

greetUser(userName);
console.log("Total price: £",calculateTotalPrice(price, quantity));
displayCheckoutStatus(true);

//Task 1: Creating Greetings ---- Let's create a function that combines a person's title and name into a greeting!
console.log("Task 1: Creating Greetings ---- Let's create a function that combines a person's title and name into a greeting!")

function createGreeting(title,firstname){
    console.log("Hello " + title + ". " + firstname);
}
//try the different greetings.
createGreeting("Mr", "James");
createGreeting("Dr", "Sarah");
createGreeting("Prof", "Chen");

//Task 2 - Task 2: Tip Calculator ----- See how default parameters can make functions more convenient!
console.log("Task 2 - Task 2: Tip Calculator ----- See how default parameters can make functions more convenient!");

function calculateTip(amount,tipPercent=15){
    let tip = amount * (tipPercent /100);
    console.log("Bill Amount: £" + amount);
    console.log("Tip Percentage: " + tipPercent + "%");
    console.log("Tip Amount: £" + tip.toFixed(2));
}
//try with and without specific tip percentage
calculateTip(50.45); // give only 1 paramters will use the default
calculateTip(50.34,22); // give 2 paramters will take the new value/.

//Task 3- Task 3: Price Formatter ----Create a function that formats prices with proper decimal places and currency symbols!
// Create a function that formats prices
// Parameters: price, currencySymbol, decimals
// Example output: $29.95 or €29.95
// Your code here:
// Test your function with different prices and currencies
console.log("Task 3- Task 3: Price Formatter ----Create a function that formats prices with proper decimal places and currency symbols!")
function formatPrice(price,currencySymbol = "£",decimals = 2){
    if (price < 0){
        console.log("Price cannot be negative");
    } else{
        let formatted= price.toFixed(decimals); 
        return currencySymbol + formatted; 
    }
}
// Try it out...
console.log(formatPrice(29.95));        // "$29.95"
console.log(formatPrice(29.95, "€"));   // "€29.95"
console.log(formatPrice(29.95, "£", 0)); // "£30"

// Task 4 - Create multiple functions that work together to process an order!
// Create these functions:
// 1. calculateSubtotal(price, quantity)
// 2. calculateShipping(subtotal, international = false)
// 3. calculateTotal(price, quantity, international)

console.log("Task 4- Task 3: Create multiple functions that work together to process an order!")
function calculateSubtotal(price, quantity) {
    if (price < 0 || quantity < 1) {
        return "Invalid price or quantity";
    }
    return price * quantity;
}

function calculateShipping(subtotal, international = false) {
    if (international) {
        // Replaced: subtotal > 100 ? 15 : 25;
        if (subtotal > 100) {
            return 15;
        } else {
            return 25;
        }
    }
    
    // Replaced: subtotal > 50 ? 0 : 10;
    if (subtotal > 50) {
        return 0;
    } else {
        return 10;
    }
}
function calculateTotal(price, quantity, international = false) {
    let subtotal = calculateSubtotal(price, quantity);
    let shipping = calculateShipping(subtotal, international);
    let total = subtotal + shipping;
    
    console.log("Subtotal: $" + subtotal);
    console.log("Shipping: $" + shipping);
    console.log("Total: $" + total);
}
// Test orders
calculateTotal(25, 2);           // Domestic order
calculateTotal(25, 2, true);     // International order


// Practice this function with 3 things
//Function to  yearly depreciation
//function for life unit factor
//function to combine this 2 functions to one function to get to the period deprciation

//function to  yearly depreciation
console.log("********************Task 5- Personal Lerning for Functions*******************************")
//Function to  yearly depreciation
function yearlyDepreciation (purchaseCost,totalLife){
    let purchCost = Number(purchaseCost);
    let totLife = Number(totalLife);
    //Validation input of purchase and total Life
    if(Number.isNaN(purchCost) || Number.isNaN(totLife)){
        throw "Purchase cost or Total Life must be a numeric value";
    }
    if(purchCost <= 0){
        throw "Purchase cost cannot be defined as Negative or defined as Zero";
    }
    if(totLife <= 0){
        throw "Total Life cannot be negative or defined as Zero."
    }else
        return purchCost/ totLife;
}

//function for life unit factor
function lifeUnitFactor (unitPeriod,totalUnit){
    let unitPer = Number(unitPeriod);
    let totUnit = Number(totalUnit);

    if (Number.isNaN(unitPer)){
        throw "Unit period should be defined as a number";
    }
    if (Number.isNaN(totUnit)){
        throw "Total Units should be defined as a Number"
    }
    if (!Number.isInteger(unitPer) || !Number.isInteger(totUnit)){
        throw "Unit or Total Unit need to be defined as a whole Number";
    } 
    if (unitPer <= 0 || totUnit <= 0){
        throw "Units or Total Units cannot be defined as Zero";
    }
    else{
       return unitPer / totUnit;
} 
    }
 
//function to combine this 2 functions to one function to get to the period deprciation
function periodDepreciation (purchaseCost,totalLife,unitPeriod = 1,totalUnit =12){
// Add a Try Catch Block to ctach any Other errors.
try{
    let yearlyDepreciationCalculated = yearlyDepreciation (purchaseCost,totalLife);
    let unitFactorCalculated = lifeUnitFactor (unitPeriod,totalUnit);
    let periodDepreciationCalculated = yearlyDepreciationCalculated * unitFactorCalculated;

    if (Number.isNaN(periodDepreciationCalculated)){
        throw "Final Period Depreciation Calculated results in figures being not a number";
    }
    
console.log("Yearly Depreciation Calculated: £" + yearlyDepreciationCalculated.toFixed(2));
console.log("Life Unit Factor Determined: " + unitFactorCalculated.toFixed(4));
console.log("Period Depreciation Calculated: £" + periodDepreciationCalculated.toFixed(2));
} catch(error){
    console.log("CRITICAL ERROR DETECTED: " + error);
}
}

//Time to test the code.........
periodDepreciation(1000,10,1,12);
periodDepreciation(1000,10);
periodDepreciation(0,10);
periodDepreciation(4000,0);

periodDepreciation("as",10);
periodDepreciation(4000,"as");
periodDepreciation(-1000,10,1,12);
periodDepreciation(1000,-10);
periodDepreciation(1000,10,"as",12);
periodDepreciation(1000,10,1,"as");
periodDepreciation(1000,10,1.3,12);
periodDepreciation(1000,10,1,12.1);
periodDepreciation(1000,10,0,12);
periodDepreciation(1000,10,1,0);
periodDepreciation(1000,10,-1,12);
periodDepreciation(1000,10,1,-1);
