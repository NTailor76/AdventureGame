//Functions Anatomy Diagram

//1. Function Declaration

function greet(name){      // <-- Function Name: ' greet', parameter: 'name'
    //2. Functiona Body
    const message = "Hello, " + name + " ! ";  // <-- Logic: Creates a greeting
   //3. Returns Statement
   return message;                // <--- Returns the result to whereever 

}                                 // <--- The func is called.

//Example Usage

console.log(greet("Alice"));     //Output: Hello, Alice !


// Lets try a example for greating
//User Greeting

//Function to greet
function greetUser(userName){
    console.log("Hello, ", userName );
}

// Call the function directly
let userName = "Alice"
greetUser(userName);

// Calculate the ares of a Rectangle

function calculateRectangleArea(height,width){
    return height * width
}

// Root1: 10 X 15
console.log("Area of Room 1 (10 X 15): ", calculateRectangleArea(10,15));
// Root1: 10 X 15
console.log("Area of Room 2 (22 X 15): ", calculateRectangleArea(22,15));
// Root1: 10 X 15
console.log("Area of Room 3 (22 X 1534): ", calculateRectangleArea(22,1534));

//***************************************************************************************************** */

//*******Task 1: Square Number Calculator - Let's create our first function that squares a number (multiplies it by itself)! */
console.log("**********Task 1: Square Number Calculator******************")

function squareNumber(num){
    console.log("The square of " + num + " is: " +(num * num));
}
//Use the functional
squareNumber(4);
squareNumber(5);
squareNumber(10);
squareNumber(0);
squareNumber(1);

//Task 2: Temperature Converter - See how functions can make calculations more flexible!
// Convert Fahrenheit to Celsius
console.log("*********Task 2: Temperature Converter - See how functions can make calculations more flexible!***************");

function convertToCelsius(fahrenheit){
    let celsius = (fahrenheit -32) * 5/9;
    celsius = Math.round(celsius)
    console.log(fahrenheit + "°F equals " + celsius + "°C");
}
// Try some conversion
convertToCelsius(38.433);  // Freezing point
convertToCelsius(-40); // Boiling point


//Task 3: Now create your own function that calculates the area of a rectangle!
console.log("*********Task 3: Now create your own function that calculates the area of a rectangle!***************");

function areaRectangle(length, width){
//    console.log( length * width);
    return length * width; 
}
//Run the function
console.log("Area of Rectangle (10 X 15): ", areaRectangle(10,15));
console.log("Area of Rectangle (4 X 4): ", areaRectangle(4,4));

// ANother Example with Retunr functions
console.log("*********RETURN FUNCTIONS***************");
// Another Example with Return functions
console.log("*********RETURN FUNCTIONS***************");

function multipleNumbers(a, b) {
  return a * b;  // This sends the sum back instead of printing it
}

// Define the two distinct dimensions before using them
let length = "bob";
let width = 14;

try{

let sum = multipleNumbers(length, width);  // The returned value is stored in sum

if (isNaN(length) || isNaN(widgth)){
    throw "Length or Width needs to be number";
}

if (length === width || length < width) {
    console.log("length is less than width or both are same");
} else {
    console.log("The sum is: " + sum);  // Now we can use that value
}
} catch(error){
    console.log("Error: " + error);
}

//Working with Decimal Numbers
/*When dealing with money calculations like tips, we need to handle decimal numbers properly.

Rounding Decimal Numbers
JavaScript provides several methods to round numbers to a specific number of decimal places. */

// Start with .toFixed() method.
console.log("************* USING .toFixed() **************************")

let price = 10.46784;
console.log(price.toFixed(2));

// Now lets try .round() method
//Math.round() rounds a number to the nearest integer, with .5 rounding up.
console.log(Math.round(price));

//Rounding Trick....... Multiple by 100, divide by 100 with Math.round()

let roundPrice = Math.round(price *100) /100;
let roundThreePrice = Math.round(price * 1000) /1000;

console.log(roundPrice);
console.log(roundThreePrice);

//Common Money Formatting Techniques
/*
Formatting Currency Values
For currency values, typically use 2 decimal places and add the currency symbol as a prefix.
*/
//formate as currency with Tofixed()
console.log("Formated Currency****************")
let amount = 49.99999;
let formatted = "£" + amount.toFixed(2);
console.log(formatted);

//Handling Different Currencies
//The same technique works for any currency symbol - just change the symbol at the beginning of the string.

let euroAmount = 29.95;
let euroFormatted = "€" + euroAmount.toFixed(2);
console.log(euroFormatted);

//Task 4: Price Calculator - Create two functions that work together to calculate total price with tax!
// Create these two functions:
// 1. calculateTax(price) - returns the tax amount (10% of price)
console.log("***********DOuble Functions**********************")
  //  let price = 50;
    let taxAmountPercentage = 10 / 100;
    function calculateTax(priceF){
        return priceF = priceF * taxAmountPercentage;
    }
// 2. calculateTotal(price) - uses calculateTax() to return price + tax
    function calculateTotal(priceF){
        let tax = calculateTax(priceF);
        let total = priceF + tax;
        return total;
    }
 let priceF = 50; 
 let tax = calculateTax(priceF);
 let total = calculateTotal(priceF); 
console.log("Price: £" + priceF.toFixed(2));
console.log("tax: £" + tax.toFixed(2));
console.log("Total: £" + total.toFixed(2));


// Your code here:
// Test your functions with a $50 item

console.log("***********Practice Double function**********************")
let unitprice = 50;
let discountRate = 10 / 100; //10% discount

function calculateUnitPriceDiscount(priceL){
    return priceL * discountRate;
}
function calculateunitPriceTotal(unitprice,discount){
    return unitprice - discount; 
}

let unitpricediscountcalculated = calculateUnitPriceDiscount(unitprice);
let totalPriceAfterDiscount = calculateunitPriceTotal(unitprice,unitpricediscountcalculated);

console.log("Price: £" + unitprice);
console.log("Price discounted: £" + unitpricediscountcalculated);
console.log("Total Price: £" + totalPriceAfterDiscount);

console.log("***********Practice Single function**********************")
let unitpriceItem = 50;
let discountRategiven = 10 / 100; //10% discount

function calculateTotalPriceDiscounted(priceL,discountRate){
    return (priceL - (priceL * discountRate));
}
let totalPriceAfterDiscountFinal = calculateTotalPriceDiscounted(unitpriceItem,discountRategiven);
console.log("Price: £" + totalPriceAfterDiscountFinal);





function multiplyInputs(a, b) {
    return a * b;
}
console.log("when values are 4*5: result = ",multiplyInputs(4,5));
console.log("when values are 23*7: result = " ,multiplyInputs(23,7));
console.log("when values are 0*7: result = ",multiplyInputs(0,7));

// Implement the function below
function greet(name) {
    return name
}
let name = "World";
console.log("Hello,"+name + "!.")
