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
let inventory = [];  // Will now store item objects instead of strings

// Weapon damage (starts at 0 until player buys a sword)
let weaponDamage = 0;      // Base weapon damage
let monsterDefense = 5;    // Monster's defense value
let healingPotionValue = 30;  // How much health is restored

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
    // Enhanced inventory display with item details
    console.log("Inventory: ");
    if (inventory.length === 0) {
        console.log("   Nothing in inventory");
    } else {
        inventory.forEach((item, index) => {
            console.log("   " + (index + 1) + ". " + item.name + " - " + item.description);
        });
    }
}

/**
 * Shows the current location's description and available choices
 */
function showLocation() {
    console.log("\n=== " + currentLocation.toUpperCase() + " ===");
    
    if (currentLocation === "village") {
        console.log("You're in a bustling village. The blacksmith and market are nearby.");
        console.log("\nWhat would you like to do?");
        console.log("1: Go to blacksmith - Buy weapon and armor?");
        console.log("2: Go to market - Buy Potion?");
        console.log("3: Enter forest - ready for Combat? ");
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
        console.log("1: Due you want to buy potion?");
        console.log("2: Return to village");
        console.log("3: Check status");
        console.log("4: Use item");
        console.log("5: Help");
        console.log("6: Quit game");
    }
    else if (currentLocation === "forest") {
        console.log("The forest is dark and foreboding. You hear strange noises all around you.");
        console.log("\nWhat would you like to do?");
        console.log("1: Challenge a Regular Monster");
        console.log("2: Challenge the Dragon");
        console.log("3: Return to village");
        console.log("4: Check status");
        console.log("5: Use item");
        console.log("6: Help");
        console.log("7: Quit game");
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
        }
        else if(choiceNum === 4){
            showStatus();
        }
        else if (choiceNum === 5) {
            // Inline potion application logic
            let idx = inventory.findIndex(i => i.type === "potion");
            if (idx !== -1) {
                playerHealth = Math.min(100, playerHealth + inventory[idx].effect);
                console.log(`Used ${inventory[idx].name}! Recovered ${inventory[idx].effect} health.`);
                inventory.splice(idx, 1);
            } else {
                console.log("You have no health potions.");
            }
        }
        else if (choiceNum === 6) console.log("\nHelp: Buy a weapon from the Blacksmith to win!");
        else if (choiceNum === 7) gameRunning = false;
    }
    else if (currentLocation === "blacksmith") {
         if (choiceNum === 1) {
            console.log("\n--- Blacksmith Items ---");
            console.log("1: Sword - 10 Gold\n2: Steel Sword - 25 Gold\n3: Wooden Shield - 8 Gold\n4: Iron Shield - 16 Gold\n5: Back");
            let buyChoice = parseInt(readline.question("Select an item to buy: "));
            let selectedItem = null;
            if (buyChoice === 1) selectedItem = armorWeaponPotion[0];
            if (buyChoice === 2) selectedItem = armorWeaponPotion[1];
            if (buyChoice === 3) selectedItem = armorWeaponPotion[2];
            if (buyChoice === 4) selectedItem = armorWeaponPotion[3];
            
            if (selectedItem) {
                if (playerGold >= selectedItem.value) {
                    playerGold -= selectedItem.value;
                    inventory.push(selectedItem);
                    console.log("Purchased" + selectedItem.name + "!.");
                } else {
                    console.log("Not enough gold!");
                }
            }
        }
        else if (choiceNum === 2) {
            currentLocation = "village";
            console.log("You return to the village center.");
            validMove = true;
        }
        else if (choiceNum === 3) showStatus();
        else if (choiceNum === 4) {
            let idx = inventory.findIndex(i => i.type === "potion");
            if (idx !== -1) {
                playerHealth = Math.min(100, playerHealth + inventory[idx].effect);
                console.log(inventory[idx].name);
                inventory.splice(idx, 1);
            } else {
                console.log("No health potions.");
            }
        }
        else if (choiceNum === 5) console.log("Help: Buy weapons and shields to prepare for combat.");
        else if (choiceNum === 6) gameRunning = false;
    }
    else if (currentLocation === "market") {
         if (choiceNum === 1) {
            console.log("\n--- Market Items ---");
            console.log("1: Health Potion (5 Gold)\n2: Back");
            let buyChoice = parseInt(readline.question("Select an item to buy: "));
            if (buyChoice === 1) {
                let selectedItem = armorWeaponPotion[4];
                if (playerGold >= selectedItem.value) {
                    playerGold -= selectedItem.value;
                    inventory.push(selectedItem);
                    console.log(selectedItem.name);
                } else {
                    console.log("Not enough gold!");
                }
            }
        }
        else if (choiceNum === 2) {
            currentLocation = "village";
            console.log("\nYou return to the village center.");
            validMove = true;
        }
    }
        else if (choiceNum === 3) showStatus();
        else if (choiceNum === 4) {
            let idx = inventory.findIndex(i => i.type === "potion");
            if (idx !== -1) {
                playerHealth = Math.min(100, playerHealth + inventory[idx].effect);
                console.log(inventory[idx].name);
                inventory.splice(idx, 1);
            } else {
                console.log("No health potions.");
            }
        }
        else if (choiceNum === 5) console.log("Help: Stock up on potions before dangerous fights.");
        else if (choiceNum === 6) gameRunning = false;
    
    else if (currentLocation === "forest") {
        if (choiceNum === 1) {
            // Choice 1: Fight a Regular Monster
            if (!handleCombat(false)) {
                currehandleCombat(currentLocation = "village");
            }
        }
        else if (choiceNum === 2) {
            // Choice 2: Fight the Dragon Boss
            if (handleCombat(true)) {
                console.log("\n*** YOU DEFEATED THE DRAGON! YOU WIN! ***");
                gameRunning = false;
            } else {
                currentLocation = "village";
            }
        }
        else if (choiceNum === 3) {
            // Choice 3: Return to village
            currentLocation = "village";
            console.log("You flee back to the safety of the village.");
            validMove = true;
        }
        else if (choiceNum === 4) showStatus();
        else if (choiceNum === 5) 
            {
            // Use health potion logic
            let idx = inventory.findIndex(i => i.type === "potion");
            if (idx !== -1) {
                playerHealth = Math.min(100, playerHealth + inventory[idx].effect);
                console.log(`Used ${inventory[idx].name}! Recovered ${inventory[idx].effect} health.`);
                inventory.splice(idx, 1);
            } else {
                console.log("No health potions.");
            }
        }
        else if (choiceNum === 6) console.log("Help: You need a weapon to defeat the Dragon!");
        else if (choiceNum === 7) gameRunning = false;
    }
    
    // Death check fallback right before the return statement
    if (playerHealth <= 0) {
        console.log("You have died! Game Over");
        gameRunning = false;
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
            }   
        }
        if(item.type === "armor"){
            if (bestArmor === null || item.effect > bestArmor.effect) {
                bestArmor = item;
            }   
        }
    }
    // Need to reduce the incoming damage by armour Effect.
    if (bestWeapon !== null) {
    console.log("You use your " + bestWeapon.name + " to attack!");
    console.log("Victory! You found 10 gold!");
    playerGold += 10;
    
    if (isDragon) {
        triggerVictoryEnding();
    }
    return true;
    } else {
        console.log("Without a weapon, you must retreat!");
        
        if (bestArmor !== null) {
            armorProtection = bestArmor.effect;
        }
        
        let finalDamage = enemyDamage - armorProtection;
        if (finalDamage < 1) {
            finalDamage = 1; 
        }
        
        console.log("Your armor blocked some damage. Total damage taken: " + finalDamage);
        updateHealth(-finalDamage);
        return false;   
    }
}

