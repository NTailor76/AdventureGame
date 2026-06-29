const readline = require("readline-sync");

console.log("Welcome to the Adventure Games");

let playerName = readline.question('Waht is your Name?') ;

// Get player name using readline-sync
let playerHealth = 100;
let playerGold = 20;
let CurrentLocation = "Village";
let gameRunning = true;
let inventory = [];
// Create variables for player stats
console.log('Welcome to the Game: ' + playerName);
console.log('Your Starting gold amount: ' + playerGold);
