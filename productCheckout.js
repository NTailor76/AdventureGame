// Organisation code by grouping related functions together
//Section 1: Product Information Functions
//These functions hanle getting product Information

//Get product name based on product ID

//Task 1: Organizing Related Functions - Look at these calculation functions and see how organization can make code easier to understand!

// --- Calculator Functions ---
// Functions for basic math operations
// Add two numbers
//console.log("Task 1: Organizing Related Functions - Look at these calculation functions and see how organization can make code easier to understand!");

// function addNumbers(addNum1, addNum2) {
//     return addNum1 + addNum2;
// }
// // Subtract two numbers

// function subtractNumbers(subtractNum1, subtractNum2) {
//     return subtractNum1 - subtractNum2;
// }
// // Multiply two numbers

// function multiplyNumbers(MultipleNum1, MultipleNum2) {
//     return MultipleNum1 * MultipleNum2;
// }
// // Divide two numbers

// function divideNumbers(divideNum1, divideNum2) {
//     if (divideNum2 === 0) {
//         return "Cannot divide by zero";
//     }
//     return divideNum1 / divideNum2;
// }

// //Sqaure two numbers

// function squareNumbers(squareNum1,squareNum2 =2){
//     return squareNum1 ** squareNum2
// }

// //Cube two numbers

// function cubeNumbers(cubeNum1,cubeNum2 = 3){
//     return cubeNum1 ** cubeNum2
// }




// // --- Main Program ---
// // Test each calculator function
// console.log("Calculator Results:");
// console.log("Addition of 2 numbers: " + addNumbers(10, 5));
// console.log("Subtraction of 2 numbers: " + subtractNumbers(10, 5));
// console.log("Multiplication of 2 numbers: " + multiplyNumbers(10, 5));
// console.log("Division of 2 numbers: " + divideNumbers(10, 5));
// console.log("Square of 2 numbers: " + squareNumbers(2));
// console.log("Square of 2 numbers: " + cubeNumbers(2));

// //Task 2: Improving Code Structure - Let's fix some poorly organized code!
// console.log("Task 2: Improving Code Structure - ")

// // This code works but needs better organization!

// // Sectoin 1: Deterimining the Tip for the Waiter from the bill received

// // Determine the total amount based on the price and percentage
// function calculateTip(price,tipPercentage) { 
//     return price * (tipPercentage/100); 
// }

// //calculate total included tip

// function calculateTotal(price,tipPercentage){ 
//     return price + calculateTip(price,tipPercentage); 
// }

// // Display receipt with price, tip, and Total

// function printReceipt(price,tipPercent){

// let finalTip=calculateTip(price, tipPercent);
// let finalTotal=calculateTotal(price,tipPercent);

// console.log("=== Receipt ===")
// console.log("Price: $"+price);
// console.log("Tip: $"+finalTip);
// console.log("Total: $"+finalTotal);}
// console.log(" ==============");

// // Test the calculation
// printReceipt(50,20);

// //Task 3: Variable Organization - Create organized code from scratch that manages student grades!
// console.log("//Task 3: Variable Organization - Create organized code from scratch that manages student grades!") 
// // Create a grade calculator with these features:
// let subjectName = "Maths";
// let score1Try = 85;
// let score2Try = 85;
// let score3Try = 70;

// //----- Grade Calculation...............// - Calculate average score
// function calculateAverageScrore(score1Try,score2Try,score3Try){
//     return (score1Try + score2Try + score3Try) / 3;
// }

// // Convert numeric score to letter grade
// function getLetterGrade(score){
//     if (score >= 90) return "A";
//     if (score >= 80) return "B";
//     if (score >= 70) return "C";
//     if (score >= 60) return "D";
//     return "F";
// }

// //// Display formatted grade report - Final Function to get the report
// function printGradeReport(subjectName,score1Try,score2Try,score3Try){
//     let average = calculateAverageScrore(score1Try,score2Try,score3Try);
//     let roundAverage = (average.toFixed(2));
//     let gradedLetter = getLetterGrade(roundAverage);

//     console.log( "=== Grade Report ===");
//     console.log("Subject: " + subjectName);
//     console.log("Test 1: " + score1Try);
//     console.log("Test 2: " + score2Try);
//     console.log("Test 3: " + score3Try);
//     console.log("Average of the three Scores: " + roundAverage);
//     console.log("Final Grade Awarded to student: " + gradedLetter);
// }
// // Lets created examples to Test the functions
// printGradeReport(subjectName,score1Try,score2Try,score3Try);

// function multiply(a, b) {
//     if(isNaN(a) || isNaN(b)){
//         console.log(" Invalid input")
//     } else{
//         return a * b;
//     }
// }
//     console.log("Multiple 2 and 3: ", multiply(2,3));
//     console.log("Multiple abc and 3: ", multiply("abc",3));
//     console.log("Multiple 2 and abc: ", multiply(2,"abc"));

    function divide(a, b) {
    if(b === 0){
        console.log("Error: Division by zero");
    } else{
        return a / b;
    }

}
console.log(divide(6,2));
console.log(divide(6,0));

