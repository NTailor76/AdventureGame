//Basic conditional Statements
// IF Only condition


// IF ELSE CONDITION -- If logged in try - Show Message, if false other message
 let userLoggedIn = true;

if (userLoggedIn){
    console.log("Welcome back! Proceeds to the checkout");
} else{
    console.log("Please log In to continue to checkout");   
}

//Multiple Conditions
//Is the user logged in?
//How many items in the Cart?

let MultiuserLoggedIn = true;
let numberOfItems = 1;

if (!MultiuserLoggedIn){
    console.log("Please log in to continue to checkout.");
} else if(numberOfItems === 0){
    console.log("Your cart is empty. Add Items before Checkout");
}else{
    console.log("Welcome Back! - Proceeding to checkout " + numberOfItems + " Items");
}


// Switch Statements.... Multiple Selections.
console.log("------------SWITCH PROCESS----------------------------");
let MenuSelection = 2;

switch(MenuSelection) {
    case 1:
        console.log("Selected: View Profile");
        break;
    case 2:
        console.log("Selected: Account Settings");
        break;
    case 3:
        console.log("Selected: Logout");
        break;
    default:
        console.log("Invalid Selection: Please choose 1-3.");
}

console.log("--------PRACTICE 1 MORE SWITCH*********************************")
let transport = "lorry"
let passengerNum = 7;

switch(transport){
    case "cars":
        console.log("*******I am traveling by Car*******") 
        if(passengerNum <= 1){
            console.log("Its only me traveling today")
        } else if(passengerNum >1 && passengerNum <3){
            console.log("We are a family of " + passengerNum)
        } else
            console.log("We are a party of many " + passengerNum)
        break;
    case "lorry":
        console.log("*******I am traveling by Lorry*******") 
        if(passengerNum <= 3){
            console.log("Its only me traveling today")
        } else if(passengerNum >3 && passengerNum <=6){
            console.log("We are a family of " + passengerNum)
        } else
            console.log("We are a party of many many " + passengerNum)
        break;        
    default:
        console.log("I am not traveling today or you have not defined the transport Type Properly")
}

//Task 1: Age Verification - Let's create a simple age verification system for a website.
//User's age
let age = 17;
// Check if user is old enough
if (age >=13){
    console.log("Welcome! You can access the Website. ");
} else{
    console.log("You are under age to access the website. ");
}

//Understanding Comparison and Logical Operators
/*
Before creating our login system, let's understand some important operators:

**************************COMPARISON OOPERATOR**********************************************************************************
Comparison operators let you test if values are equal, different, greater than, or less than each other:
In JavaScript, "==" performs type coercion, comparing values after converting them to a common type, 
while "===" is a strict equality operator that compares both value and type without conversion. 
Similarly, "!=" is the loose inequality operator that allows type conversion, 
whereas "!==" is the strict inequality operator that checks both different values and different types. 
We'll primarily use "===" and "!==" because they prevent unexpected behavior by ensuring exact matches of both value and type, 
which helps avoid subtle bugs and makes code more reliable and predictable
*********************************************************************************************************************************
*/
// Equal to (==) - Compares values but not types --- ONLY 2 EQUALS - VALUE, NOT TYPE
// Strict equal to (===) Compares both values and types --- 3 EQUALS - VALUE and TYPE AS WELL
// Not equal to (!=) and strictly not equal (!==) --- NOT EQUAL ! ---> 1 EQUAL - VALUE ; 2 EQUAL - STRICT - REVERSE LOGIC
console.log("*******************COMPARISON OOPERATOR*************************************")

console.log(5=="5");// true (different types but same value)
console.log(5==="5"); // false (different types)
console.log(5===5);  // true (same type and value)

console.log(5 !="5");
console.log(5 !=="5");

//LOGICAL OPERATORS***********************************************************************************************************
//Logical operators allow you to combine multiple conditions and determine if statements are true or false:
console.log("*****************************************LOGICAL OPERATORS*******************************************");
// AND(&&) ---- Both conditions must be true
console.log("-----------// AND(&&) ---- Both conditions must be true--------------------");
console.log(true && false); // False
console.log(true && true); // True

// //OR(||) --- At least one condition must be true
console.log("--------------//OR(||) --- At least one condition must be true--------");
console.log(true || false);
console.log(true || true);

