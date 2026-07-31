// ===========================================
// The Dragon's Quest - Text Adventure Game
// A progression-based learning project
// ===========================================

// Include readline for player input
const readline = require('readline-sync');

// Game state variables
let gameRunning = true;
let playerName = "";
let playerHealth = 100;
let playerGold = 20;  // Starting gold
let currentLocation = "village";
let inventory = [];

// Addtional Item Template
//================================================
// Add the 2 types of shields of shileds for Armor protect
// Item templates with properties
// Value is the Gold Cost
//Effect is the protection amount

let armorWeaponPotion = [
    {name: "Sword", type: "weapon",value: 10,effect: 10,description: "A sturdy blade for combat"},
    {name: "Steel Sword", type: "weapon",value: 25,effect: 18,description: "Get higer damage with your steel sword!"},
    {name: "Wooden Shield", type: "armor",value: 8,effect: 5,description: "Reduces damage taken in combat"},
    {name: "Iron Shield", type: "armor",value: 16,effect: 10,description: "Gives me better protection then the wood - Iron made"},
    {name: "Health Potion", type: "potion",value: 5,effect: 30,description: "Restores 30 health points"}
]

// ===========================
// Display Functions
// Functions that show game information to the player
// ===========================

/**
 * Shows the player's current stats
 * Displays health, gold, and current location
 */
function showStatus() {
    console.log("\n=== " + playerName + "'s Status ===");
    console.log("Health: " + playerHealth);
    console.log("Gold: " + playerGold);
    console.log("Location: " + currentLocation);
}


//=========================================
function showLocation() {
    console.log("\n=== " + currentLocation.toUpperCase() + " ===");
    
    if (currentLocation === "village") {
        console.log("You're in a bustling village. The blacksmith and market are nearby.");
        console.log("\nWhat would you like to do?");
        console.log("1: Go to blacksmith");
        console.log("2: Go to market");
        console.log("3: Enter forest");
        console.log("4: Check status");
        console.log("5: Use item");
        console.log("6: Help");
        console.log("7: Quit game");
    } 
    else if (currentLocation === "blacksmith") {
        console.log("The heat from the forge fills the air. Weapons and armor line the walls.");
        console.log("\nWhat would you like to do?");
        console.log("1: Open Blacksmith Shop to buy a item");
        console.log("2: Return to village");
        console.log("3: Check status");
        console.log("4: Use item");
        console.log("5: Help");
        console.log("6: Quit game");
    }
    else if (currentLocation === "market") {
        console.log("Merchants sell their wares from colorful stalls. A potion seller catches your eye.");
        console.log("\nWhat would you like to do?");
        console.log("1: Buy potion (5 gold)");
        console.log("2: Return to village");
        console.log("3: Check status");
        console.log("4: Use item");
        console.log("5: Help");
        console.log("6: Quit game");
    }
    else if (currentLocation === "forest") {
        console.log("The forest is dark and foreboding. You hear strange noises all around you.");
        console.log("\nWhat would you like to do?");
        console.log("1: Return to village");
        console.log("2: Check status");
        console.log("3: Use item");
        console.log("4: Help");
        console.log("5: Quit game");
    }
}

// ===========================
// Movement Functions
// Functions that handle player movement
// ===========================

/**
 * Handles movement between locations
 * @param {number} choiceNum The chosen option number
 * @returns {boolean} True if movement was successful
 */
function move(choiceNum) {
    let validMove = false;
    
    if (currentLocation === "village") {
        if (choiceNum === 1) {
            currentLocation = "blacksmith";
            console.log("\nYou enter the blacksmith's shop.");
            validMove = true;
        }
        else if (choiceNum === 2) {
            currentLocation = "market";
            console.log("\nYou enter the market.");
            validMove = true;
        }
        else if (choiceNum === 3) {
            currentLocation = "forest";
            console.log("\nYou venture into the forest...");
            validMove = true;
            
            // Trigger combat when entering forest
            console.log("\nA monster appears!");
            if (!handleCombat()) {
                currentLocation = "village";
            }
        }
    }
    else if (currentLocation === "blacksmith") {
        if (choiceNum === 2) {
            currentLocation = "village";
            console.log("\nYou return to the village center.");
            validMove = true;
        }
    }
    else if (currentLocation === "market") {
        if (choiceNum === 2) {
            currentLocation = "village";
            console.log("\nYou return to the village center.");
            validMove = true;
        }
    }
    else if (currentLocation === "forest") {
        if (choiceNum === 1) {
            currentLocation = "village";
            console.log("\nYou hurry back to the safety of the village.");
            validMove = true;
        }
    }
    
    return validMove;
}

