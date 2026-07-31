//basic Arrays

console.log(" === Basic Array: ====")
//Empty array
let emptyArray = [];
console.log("Empty array:",emptyArray);

//Array with items
console.log(" === Array with items: ====")
let fruits = ["apple", "Banana","Pears"];
console.log("Fruits array: " ,fruits);


// Array with mixed data Types
console.log(" === Array with mixed data Types ====")
let mixedArray =[42,"hello",true,null];
console.log("Array mised data Types: ",mixedArray);

// array length property
console.log(" === array length property: ====")
let vegetables = ["carrot", "potato","sweetcorn"];
console.log("vegetable array: " ,vegetables);
console.log("vegetable array: " ,vegetables.length);

//Using tostring() method
console.log(" === Using tostring() method ====")
let fruitss = ["apple", "Banana","Pears"];
console.log("Fruits array: " ,fruitss.toString());

// Accessing individual elements of an array
// Array are zero-indexed
console.log(" === Accessing individual elements of an array ====")
let fruitsss = ["apple", "Banana","Pears"];
console.log("Fruits array: " ,fruitsss[0]); // Should output apple
console.log("Fruits array: " ,fruitsss[1]); // Should output Banana
console.log("Fruits array: " ,fruitsss[2]); // Should output Banana

//========================= CLEAN FOR LOOP for LATEST JAVASCRIPT and Console---
console.log(" ======= Using a new type of Loop called foreach, console.log with $  ========================")

let inventory = ["apples","bananas","oranges"];
// heres comes the magic...
inventory.forEach((item,index) => {console.log(`shelf number ${index} holds: ${item}`);
});

//========================= SEARCH for the Index number using indexOf on the whole Array ===================================
console.log(" ===== SEARCH for the Index number using indexOf --- >on the whole Array =============================== ")

console.log("The Index for the Oranges: ",inventory.indexOf("oranges"));





//======================== TIME TO DO SOME TASK FOR ARRAYS ============================================

// Task 1: Creating a Shopping List - Let's learn how arrays help us store multiple items in a list!
console.log(" ====Task 1: Creating a Shopping List - Let's learn how arrays help us store multiple items in a list! ===")
// Create a shopping list array
let shoppingList = ["milk","bread","eggs","apples","bananas"];
console.log("My Shopping List:");
console.log(shoppingList);
//show the first item
console.log(shoppingList[0]);
//third item
console.log(shoppingList[3]);
//show the last item
console.log(shoppingList[4]);
//now show how many items are in the list
console.log(shoppingList.length);

//Task 2: Modifying a Todo List - Learn how to change items in an array and add new ones!
//*** PUSH --- ADD A NEW ITEM TO ARRAY
//*** POP ----- REMOVE THE LAST ONE FROM THE ARRAY
//*** SHIFT ---- REMOVE FIRST FROM THE ARRAY
// **** UNSHIFT ---- ADD A NEW ITEM TO FIRST

let todoList = ["study javascript","Go Shopping","call mum"];

todoList.push("Clean Room","Do laundry","walk the dog"); //add a new task using push
todoList.pop(); // Always removes the last item from the list
todoList.pop(); // Did it twice to remove 2

todoList[1] = "Buy groceries"; // Change an existing task
todoList[2] = "Call mom tomorrow";
//show the updated List
console.log("My ToDo List:");
console.log(todoList);

// 1a========= Practice the arracy with all the 3 different methods ============================
console.log( "======================== Practice the Array with all the 3 different methods ============================== ")
let myList =  ["pens","pencil","compass","eraser"];

myList.push("protractor"); // Adds items to the End
myList.pop(); //removes items from the End
myList.shift(); //removed items from the First
myList.unshift("rubber"); //Adds items to First
console.log(myList);

console.log( "======================== Practice the array with COMPLEX Include and Splice ============================== ")
let myList2 = ["table","chairs","lamp","tables","cups"];

console.log(myList2.includes("table")); // Should return true
console.log(myList2.includes("tables")); // Should return false

let splicerAdd = myList2.splice(1,2);
let splicerRemove = myList2.splice(1,3,"sofa");
 
// Time for the splicer - This method changes the contents of an array by removing, replacing, or adding new elements
// Syntax for this is ----- array.splice(start_index,delete_count,item1,item2)
console.log("Splicer in Action remove ------->", splicerAdd); //chairs,lamp  ----> removing Element at index 1
console.log("Splicer in Action Add ------->" , splicerRemove); //['tables', 'cups']

/*
Array Helpers and Math Functions
When working with arrays, we sometimes need to find specific positions like the middle element or use mathematical operations.
Finding Array Positions
Here's how to access different positions in an array:
*/
//2a - Finding the First Element - The first position of an array is always 0.
//Last postion is length -1
console.log(" ===2a - Finding the First Element - The first position of an array is always 0.. === ")
let colours = ["red", "green", "blue", "yellow", "purple"];
console.log("first Colour:", colours[0]);

