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
/*
Getting a link to Github-Command used to get this working
1. Create a New repository on GitHub First - 
    Go to github.com and sign in
    Click the "+" icon in the top right, then select "New repository"
    Name your repository (e.g., "AdventureGame") and Add Desc > Public Repo > Create
2.Initialize Git in your project folder - This initializes a new Git repository in your folder
    Open the terminal in VS Code
    Make sure you're in your game project folder
    COMMAND: git init
3. Create a file - and add your file - FIrst file 
    Create a new FIle called - .gitignore and Add the lines (node_modules/) > Save it
4. Adding your file
    COMMAND: git add .
5. Commit your changes - Saves files with the descriptive Message
    COMMAND: git commit -m "Initial commit - character stats setup"

6. COnnect to your GitHub repo
    First get the Repo URL from GIT -  https://github.com/NTailor76/AdventureGame.git
    COMMAND: git push -u origin main
        If errors - Must be the incorrect branch - COMMAND: git branch -M main
7. PUSH THE CODE TO GIT
    COMMAND: git push -u origin main
8. If you get errors 403 errors, may be you have another login running
      Press the Windows Key on your keyboard, type Credential Manager
      Click on Windows Credentials.Scroll down to the Generic Credentials section
      Look for anything named git:https://github.com or GitHub.Click on it, then click Remove
*/