// ===========================
// Combat Functions
// Functions that handle battles and health
// ===========================

/**
 * Handles monster battles
 * Checks if player has weapon and manages combat results
 * @returns {boolean} true if player wins, false if they retreat
 */
function handleCombat(isDragon = false) {
    //Declare the enemy characters, stats for damage,health of Dragon and the monster..
    let enemyName = null;
    let enemyDamage = 0;
    let enemyHealth = 0;
    let bestWeapon = null;
    let bestArmor = null;
    let armorProtection = 0;

    // Set the Damage Monster Stats - based on the battle Type
    if(isDragon){
       enemyName = "Dragon";
       enemyDamage = 20;
       enemyHealth = 50;
    } else{                   // It has to be a monster not dragon
       enemyName = "Regular Monster";
       enemyDamage = 10;
       enemyHealth = 20;   
    }
    console.log("Battle Started: " + enemyName + "!. "); // Check what enemy to confirm
    // Implement Automatic Equipment Selection
    //Best Weapon first
      for(let item of inventory){
        if(item.type === "weapon"){
            if (bestWeapon === null || item.effect > bestWeapon.effect) {
                bestWeapon = item;
                    console.log("You have a sword! You attack!");
                    console.log("Victory! You found 10 gold!");
                    playerGold += 10;
                    return true;
            }else{
                    console.log("Without a weapon, you must retreat!");
                    updateHealth(-20);
                    return false;   
            }   
        }
        if(item.type === "armor"){
            if (bestArmor === null || item.effect > bestArmor.effect) {
                bestArmor = item;

            }   
        }
    }
    // Need to reduce the incoming damage by armour Effect.
    if(bestArmor ){
        armorProtection = bestArmor.effect;
    }
    // calculate the finalDamage from this hit
     let finalDamage = (enemyDamage - armorProtection);
        if (finalDamage < 1){
            finalDamage = 1; // Cannot let this go to negative - minimum damage
        }
    console.log("Protection you have received" + finalDamage + "!.");
    updateHealth(-finalDamage);
    //==============Need to add code to fire the completion of the game when the dragon dies..
    if(isDragon){
        triggerVictoryEnding(); // This will call new function to show the last message and stats..
        return true;
    }    
}

/**
 * Updates player health, keeping it between 0 and 100
 * @param {number} amount Amount to change health by (positive for healing, negative for damage)
 * @returns {number} The new health value
 */
function updateHealth(amount) {
    playerHealth += amount;
    
    if (playerHealth > 100) {
        playerHealth = 100;
        console.log("You're at full health!");
    }
    if (playerHealth < 0) {
        playerHealth = 0;
        console.log("You're gravely wounded!");
    }   
    console.log("Health is now: " + playerHealth);
    return playerHealth;
}

// ===========================
// Item Functions
// Functions that handle item usage and inventory
// ===========================

/**
 * Handles using items like potions
 * @returns {boolean} true if item was used successfully, false if not
 */
function useItem() {
    if (hasPotion) {
        console.log("You drink the healing potion.");
        updateHealth(30);
        hasPotion = false;
        return true;
    }
    console.log("You don't have any usable items!");
    return false;
}

/**
 * Displays the player's inventory
 */
function checkInventory() {
    console.log("\n=== INVENTORY ===");
    if (!hasWeapon && !hasPotion && !hasArmor) {
        console.log("Your inventory is empty!");
        return;
    }
    
    if (hasWeapon) console.log("- Sword");
    if (hasPotion) console.log("- Health Potion");
    if (hasArmor) console.log("- Shield");
}

// ===========================
// Shopping Functions
// Functions that handle buying items
// ===========================

/**
 * Handles purchasing items at the blacksmith
 */