//2b - Finding the Last Element - The last position is always length - 1 because array indices start at 0.
console.log(" ===2b - Finding the Last Element - The last position is always length - 1 because array indices start at 0... === ")
//let colours = ["red", "green", "blue", "yellow", "purple"];
console.log("Last Colour:", colours[colours.length-1]); // this is 5-1 = 4 index. So starts for zero of red -- gives purple

//2c - Finding the Middle Element - Finding the middle requires division and rounding down to get a valid index.
console.log(" ===2c - Finding the Middle Element - Finding the middle requires division and rounding down to get a valid index... === ")
let middlePosition = Math.floor(colours.length / 2);
console.log("Middle Position:",middlePosition);
console.log("Middle colour:",colours[middlePosition]);

//2d - The Math Object - JavaScript provides the Math object with helpful methods for calculations.
//Rounding Down with Math.floor() - Math.floor() takes any decimal number and rounds it down to the nearest whole number.
// Math.floor() rounds down to the nearest integer
console.log("2d - Rounding Down with Math.floor() - Math.floor() takes any decimal number and rounds it down to the nearest whole number.")
console.log(Math.floor(3.7)); // 3
console.log(Math.floor(5.1)); // 5

//2e - Rounding Up with Math.ceil() - Math.ceil() takes any decimal number and rounds it up to the nearest whole number.
// // Math.ceil() rounds up to the nearest integer
console.log("2e -Math.ceil() rounds up to the nearest integer ")
console.log(Math.ceil(3.2)); //4
console.log(Math.ceil(5.9)); //6

//2f - Rounding to Nearest with Math.round() - Math.round() rounds to the nearest whole number (.5 and up rounds up).
// Math.round() rounds to the nearest integer
console.log("2f-Math.round() rounds to the nearest integer");
console.log(Math.round(3.2)); //3
console.log(Math.round(3.8)); //4

//2g - Finding Minimum and Maximum Values - Math.min() and Math.max() help find the smallest and largest numbers.
// Finding minimum and maximum values
console.log("2g - Finding minimum and maximum values");
console.log(Math.min(10,5,8)); //5
console.log(Math.max(10,5,8)); //10

//2h - Formatting Numbers with toFixed() - The toFixed() method formats a number with a specific number of decimal places.
// Format a number to show exactly 2 decimal places
console.log("Format a number to show exactly 2 decimal places with with toFixed()")
let priceCal = 10.9876;
console.log(priceCal.toFixed(2));

// Task 3 - Task 3: Working with Student Scores - Practice finding information in arrays using array methods!
// Create an array of test scores
console.log(" === Task 3 - Task 3: Working with Student Scores - Practice finding information in arrays using array methods! ======== ")
let testScores = [85, 92, 78, 95, 88];
// Add your code to:
// 1. Find how many scores there are
console.log(testScores.length);

// 2. Get the first and last scores

console.log("First Item from the List",testScores[0]); // First value is always index zero - First Item
console.log("Last Item from the List",testScores[testScores.length-1]);
console.log(testScores.pop()); // Get the last value
testScores.push(99,101); // Add a new score at the end
testScores.unshift(11,12); // Adds a new item to first
testScores.shift(11); // Removed item from first
console.log(testScores);

// Task 4 - Task 4: Processing a List - Combine arrays with loops to process multiple items!
// Create an array of prices
console.log(" === Task 4 - Task 4: Processing a List - Combine arrays with loops to process multiple items! ======= ")
let prices = [10.99, 5.99, 3.99, 8.99];
let total = 0; // Intialise it first to zero
let affordableCount = 0; // Intialise it first to zero

console.log("=== All Prices =====");
for(i=0;i < prices.length; i++){
    console.log("Item----" + (i+1) + ": £" + prices[i]);    
    total +=prices[i];

    if (prices[i] < 7.00){
        affordableCount++;
    }
}
console.log("====\nSummary: ");
console.log("Total: £" +total.toFixed(2));
console.log("Affordable items (under £ 7.00): " + affordableCount);

// Task 5 - Further Learning on Message Placeholders...........
/*
In JavaScript, the \${ } syntax is called a placeholder. It is used inside Template Literals (strings wrapped in backticks ` instead of quotes).
The dollar sign combined with curly braces tells JavaScript: 
"Hey, stop reading this as plain text for a moment, look inside the curly braces, 
execute the code or find the variable there, and insert the result right here in the text."
*/
console.log("Task 5 - Further Learning on Message Placeholders...........")

let currentValue = 500;
let messageOld = "Depreciation for item: Valued at: £" + currentValue;
let messageNew = `Depreciation for item: Valued at £${currentValue}`;
console.log(messageOld);  //Depreciation for item: 5 : Valued at: £500
console.log(messageNew); //Depreciation for item: 5 : Valued at: £500























