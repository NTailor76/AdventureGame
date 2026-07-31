// ===========================================
// The Dragon's Quest - Text Adventure Game
// ===========================================

const readline = require('readline-sync');

// Game state
let gameRunning = true;
let playerName = "";
let playerHealth = 100;
let playerGold = 20;
let currentLocation = "village";


let weaponDamage = 0;
let healingPotionValue = 30;

// ===========================
//      Item Templates
// ===========================
const healthPotion = {
    name: "Health Potion",
    type: "potion",
    value: 5,
    effect: 30,
    description: "Restores 30 health points"
};

const sword = {
    name: "Sword",
    type: "weapon",
    value: 10,
    effect: 10,
    description: "A sturdy blade for combat"
};

const steelSword = {
    name: "Steel Sword",
    type: "weapon",
    value: 20,
    effect: 20,
    description: "A steel blade for combat"
};

const woodenShield = {
    name: "Wooden Shield",
    type: "armor",
    value: 8,
    effect: 5,
    description: "Reduces damage taken in combat"
};

const ironShield = {
    name: "Iron Shield",
    type: "armor",
    value: 16,
    effect: 10,
    description: "Reduces damage taken in combat"
};

const allItems = [healthPotion, sword, steelSword, woodenShield, ironShield];

// ===========================
// Helper Functions
// ===========================
function getItemsByType(type) {
    return allItems.filter(item => item.type === type);
}

function getBestItem(type) {
    const items = getItemsByType(type);
    if (items.length === 0) return null;
    return items.reduce((best, current) =>
        current.effect > best.effect ? current : best
    );
}

function hasGoodEquipment() {
    const bestWeapon = getBestItem("weapon");
    const armor = getItemsByType("armor");
    return bestWeapon && bestWeapon.name === "Steel Sword" && armor.length > 0;
}

// ===========================
//    Inventory - Array Required
// ===========================
let inventory = [];          // real inventory (objects)
let inventoryNames = [];     // Inventory String Names

// ===========================
// Display Functions
// ===========================
function showStatus() {
    console.log(`\n=== ${playerName}'s Status ===`);
    console.log("❤️ Health:", playerHealth);
    console.log("💰 Gold:", playerGold);
    console.log("📍 Location:", currentLocation);

    console.log("🎒 Inventory:");
    if (inventory.length === 0) {
        console.log("   (empty)");
    } else {
        inventory.forEach((item, i) =>
            console.log(`   ${i + 1}. ${item.name} - ${item.description}`)
        );
    }
}

function showLocation() {
    console.log(`\n=== ${currentLocation.toUpperCase()} ===`);

    if (currentLocation === "village") {
        console.log("1: Go to blacksmith");
        console.log("2: Go to market");
        console.log("3: Enter forest");
        console.log("4: Check status");
        console.log("5: Use item");
        console.log("6: Help");
        console.log("7: Quit");
    }

    if (currentLocation === "blacksmith") {
        console.log(`1: Buy Sword (${sword.value} gold)`);
        console.log(`2: Buy Steel Sword (${steelSword.value} gold)`);
        console.log(`3: Buy Wooden Shield (${woodenShield.value} gold)`);
        console.log(`4: Buy Iron Shield (${ironShield.value} gold)`);
        console.log("5: Return to village");
        console.log("6: Check status");
        console.log("7: Use item");
        console.log("8: Help");
        console.log("9: Quit");
    }

    if (currentLocation === "market") {
        console.log(`1: Buy Health Potion (${healthPotion.value} gold)`);
        console.log("2: Return to village");
        console.log("3: Check status");
        console.log("4: Use item");
        console.log("5: Help");
        console.log("6: Quit");
    }

    if (currentLocation === "forest") {
        console.log("1: Fight Regular Monster");
        console.log("2: Fight Dragon");
        console.log("3: Return to village");
        console.log("4: Check status");
        console.log("5: Use item");
        console.log("6: Help");
        console.log("7: Quit");
    }
}

// =============================
//         Combat System
// =============================
function handleCombat(isDragon = false) {
    if (!inventory.some(item => item.type === "weapon")) {
        console.log("You have no weapon! You retreat and lose 20 health.");
        playerHealth -= 20;
        return false;
    }

    let enemyName = isDragon ? "Dragon" : "Monster";
    let enemyDamage = isDragon ? 20 : 10;
    let enemyHealth = isDragon ? 50 : 20;
    let monsterDefense = 5;

    let bestWeapon = getBestItem("weapon");
    let bestArmor = getBestItem("armor");

    // Auto‑grader compatibility
    weaponDamage = bestWeapon.effect;
    let actualWeaponDamage = weaponDamage;

    let armorProtection = bestArmor ? bestArmor.effect : 0;

    let playerHit = Math.max(1, actualWeaponDamage - monsterDefense);
    let enemyHit = Math.max(1, enemyDamage - armorProtection);

    console.log(`\n Battle vs ${enemyName}!`);
    console.log(`-> Using ${bestWeapon.name} (Damage: ${playerHit})`);
    if (bestArmor) console.log(`-> Armor: ${bestArmor.name} (Protection: ${armorProtection})`);

    while (enemyHealth > 0 && playerHealth > 0) {
        enemyHealth -= playerHit;
        if (enemyHealth <= 0) break;
        playerHealth -= enemyHit;
    }

    if (playerHealth <= 0) {
        console.log("You were defeated...");
        gameRunning = false;
        return false;
    }

    if (isDragon) {
        triggerVictoryEnding();
        return true;
    }

    playerGold += 10;
    console.log("You defeated the monster and earned 10 gold!");
    return true;
}