function buyFromBlacksmith() {
      //Provide a menu for the user to ensure they can buy the require things from the blacksmith
    console.log("\n--- Blacksmith Forge Shop ---");
    console.log("1: Sword (10 gold) - A sturdy blade for combat");
    console.log("2: Steel Sword (25 gold) - Get higher damage with your steel sword!");
    console.log("3: Wooden Shield (8 gold) - Reduces damage taken in combat");
    console.log("4: Iron Shield (16 gold) - Gives me better protection than wood");
    console.log("5: Cancel and go back");    
    // Need to add an imput Option - otherwise how can the user select what to buy...
    let shopChoice = parseInt(readline.question("\nWhat would you like to buy? "));
    let selectedItem = null;
    if (shopChoice === 1) {
        selectedItem = armorWeaponPotion.find(item => item.name === "Sword");
    } else if (shopChoice === 2) {
        selectedItem = armorWeaponPotion.find(item => item.name === "Steel Sword");
    } else if (shopChoice === 3) {
        selectedItem = armorWeaponPotion.find(item => item.name === "Wooden Shield");
    } else if (shopChoice === 4) {
        selectedItem = armorWeaponPotion.find(item => item.name === "Iron Shield");
    } else if (shopChoice === 5) {
        console.log("\nYou exit the shop interface.");
        return;
    }
    // Need to ensure to check if they have enough Gold to buy an enhance equipment
    if (selectedItem) {
        if (playerGold >= selectedItem.value) {
            playerGold -= selectedItem.value;
            inventory.push(selectedItem);
            
            if (selectedItem.type === "weapon") {
                hasWeapon = true;
                weaponDamage = selectedItem.effect; 
            } else if (selectedItem.type === "armor") {
                hasArmor = true;
            }
            
            console.log("Successfully bought: " + selectedItem.name + "!.");
        } else {
            console.log("Sorry, you do not have enough Gold " + selectedItem.value + " gold.");
        }
    } else {
        console.log("Invalid choice - Number has not be between 1 to 5");
    }
}
function buyFromMarket() {
    console.log(" === You are in the Market ==== Portion only =========");
    console.log("1: Health Potion (5 gold) - Restores 30 health points");
    console.log("2: Cancel and go back");

    let shopChoice = parseInt(readline.question("What would you like to buy? "));
    
    if (shopChoice === 1) {
        let potionItem = armorWeaponPotion.find(item => item.type === "portion");
        
        if (playerGold >= potionItem.value) {
            playerGold -= potionItem.value;
            inventory.push(potionItem);
            hasPotion = true;
            
            console.log("Successfully bought" + potionItem.name + "!. ");
        } else {
            console.log("Sorry, you do not have enough Gold " + potionItem.value + "gold.");
        }
    } else if (shopChoice === 2) {
        console.log("You exit from the market now..");
    } else {
        console.log("Invalid choice. Number needs to be between 1 to 2");
    }
}   

function showHelp() {
    console.log("\n=== AVAILABLE COMMANDS ===");
    
    console.log("\nMovement Commands:");
    console.log("- In the village, choose 1-3 to travel to different locations");
    console.log("- In other locations, choose the return option to go back to the village");
    
    console.log("\nBattle Information:");
    console.log("- You need a sword to win battles");
    console.log("- Monsters appear in the forest");
    console.log("- Without a weapon, you'll lose health when retreating");
    
    console.log("\nItem Usage:");
    console.log("- Health potions restore 30 health");
    console.log("- You can buy potions at the market for 5 gold");
    console.log("- You can buy a sword at the blacksmith for 10 gold");
    
    console.log("\nOther Commands:");
    console.log("- Choose the status option to see your health and gold");
    console.log("- Choose the help option to see this message again");
    console.log("- Choose the quit option to end the game");
    
    console.log("\nTips:");
    console.log("- Keep healing potions for dangerous areas");
    console.log("- Defeat monsters to earn gold");
    console.log("- Health can't go above 100");
}

/** 
 * Create Helper functionals to get the items of Types and Separate for the best item
 * Best item should be based on the highest effect value - will use loop and find it
 * 
 /** */

function getItemsByType(type){
    //return all items that will match with this Type
    return armorWeaponPotion.filter(items => items.type === type)
}

function getBestItem(type){
   //first restrict off the item - as you can have armor, weapon of Portion.. 
    let filterItems = getItemByType(type);
    //Deal with the null types first
    if(filterItems.length === 0){
        return null;
    }
    let bestItem = filteredItems[0]; // Need to assume first item in index is the best first

    for (let i= 0; i < filteredItems.length;i++){
        let currentItem = filterItems[i];
       if (currentItem.effect > bestItem.effect){
        bestItem = currentItem; //this will get the most effect item for the given type
       } 
    }
    return bestItem
}

//Implement equipment Checking. 
// Need to ensure the user has the right weapong, armor and portion..

function hasGoodEquipment(){

    let hasSteelSword = false;
    let hasAnyArmor = false;

    for (let i=0 ; i < armorWeaponPotion.length;i++){
    let currentItem = armorWeaponPotion[i];
   //check for Steel Sword to fight the dragon
        if(currentItem.name === "Steel Sword"){
            hasSteelSword = true;
        } 
        if(currentItem.type === "armor"){
            hasAnyArmor = true;
        }
    }
        if(hasSteelSword && hasAnyArmor){
            return true; // Well equipped 
            } else{
                return false; //not equiped for the dragon.
        }
}

// ===========================
// Input Validation
// Ensures player input is valid
// ===========================

/**
 * Validates if a choice number is within valid range
 * @param {string} input The user input to validate
 * @param {number} max The maximum valid choice number
 * @returns {boolean} True if choice is valid
 */
