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

// Weapon damage (starts at 0 until player buys a sword)
let weaponDamage = 0;      // Base weapon damage
let healingPotionValue = 30;  // How much health is restored

// =========================================
// START Lab: Enhanced Item System
// =========================================
// Item templates with properties
const healthPotion = {
    name: "Health Potion",
    type: "potion",
    value: 5,     // Cost in gold
    effect: 30,   // Healing amount
    description: "Restores 30 health points"
};

const sword = {
    name: "Sword",
    type: "weapon",
    value: 10,    // Cost in gold
    effect: 10,   // Damage amount
    description: "A sturdy blade for combat"
};

const steelSword  = {
    name: "Steel Sword",
    type: "weapon",
    value: 20,    // Cost in gold - twice as normal sword
    effect: 20,   // Damage amount - twice as normal sword
    description: "A steel blade for combat"
};

const woodenShield = {
    name: "Wooden Shield",
    type: "armor",
    value: 8,  // Cost in gold
    effect: 5, // Damage amount
    description:"Reduces damage taken in combat" 
};

const ironShield = {
    name: "Iron Shield",
    type: "armor",
    value: 16,  // Cost in gold - twice of wood shield
    effect: 10, // Damage amount - twice of wood shield
    description:"Reduces damage taken in combat" 
};

//Think about: How does this create a progression path? ==============================================================????
// ===========================
// Helper Functions for Item management
// Functions that Manage items by Type and Get best Items
// ===========================
// Group allItems into array
const allItems = [healthPotion,sword,steelSword,woodenShield,ironShield];

function getItemsByType(type){
    return allItems.filter(item => item.type === type);
};

function getBestItem(type){
   const filteredItems = getItemsByType(type); // ensure the filter has applied the correct type 
    if(filteredItems.length === 0){
        return null;
    }
        return filteredItems.reduce((best,current) => {return current.effect > best.effect ? current :best;});
};

function hasGoodEquipment(){

    const bestWeapon = getBestItem("weapon");
    const allArmor = getItemsByType("armor");
    // Ensure weapon exist and Armor is not giving null value
    if(!bestWeapon || allArmor.length === 0){
        return false;
    }
    return bestWeapon.name === "Steel Sword";
}
//============================