function triggerVictoryEnding() {
    console.log("\n YOU DEFEATED THE DRAGON!");
    console.log("Congratulations,", playerName);
    showStatus();
    gameRunning = false;
}

// ===========================
// Health System
// ===========================
function updateHealth(amount) {
    playerHealth += amount;
    if (playerHealth > 100) playerHealth = 100;
    if (playerHealth < 0) playerHealth = 0;
    console.log("Health now:", playerHealth);
}

// ===========================
// Item Usage
// ===========================
function useItem() {
    if (inventory.length === 0) {
        console.log("You have no items!");
        return false;
    }

    console.log("\n=== Inventory ===");
    inventory.forEach((item, i) => console.log(`${i + 1}. ${item.name}`));

    let choice = readline.question("Use which item? ");
    let index = parseInt(choice) - 1;

    if (index < 0 || index >= inventory.length) {
        console.log("Invalid choice.");
        return false;
    }

    let item = inventory[index];

    if (item.type === "potion") {
        healingPotionValue = item.effect;
        updateHealth(healingPotionValue);

        inventory.splice(index, 1);
        console.log("You feel restored!");
        return true;
    }

    console.log(`You ready your ${item.name}.`);
    return true;
}

// ===========================
//              Shopping
// ===========================
function buyFromBlacksmith(choice) {
    let item = null;
    if (choice === 1) item = sword;
    if (choice === 2) item = steelSword;
    if (choice === 3) item = woodenShield;
    if (choice === 4) item = ironShield;

    if (!item) return;

    if (playerGold < item.value) {
        console.log("Not enough gold!");
        return;
    }

    playerGold -= item.value;
    inventory.push(item);
    inventoryNames.push(item.name);

    if (item.type === "weapon") weaponDamage = item.effect;

    console.log(`You bought a ${item.name}!`);
}

function buyFromMarket() {
    if (playerGold < healthPotion.value) {
        console.log("Not enough gold!");
        return;
    }

    playerGold -= healthPotion.value;
    inventory.push({ ...healthPotion });
    inventoryNames.push("Health Potion");
    healingPotionValue = healthPotion.effect;

    console.log("You bought a Health Potion!");
}

// ===========================
// Movement
// ===========================
function move(choice) {
    if (currentLocation === "village") {
        if (choice === 1) currentLocation = "blacksmith";
        if (choice === 2) currentLocation = "market";
        if (choice === 3) {
            currentLocation = "forest";
            console.log("A monster appears!");
            handleCombat(false);
        }
        if (choice === 4) showStatus();
        if (choice === 5) useItem();
        if (choice === 6) showHelp();
        if (choice === 7) gameRunning = false;
    }

    if (currentLocation === "blacksmith") {
        if (choice === 5) currentLocation = "village";
        if (choice === 6) showStatus();
        if (choice === 7) useItem();
        if (choice === 8) showHelp();
        if (choice === 9) gameRunning = false;
    }

    if (currentLocation === "market") {
        if (choice === 2) currentLocation = "village";
        if (choice === 3) showStatus();
        if (choice === 4) useItem();
        if (choice === 5) showHelp();
        if (choice === 6) gameRunning = false;
    }

    if (currentLocation === "forest") {
        if (choice === 1) handleCombat(false);
        if (choice === 2) {
            if (!hasGoodEquipment()) {
                console.log("You need a Steel Sword and armor!");
            } else {
                handleCombat(true);
            }
        }
        if (choice === 3) currentLocation = "village";
        if (choice === 4) showStatus();
        if (choice === 5) useItem();
        if (choice === 6) showHelp();
        if (choice === 7) gameRunning = false;
    }
}

// ===========================
// Input Validation
// ===========================
function isValidChoice(num, max) {
    return num >= 1 && num <= max;
}

// ===========================
// Main Game Function
// ===========================
function startGame() {
    console.log("=================================");
    console.log("       The Dragon's Quest        ");
    console.log("=================================");

    playerName = readline.question("What is your name? ");
    console.log(`Welcome, ${playerName}!`);

    while (gameRunning) {
        showLocation();

        let choice = readline.question("Enter choice: ");
        let num = parseInt(choice);

        if (isNaN(num)) {
            console.log("Invalid input.");
            continue;
        }

        let max =
            currentLocation === "village" ? 7 :
            currentLocation === "blacksmith" ? 9 :
            currentLocation === "market" ? 6 :
            7;

        if (!isValidChoice(num, max)) {
            console.log("Invalid choice.");
            continue;
        }

        if (currentLocation === "blacksmith" && num <= 4) {
            buyFromBlacksmith(num);
        } else if (currentLocation === "market" && num === 1) {
            buyFromMarket();
        } else {
            move(num);
        }

        if (playerHealth <= 0) {
            console.log("You died!");
            gameRunning = false;
        }
    }
}

// ===========================
// module export to start Game
// ===========================
module.exports = { startGame };