//==== Validation on the choice==============

function isValidChoice(input, min, max) {
    let num = parseInt(input);
    if((num === "") || isNaN(num) || num < 1 || num > max){
        return false;
    }
return true;
    // if (input === "") return false;
    // let num = parseInt(input);
    // return num >= 1 && num <= max;
}

// ===========================
// Main Game Loop
// Controls the flow of the game
// ===========================

console.log("=================================");
console.log("       The Dragon's Quest        ");
console.log("=================================");
console.log("\nYour quest: Defeat the dragon in the mountains!");
// Need to implement try-catch for the player Input....

// Get player's name
playerName = readline.question("\nWhat is your name, brave adventurer? ");
console.log("\nWelcome, " + playerName + "!");
console.log("You start with " + playerGold + " gold.");

while (gameRunning) {
    // Show current location and choices
    showLocation();
    
    // Get and validate player choice
    let validChoice = false;
    while (!validChoice) {
        try {
            let choice = readline.question("\nEnter choice (number): ");
            
            //let choiceNum = readline.questionInt("\nEnter choice: "); 
            
            // Check for empty input
            if (choice.trim() === "") {
                throw "Please enter a number!";
            }
            
            // Convert to number and check if it's a valid number
            //let choiceNum = parseInt(choice);
              choiceNum = parseInt(choice);
            if (isNaN(choiceNum)) {
                throw "That's not a number! Please enter a number.";
            }
            
            // Handle choices based on location
            if (currentLocation === "village") {
                if (choiceNum < 1 || choiceNum > 7) {
                    throw "Please enter a number between 1 and 7.";
                }
                
                validChoice = true;
                
                if (choiceNum <= 3) {
                    move(choiceNum);
                }
                else if (choiceNum === 4) {
                    showStatus();
                }
                else if (choiceNum === 5) {
                    useItem();
                }
                else if (choiceNum === 6) {
                    showHelp();
                }
                else if (choiceNum === 7) {
                    gameRunning = false;
                    console.log("\nThanks for playing!");
                }
            }
            else if (currentLocation === "blacksmith") {
                if (choiceNum < 1 || choiceNum > 6) {
                    throw "Please enter a number between 1 and 6.";
                }
                
                validChoice = true;
                
                if (choiceNum === 1) {
                    buyFromBlacksmith();
                }
                else if (choiceNum === 2) {
                    move(choiceNum);
                }
                else if (choiceNum === 3) {
                    showStatus();
                }
                else if (choiceNum === 4) {
                    useItem();
                }
                else if (choiceNum === 5) {
                    showHelp();
                }
                else if (choiceNum === 6) {
                    gameRunning = false;
                    console.log("\nThanks for playing!");
                }
            }
            else if (currentLocation === "market") {
                if (choiceNum < 1 || choiceNum > 6) {
                    throw "Please enter a number between 1 and 6.";
                }
                
                validChoice = true;
                
                if (choiceNum === 1) {
                    buyFromMarket();
                }
                else if (choiceNum === 2) {
                    move(choiceNum);
                }
                else if (choiceNum === 3) {
                    showStatus();
                }
                else if (choiceNum === 4) {
                    useItem();
                }
                else if (choiceNum === 5) {
                    showHelp();
                }
                else if (choiceNum === 6) {
                    gameRunning = false;
                    console.log("\nThanks for playing!");
                }
            }
            else if (currentLocation === "forest") {
                if (choiceNum < 1 || choiceNum > 5) {
                    throw "Please enter a number between 1 and 5.";
                }
                
                validChoice = true;
                
                if (choiceNum === 1) {
                    move(choiceNum);
                }
                else if (choiceNum === 2) {
                    showStatus();
                }
                else if (choiceNum === 3) {
                    useItem();
                }
                else if (choiceNum === 4) {
                    showHelp();
                }
                else if (choiceNum === 5) {
                    gameRunning = false;
                    console.log("\nThanks for playing!");
                }
            }
            
        } catch (error) {
            console.log("\nError: " + error);
            console.log("Please try again!"); // This should allow the user to retry invalid input.
        }
    }

    // Check if player died
    if (playerHealth <= 0) {
        console.log("\nGame Over! Your health reached 0!");
        gameRunning = false;
    }
}

//==========Ending for defeating the dragon
// Add a special ending for defeating the dragon
function triggerVictoryEnding() {
     console.log("=================================================");
    console.log(" Dragon is defeated ----  you have won the Game---Congratulations " +playerName + " !."  );
    console.log("=================================================");

    // Need to shwo the final State
    console.log(" === Your Final Stats for the Game as as follows ====");
    showStatus(); 
    gameRunning = false; 
}