// Create empty inventory array (from previous lab)
let inventory = [];  // Will now store item objects instead of strings

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
    console.log("❤️  Health: " + playerHealth);
    console.log("💰 Gold: " + playerGold);
    console.log("📍 Location: " + currentLocation);
    
    // Enhanced inventory display with item details
    console.log("🎒 Inventory: ");
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
        console.log("1: Go to blacksmith - Buy some Weapons or Armor?");
        console.log("2: Go to market - Buy some potion?");
        console.log("3: Enter forest - Ready for combat?");
        console.log("4: Check status");
        console.log("5: Use item");
        console.log("6: Help");
        console.log("7: Quit game");
    } 
    else if (currentLocation === "blacksmith") {
        console.log("The heat from the forge fills the air. Weapons and armor line the walls.");
        console.log("\nWhat would you like to do?");
        console.log("1: Buy sword (" + sword.value + " gold)");
        //=============== Need to cater for new items ===================
        console.log("2: Buy Steel sword (" + steelSword.value + " gold)");
        console.log("3: Buy Wooden Shield (" + woodenShield.value + " gold)");
        console.log("4: Buy Iron Shield (" + ironShield.value + " gold)");
        //===============================================================
        console.log("5: Return to village");
        console.log("6: Check status");
        console.log("7: Use item");
        console.log("8: Help");
        console.log("9: Quit game");
    }
    else if (currentLocation === "market") {
        console.log("Merchants sell their wares from colorful stalls. A potion seller catches your eye.");
        console.log("\nWhat would you like to do?");
        console.log("1: Buy potion (" + healthPotion.value + " gold)");
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

/**
 * Checks if player has an item of specified type 
 * @param {string} type The type of item to check for
 * @returns {boolean} True if player has the item type
 */
function hasItemType(type) {
    return inventory.some(item => item.type === type);
}

/**
 * Handles monster battles
 * Checks if player has weapon and manages combat results
 * @returns {boolean} true if player wins, false if they retreat
 * 1. Update the Combat function
 */
function handleCombat(isDragon = false) {
    // Check if player has a weapon using the new object system
    if (!hasItemType("weapon")) {
        console.log("Without a weapon, you must retreat!");
        playerHealth -= 20; 
        return false;
    }

    // Set up enemy stats
    let enemyName = isDragon ? "Dragon" : "Regular Monster";
    let enemyDamage = isDragon ? 20 : 10;
    let enemyHealth = isDragon ? 50 : 20;

    console.log("\n Battle Started against: " + enemyName + "!");

    // Implement Automatic Equipment Selection
    let bestWeapon = null;
    let bestArmor = null;     
    let monsterDefense = 5;

    for (let item of inventory) {
        if (item.type === "weapon") {
            if (bestWeapon === null || item.effect > bestWeapon.effect) {
                bestWeapon = item; 
            }   
        }
        if (item.type === "armor") {
            if (bestArmor === null || item.effect > bestArmor.effect) {
                bestArmor = item;
            }
        }
    }

    // Calculate actual damage values using your formula variables
    let actualWeaponDamage = bestWeapon ? bestWeapon.effect : weaponDamage;
    let armorProtection = bestArmor ? bestArmor.effect : 0;

    // Turn-based combat loop simulation
    let playerHit = Math.max(1, actualWeaponDamage - monsterDefense);
    let enemyHit = Math.max(1, enemyDamage - armorProtection);

    console.log("-> Using " + (bestWeapon ? bestWeapon.name : "fists") + " dealing " + playerHit + " net damage.");
    if (bestArmor) {
        console.log("-> Equipped " + bestArmor.name + " reduces incoming damage by " + armorProtection + ".");
    }

    // Simple round resolution
    while (enemyHealth > 0 && playerHealth > 0) {
        enemyHealth -= playerHit;
        if (enemyHealth <= 0) break;
        playerHealth -= enemyHit;
    }

    if (playerHealth <= 0) {
        console.log("You were defeated by the " + enemyName + "...");
        gameRunning = false;
        return false;
    } else {
        if(isDragon){
          triggerVictoryEnding();
          return true;  
        }
        let goldReward = 10;
        playerGold += goldReward;
        console.log("You defeated the " + enemyName + "! Found " + goldReward + " gold.");
        return true;
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

//=======================================================================

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
    if (inventory.length === 0) {
        console.log("\nYou have no items!");
        return false;
    }

    console.log("\n=== Inventory ===");
    inventory.forEach((item, index) => {
        console.log((index + 1) + ". " + item.name);
    });
    
    let choice = readline.question("Use which item? (number or 'cancel'): ");
    if (choice === 'cancel') return false;
    
    let index = parseInt(choice) - 1;
    if (index >= 0 && index < inventory.length) {
        let item = inventory[index];
        
        if (item.type === "potion") {
            console.log("\nYou drink the " + item.name + ".");
            updateHealth(item.effect);
            inventory.splice(index, 1);
            console.log("Health restored to: " + playerHealth);
            return true;
        } else if (item.type === "weapon") {
            console.log("\nYou ready your " + item.name + " for battle.");
            return true;
        }
    } else {
        console.log("\nInvalid item number!");
    }
    return false;
}

/**
 * Displays the player's inventory
 */
function checkInventory() {
    console.log("\n=== INVENTORY ===");
    if (inventory.length === 0) {
        console.log("Your inventory is empty!");
        return;
    }
    
    // Display all inventory items with numbers and descriptions
    inventory.forEach((item, index) => {
        console.log((index + 1) + ". " + item.name + " - " + item.description);
    });
}

// ===========================
// Shopping Functions
// Functions that handle buying items
// ===========================

/**
 * Handles purchasing items at the blacksmith
 */ 
function buyFromBlacksmith(choiceNum) {
        let selectedItem = null;
    if (choiceNum === 1) {
        selectedItem = sword;
    } else if (choiceNum === 2) {
        selectedItem = steelSword;
    } else if (choiceNum === 3) {
        selectedItem = woodenShield;
    } else if (choiceNum === 4) {
        selectedItem = ironShield;
    }

    if (selectedItem) {
        if (playerGold >= selectedItem.value) {
            playerGold -= selectedItem.value;
            inventory.push(selectedItem);
            console.log("You bought a " + selectedItem.name + "!");
        } else {
            console.log("You don't have enough gold!");
        }
    }
}

/**
 * Handles purchasing items at the market
 */
function buyFromMarket() {
    if (playerGold >= healthPotion.value) {
        console.log("\nMerchant: 'This potion will heal your wounds!'");
        playerGold -= healthPotion.value;
        
        // Add potion object to inventory instead of just the name
        inventory.push({...healthPotion}); // Create a copy of the potion object
        
        console.log("You bought a " + healthPotion.name + " for " + healthPotion.value + " gold!");
        console.log("Gold remaining: " + playerGold);
    } else {
        console.log("\nMerchant: 'No gold, no potion!'");
    }
}

// ===========================
// Help System
// Provides information about available commands
// ===========================

/**
 * Shows all available game commands and how to use them
 */
function showHelp() {
    console.log("\n=== AVAILABLE COMMANDS ===");
    
    console.log("\nMovement Commands:");
    console.log("- In the village, choose 1-3 to travel to different locations");
    console.log("- In other locations, choose the return option to go back to the village");
    
    console.log("\nBattle Information:");
    console.log("- You need a weapon to win battles");
    console.log("- Weapons have different damage values");
    console.log("- Monsters appear in the forest");
    console.log("- Without a weapon, you'll lose health when retreating");
    
    console.log("\nItem Usage:");
    console.log("- Health potions restore health based on their effect value");
    console.log("- You can buy potions at the market for " + healthPotion.value + " gold");
    console.log("- You can buy a sword at the blacksmith for " + sword.value + " gold");
    console.log("- You can buy a Steel Sword at the blacksmith for " + steelSword.value + " gold");
    console.log("- You can buy a Wooden Shield at the blacksmith for " + woodenShield.value + " gold");
    console.log("- You can buy a Iron Shield at the blacksmith for " + ironShield.value + " gold");
    console.log("\nOther Commands:");
    console.log("- Choose the status option to see your health and gold");
    console.log("- Choose the help option to see this message again");
    console.log("- Choose the quit option to end the game");
    
    console.log("\nTips:");
    console.log("- Keep healing potions for dangerous areas");
    console.log("- Defeat monsters to earn gold");
    console.log("- Health can't go above 100");
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

    // ============================
    // VILLAGE
    // ============================
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

            console.log("\nA monster appears!");
            if (!handleCombat(false)) {
                currentLocation = "village";
            }
        }
        else if (choiceNum === 4) showStatus();
        else if (choiceNum === 5) useItem();
        else if (choiceNum === 6) showHelp();
        else if (choiceNum === 7) gameRunning = false;
    }

    // ============================
    // BLACKSMITH
    // ============================
    else if (currentLocation === "blacksmith") {
        if (choiceNum === 5) {
            currentLocation = "village";
            console.log("\nYou return to the village center.");
            validMove = true;
        }
        else if (choiceNum === 6) showStatus();
        else if (choiceNum === 7) useItem();
        else if (choiceNum === 8) showHelp();
        else if (choiceNum === 9) {
            gameRunning = false;
            console.log("\nThanks for playing!");
        }
    }

    // ============================
    // MARKET
    // ============================
    else if (currentLocation === "market") {
        if (choiceNum === 2) {
            currentLocation = "village";
            console.log("\nYou return to the village center.");
            validMove = true;
        }
        else if (choiceNum === 3) showStatus();
        else if (choiceNum === 4) useItem();
        else if (choiceNum === 5) showHelp();
        else if (choiceNum === 6) {
            gameRunning = false;
            console.log("\nThanks for playing!");
        }
    }

    // ============================
    // FOREST
    // ============================
    else if (currentLocation === "forest") {
        if (choiceNum === 1) {
            // Regular monster
            if (!handleCombat(false)) {
                currentLocation = "village";
            }
            validMove = true;
        }
        else if (choiceNum === 2) {
            // Dragon fight
            if (!hasGoodEquipment()) {
                console.log("\nYou cannot fight the Dragon - Need a Steel Sword & any Armor");
            } else {
                handleCombat(true);
            }
            validMove = true;
        }
        else if (choiceNum === 3) {
            currentLocation = "village";
            console.log("You flee back to the safety of the village.");
            validMove = true;
        }
        else if (choiceNum === 4) showStatus();
        else if (choiceNum === 5) useItem();   // unified item usage
        else if (choiceNum === 6) console.log("Help: You need a weapon to defeat the Dragon!");
        else if (choiceNum === 7) gameRunning = false;
    }

    // ============================
    // Death Check
    // ============================
    if (playerHealth <= 0) {
        console.log("You have died! Game Over");
        gameRunning = false;
    }

    return validMove;
}

