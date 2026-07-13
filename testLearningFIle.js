
// function calculateTotal(price, tax) {
//     return price * tax;
// }
// let total = calculateTotal(100);
// console.log(total);


// let counter = 0;
// for (let i = 0; i < 4; i++) {
//     counter += i;
// }
// console.log(counter);

/*

Write a try-catch block that attempts to convert the variable userInput to a number using parseInt(). 
If the conversion fails or results in NaN (Not a Number), 
the catch block should display the message "Please enter a valid number!" using console.log()
Tip: Add a Javascript Code Block by clicking the <> icon in your answer bar.

*/

let readline = require('readline-sync');

//Ask for the number- for example age

let userNum = readline.question("Waht is your age? ");
let userInput = parseInt(userNum);
try{
    if (isNaN(userInput)){
        throw "Users age defined in not a number - Please re-define";
    } else{
        console.log("Your Age is defined as: " + userInput)
    }

} catch(error){
    console.log("Please enter a valid number!");
    
}



