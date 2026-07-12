// //basic "for" loop structure
// /*
//     for (Initialisation ; COndition ; Increment){
//         //Code to be executed for each iteration    
//     }
// */
console.log("********** SIMPLY LOOP CONDITIONS************INITIALISATION....CONDITION; INCREMENTATION{code}*************")

for (let i=1; i<=5; i++){
    console.log("count: " +i);
}

// //WHILE Loop --- Basic While Loop structure

// /*
//  while(condition){
//     //code to be executed for each iteration
//  }
//     increment;
// */
// // Do not know how many times do you need to repeat an action...................
console.log("********** WHILE LOOP CONDITIONS*********INitialised First Always***while(condition){code}increment*************")
console.log("Starting task with the while loop....")

let taskNum = 1;

while(taskNum <=5){
    console.log("Task: " + taskNum + " Completed");
    taskNum++ // DO NOT FORGET TO ADD THIS OTHERWISR ---- INFINETE LOOP....................
}
console.log("All Tasks have been Completed!")

// //Task 1: Basic Counting - Let's create a program that counts numbers and prints them to the screen!

// count from 1 to 5
console.log("********** TASK 1 - Basic Counting - Let's create a program that counts numbers and prints them to the screen!***************")
console.log("********** TASK 1 - RULES ---- INTIATISE THE LOOP; CONDITION : INCREMENTATION __++**************")

for (let count = 1; count <=10; count++){
    console.log("COunt: " +count);
}
console.log("Counting Completed!!!");

// //Task 2: Reaching a Target - Let's use a while loop to keep adding numbers until we reach a target!
// // Keep adding numbers until we reach 10
console.log("********** TASK 2 - Reaching a Target - Let's use a while loop to keep adding numbers until we reach a target!***************")
let sum = 0;
let target = 10;
let iterations = 0;

while(sum <= target){
    sum = sum + 1;
    iterations++;
    console.log("Sum in now: " + sum);
}
console.log("Reached the Target!!!");
console.log("Loop ran for " + iterations + "times");

// //Task 3: Smart Counting - Now it's your turn! Create a program that counts to 10 but shows a special message at specific numbers.
// // Write a loop that counts to 10
// // Add an if/else to show "Halfway!" at 5
// // Your code here:
// // Don't forget a completion message!
console.log("********** TASK 3 - Now it's your turn! Create a program that counts to 10 but shows a special message at specific numbers.***************")
let numCount = 1
for (numCount; numCount <=10 ; numCount++){
    //// Add an if/else to show "Halfway!" at 5
    if (numCount ===5){
        console.log("Halfway there!!!" + numCount);
    } else{
        console.log("Number Count: " +numCount);
    }
}
console.log("All Count Completed!!!!");

// //Task 4: Even Number Checker - Let's learn about the % operator and use it to find even numbers!
// console.log("********** Task 4: Even Number Checker - Let's learn about the % operator and use it to find even numbers!***************")
// // The % operator gives you the remainder after division
// // Example: 5 % 2 equals 1 (5 divided by 2 equals 2 with remainder 1)
// // Even numbers have a remainder of 0 when divided by 2
// // Write a loop to find even numbers from 1 to 6
// // Your code here:
// // Don't forget to show how many even numbers were found!
console.log("Task 4: Even Number Checker - Let's learn about the % operator and use it to find even numbers!");
let origNum = 1;
let finishNum = 6;
let counterNum = 0;

for (origNum; origNum <= 6; origNum++){
  let remainNum = origNum % 2;   
    if(remainNum ===0){
        console.log(origNum + " Is Even");
    counterNum++
    } 
}
console.log("Found " + counterNum + " even numbers");


// // EXTRA FOR COPILOT 

// // A real cart containing items and their actual prices
// let cart = [
//     { name: "Laptop", price: 999 },
//     { name: "Mouse", price: 25 },
//     { name: "Keyboard", price: 75 }
// ];

// let total = 0;

// // Loop through the known number of items in the cart
// // LENGTH--- Is the number of item is Arrar - in this case it is 3.
// for (let i = 0; i < cart.length; i++) {
//     // Access the 'price' property of the current item directly
//     total += cart[i].price; 
// }

// console.log("Your total is: $" + total); 
// // Output: Your total is: $1099


console.log("---------------My Walking Time--------------------------------------------")
let walkingTime = 0;
let finishTime = 10;
for(walkingTime; walkingTime <=finishTime;walkingTime++){
    console.log("I have now walked for: " + walkingTime + " Minutes");
}
console.log("I have finished walking for the day and completed my " + finishTime + " Minutes" );


console.log("---------------My emails-------------------------------------------")
let email = 1;
let totalTargetEmails = 20;

for(email; email <=totalTargetEmails;email++){
    console.log("I have Completed email No: " + email);
}
console.log("I have finished reviewing my Target emails " + totalTargetEmails);

// console.log("--------------Basketball Example ---- Attempts and in net-------, once in net gets to 5 stop and count both")
// let attempts = 0;
// let getInNet = false;
// let maxAttemptsAllowed = 20; // The maximum shots allowed

// while (getInNet === false && attempts <maxAttemptsAllowed){
//     attempts++ // Try another attempt  
//     console.log("Number of tries done number: " + attempts);
//     //Need to force the ball to go in after 3rd shots in net - I guess
//         if (attempts === 3){
//             getInNet = true; // Change to true condition
//         }
//         if (getInNet = true){
//              console.log("Got it in the net");   
//         } else
//             console.log("Gave is now over - attempts used up");
// }


// let studySessions = 0;
// let feelsConfident = false; // Starts as false

// // Keep studying as long as we do not feel confident yet
// while (feelsConfident === false) {
//     studySessions++; // Completed another study session
//     console.log("Completed study session number: " + studySessions);

//     //  after 4 it will happen
//     if (studySessions === 4) {
//         feelsConfident = true; // This stops the loop on the next check!
//     }
// }

// // Outside the loop: The result once you are done
// console.log("Ready for the exam! Total sessions needed: " + studySessions);


console.log("*********PRODUCT CHECKER****USING MULTIPICATION**************")
let product = 1;
for (let i = 1; i <= 4; i++) {
    product *= i;
}
console.log(product);