// ===========================
// Input Validation
// Functions that validate player input
// ===========================

/**
 * Validates if a choice number is within valid range
 * @param {string} input The user input to validate
 * @param {number} max The maximum valid choice number
 * @returns {boolean} True if choice is valid
 */
function isValidChoice(num, max) {
    return num >= 1 && num <= max;
}

// ===========================
// Main Game Loop
// Controls the flow of the game
// ===========================

console.log("=================================");
console.log("       The Dragon's Quest        ");
console.log("=================================");
console.log("\nYour quest: Defeat the dragon in the mountains!");

// Get player's name
playerName = readline.question("\nWhat is your name, brave adventurer? ");
console.log("\nWelcome, " + playerName + "!");
console.log("You start with " + playerGold + " gold.");

while (gameRunning) {
    // Show current location and choices
    showLocation();

    let validChoice = false;

    while (!validChoice) {
        try {
            let choice = readline.question("\nEnter choice (number): ");

            if (choice.trim() === "") {
                throw "Please enter a number!";
            }
            let choiceNum = parseInt(choice);
            if (isNaN(choiceNum)) {
                throw "That's not a number! Please enter a number.";
            }
            // Validate based on location - This can be Village, BlackSmith,Market or Forest.
            if (currentLocation === "village") {
                if (!isValidChoice(choiceNum, 7)) {
                    throw "Please enter a number between 1 and 7.";
                }
                validChoice = true;

                // Movement + actions
                move(choiceNum);
            }
            else if (currentLocation === "blacksmith") {
                if (!isValidChoice(choiceNum, 9)) {
                    throw "Please enter a number between 1 and 9.";
                }
                validChoice = true;

                if (choiceNum >= 1 && choiceNum <= 4) {
                    buyFromBlacksmith(choiceNum);
                } else {
                    move(choiceNum);
                }
            }

            else if (currentLocation === "market") {
                if (!isValidChoice(choiceNum, 6)) {
                    throw "Please enter a number between 1 and 6.";
                }
                validChoice = true;

                if (choiceNum === 1) {
                    buyFromMarket();
                } else {
                    move(choiceNum);
                }
            }

            else if (currentLocation === "forest") {
                if (!isValidChoice(choiceNum, 7)) {
                    throw "Please enter a number between 1 and 7.";
                }
                validChoice = true;

                move(choiceNum);
            }

        } catch (error) {
            console.log("\nError: " + error);
            console.log("Please try again!");
        }
    }

    // Final death check
    if (playerHealth <= 0) {
        console.log("\nGame Over! Your health reached 0!");
        gameRunning = false;
    }
}