//==========Ending for defeating the dragon
// Add a special ending for defeating the dragon
function triggerVictoryEnding() {
     console.log("=================================================");
    console.log(" Dragon is defeated ----  you have won the Game---Congratulations " +playerName + " !.");
    console.log("=================================================");

    // Need to shwo the final State
    console.log(" === Your Final Stats for the Game as as follows ====");
    showStatus(); 
    gameRunning = false; 
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
    let hasPotion = inventory.some(item => item.type === "Potion");
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
    console.log("\n--- Blacksmith Shop ---");
    
    // 1. Filter out potions so the blacksmith only sells weapons and armor
    let shopItems = armorWeaponPotion.filter(i => i.type !== "potion");
    
    // 2. Automatically list the items with their price and descriptions
    shopItems.forEach((item, index) => {
        console.log(`${index + 1}: ${item.name} (${item.value} Gold) - ${item.description}`);
    });
    console.log(`${shopItems.length + 1}: Cancel`);

    // 3. Ask the player what they want to purchase
    let input = readline.questionInt("\nChoose an item to buy: ");
    let choiceIndex = input - 1;

    // 4. Validate input, check player gold, and add to inventory
    if (choiceIndex >= 0 && choiceIndex < shopItems.length) {
        let selectedItem = shopItems[choiceIndex];
        
        if (playerGold >= selectedItem.value) {
            playerGold -= selectedItem.value; // Deduct the cost
            inventory.push(selectedItem);    // Add item to player inventory
            console.log(`\nYou bought a ${selectedItem.name}!`);
        } else {
            console.log("\nYou don't have enough gold!");
        }
    } else {
        console.log("\nPurchase cancelled.");
    }
}
function buyFromMarket() {
    console.log(" ======= Market Stalls ======");
    
    // 1. Filter out weapons/armor so the market stall only sells potions
    let marketItems = armorWeaponPotion.filter(i => i.type === "potion");
    
    // 2. Automatically list the potions with their price and descriptions
    marketItems.forEach((item, index) => {
        console.log(`${index + 1}: ${item.name} (${item.value} Gold) - ${item.description}`);
    });
    console.log(`${marketItems.length + 1}: Cancel`);

    // 3. Ask the player what they want to purchase
    let input = readline.questionInt("\nChoose a potion to buy: ");
    let choiceIndex = input - 1;

    // 4. Validate input, check player gold, and add to inventory
    if (choiceIndex >= 0 && choiceIndex < marketItems.length) {
        let selectedItem = marketItems[choiceIndex];
        
        if (playerGold >= selectedItem.value) {
            playerGold -= selectedItem.value; // Deduct the cost
            inventory.push(selectedItem);     // Add item to player inventory
            console.log(`\nYou bought a ${selectedItem.name}!`);
        } else {
            console.log("You don't have enough gold!");
        }
    } else {
        console.log("Purchase cancelled.");
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
                if(choiceNum < 1 || choiceNum > 7){
                    throw "Please enter a number between 1 and 7.";
                }
                if (choiceNum <= 3){
                  move(choiceNum);      
                } else if(choice === 4){
                    showStatus();
                } else if (choice === 5){
                    usePotion()
                } else if (choice === 6){
                    console.log("Help: Buy a weapon before entering the forest!");
                } else if (choice === 7){
                    gameRunning = false;
                }     
                validChoice = true;
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
                if (choiceNum === 1) {
                        console.log("\nA wild monster approaches! (Ready for combat code)");
        }
        else if (choiceNum === 2) {
            console.log("\nThe Boss Dragon attacks! (Ready for dragon combat code)");
        }
        else if (choiceNum === 3) {
            currentLocation = "village";
            console.log("\nYou safely escape back to the village.");
            validMove = true;
        }
        else if (choiceNum === 4) showStatus();
        else if (choiceNum === 5) console.log("\nYou don't have any items to use right now.");
        else if (choiceNum === 6) console.log("Help: Defeat the dragon to finish your quest!");
        else if (choiceNum === 7) gameRunning = false;

            }
        } catch (error) {
            // This catches the thrown error strings and prints them to the user
            console.log("\nError: " + error);
        }
    }
} // Closes the main while(gameRunning) loop


    // Check if player died
    if (playerHealth <= 0) {
        console.log("\nGame Over! Your health reached 0!");
        gameRunning = false;
    }





