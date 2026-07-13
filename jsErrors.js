//Error in Javascript
//Define variable for calculation:
let price = 29.99;
let tax = 0.07;

//Display total price

let totalPrice = price * tax;

// Syntax Errors - For example when you place the semicolon in the wrong place

console.log("Unit Price: £"+price);
console.log("Unit Price: £"+tax);
console.log("________________________________");
console.log("Unit Price: £"+totalPrice;);
console.log("________________________________");

//RunTime error - Defining something by zero? Can cause Infinity
let totalPrice = 50.99
let numItem = 0
//average price
let avgPrice = totalPrice / numItem
console.log("Average Price of item: £ " + avgPrice);

// //Logical Errors - Code runs but - 

let a = 5;
let b = 3;

console.log("Average without parenthesis: ", a + b /2);
console.log("Average withparenthesis: ", (a + b) /2);


//User Imput Errors - Can you use Try Catch Block....
let totalPrice = 50.99;
//let numItem = 2;

//show average price per item --BUT forgot to define numItem
try{
    let avgPrice = totalPrice / numItem
    console.log("Average Price per item £:" + avgPrice);
} catch (error){
        console.log("An Error occoured: " + error.message);
}

//Checking if correct data is defined - For example for an email address need @ sign
// See how the Includes Option was included with check if string has an @ sign

let emailAddress = "nitinhotmail.com";

if (!emailAddress){
    console.log("An Email Address is required to contunue");
} else if (!emailAddress.includes("@")){
    console.log("Email address must contain the @ symbol")
} else{
    console.log("Your email address is valid: " + emailAddress);
}