// //// NOT (!) - Inverts the value
console.log("---------------// NOT (!) - Inverts the value------------------------");
console.log(!true); //false
console.log(!false); //True

//COMBINING OPERATORS**********************************************************************************************************
console.log("********************************************COMBINING OPERATORS*******************************************************");
//Check username and password
let correctUsername = "student123";
let correctPassword = "pass123";

//Both must be true to login successfully.
let loginSuccesscom = (correctUsername ==="student123") && (correctPassword ==="pass123");
console.log("login Successful: " + loginSuccesscom); //True

//Task 2: Login Validation
//Let's create a login system that checks username and password.
let userName = "student123";
let password = "learn2024";

let loginSuccesscomlg = (userName === "student123") && (password === "learn2024");

if (loginSuccesscomlg){
    console.log("Login Successful to the Website: " + userName + " Welcome");
} else{
    console.log("Failed to login Successfully - FAILED");
}


// Task 3: Shipping Calculator
// Create a shipping cost calculator based on order total and destination.
// Order Information

console.log("*********************SHIPPING CALCULATOR****************************************************************")

let orderTotal = 15;
let destination = "domestic";
let shippingCost = 0;
//let TotalCost = orderTotal +  shippingCost;

if (destination ==="domestic"){
    if (orderTotal > 50){
            shippingCost = 0;
    }
    else if (orderTotal >=25 && orderTotal <=50){
            shippingCost = 5;
    }
    else if (orderTotal <25){
            shippingCost = 25;
    }
    }
if (destination ==="International"){
    if (orderTotal > 100){
            shippingCost = 0;
    }
    else if (orderTotal >=50 && orderTotal <=100){
            shippingCost = 15;
        //console.log("Total Cost of Item: £" + TotalCost )
    }
    else if (orderTotal <50){
            shippingCost = 25;
    }
    }
    let TotalCost = orderTotal +  shippingCost;
    console.log("----------Destination Selected-------" +destination  )
    console.log("Costs of Item: £" + orderTotal);
    console.log("Shippling Cost: £" + shippingCost);
    console.log("---------------------------------------")
    console.log("Total Cost of Item: £" + TotalCost);
    console.log("---------------------------------------")

//Task 4: Menu System
//Create a menu system for a restaurant ordering app.

let menuItem = "burger";
let price = 0;
let preparationTime = 0;
let validItemSelected = true;
let Ingredients = "";

switch (menuItem){
    case "burger":
        price = 10;
        preparationTime = 15;
        Ingredients = "Ingredients: beef patty, lettuce, tomato, cheese";
        break;
    case "pizza":
        price = 12;
        preparationTime = 20;
        Ingredients = "Ingredients: dough, tomato sauce, cheese, toppings";
        break;
    case "salad":
        price = 8;
        preparationTime = 10;
        Ingredients = "Ingredients: dough, tomato sauce, cheese, toppings";
        break;     
    default :
        console.log("Ingredients: mixed greens, tomatoes, cucumber, dressing");
        validItemSelected=false;
}
if (validItemSelected){
console.log("Menu Item Selected:"+menuItem )
console.log("Price: £" + price);
console.log("Preparation Time:" + preparationTime +" Minutes");
console.log(Ingredients);
}

//Decide on my journal with Time and COst
let journeyTime = 35;
let journeyCost = 55;

if ((journeyTime <20) && (journeyCost>=10 && journeyCost<=20)){
    console.log("Take the train for my journal today" + "This will cost me £" +journeyCost );
} else if((journeyTime <30) && (journeyCost>=20 && journeyCost<30)){
    console.log("Take the bus for my journal today" + "This will cost me £" +journeyCost );
} else if((journeyTime <40) &&(journeyCost>=30 && journeyCost<=40)){
    console.log("Need to use the Bicycle for the journal today"  + "This will cost me £" +journeyCost);
} else{
    console.log("Need to suffer and walk today as £" + journeyCost +" . This is too much to pay for journey" );
}

let playerScore = 10
if (playerScore >=100){
    console.log("You Win!");
}else
    console.log("Try Again!");
//Direction with Switch Statement
let direction = "west";
switch(direction){
    case "north":
        console.log("You head towards the mountains");
        break;
     case "south":
        console.log("You travel to the sea");
        break;
     case "east":
        console.log("You enter the forest");
        break;
     case "west":
        console.log("You approach the desert"); 
        break; 
    default :
        console.log("Invalid direction!");
}





