// ===========================================
// The Dragon's Quest - Enhanced Text Adventure
// ===========================================

const readline = require("readline-sync");

// ===========================
// Game State Variables
// ===========================
let gameRunning = true;
let playerName = "";
let playerHealth = 100;
let playerGold = 20;
let currentLocation = "village";

// ===========================
// Item Templates
// ===========================
const healthPotion = { name: "Health Potion", type: "potion", value: 5, effect: 30, description: "Restores 30 health points" };
const sword = { name: "Sword", type: "weapon", value: 10, effect: 10, description: "A sturdy blade for combat" };
const steelSword = { name: "Steel Sword", type: "weapon", value: 25, effect: 20, description: "Sharper and stronger than a basic sword" };
const woodenShield = { name: "Wooden Shield", type: "armor", value: 8, effect: 5, description: "Reduces damage taken in combat" };
const ironShield = { name: "Iron Shield", type: "armor", value: 20, effect: 15, description: "Strong protection against attacks" };

// Player inventory
let inventory = [];

// ===========================
// Helper Functions
// ===========================
function getItemsByType(type) {
  return inventory.filter((item) => item.type === type);
}

function getBestItem(type) {
  const items = getItemsByType(type);
  if (items.length === 0) return null;
  return items.reduce((best, item) => (item.effect > best.effect ? item : best), items[0]);
}

function hasGoodEquipment() {
  const weapon = inventory.find((item) => item.name === "Steel Sword");
  const armor = getItemsByType("armor");
  return weapon && armor.length > 0;
}

// ===========================
// Display Functions
// ===========================
function showStatus() {
  console.log(`\n=== ${playerName}'s Status ===`);
  console.log(`❤️ Health: ${playerHealth}`);
  console.log(`💰 Gold: ${playerGold}`);
  console.log(`📍 Location: ${currentLocation}`);
  console.log("🎒 Inventory:");
  if (inventory.length === 0) console.log("   Nothing in inventory");
  else inventory.forEach((item, i) => console.log(`   ${i + 1}. ${item.name} - ${item.description}`));
}

function showLocation() {
  console.log(`\n=== ${currentLocation.toUpperCase()} ===`);
  if (currentLocation === "village") {
    console.log("You're in a bustling village. The blacksmith and market are nearby.");
    console.log("1: Go to blacksmith\n2: Go to market\n3: Enter forest\n4: Check status\n5: Use item\n6: Help\n7: Quit game");
  } else if (currentLocation === "blacksmith") {
    console.log("Weapons and armor line the walls.");
    console.log(`1: Buy Sword (${sword.value} gold)\n2: Buy Steel Sword (${steelSword.value} gold)\n3: Buy Wooden Shield (${woodenShield.value} gold)\n4: Buy Iron Shield (${ironShield.value} gold)\n5: Return to village\n6: Check status\n7: Use item\n8: Help\n9: Quit game`);
  } else if (currentLocation === "market") {
    console.log("Merchants sell potions.");
    console.log(`1: Buy Health Potion (${healthPotion.value} gold)\n2: Return to village\n3: Check status\n4: Use item\n5: Help\n6: Quit game`);
  } else if (currentLocation === "forest") {
    console.log("The forest is dark and foreboding.");
    console.log("1: Return to village\n2: Check status\n3: Use item\n4: Help\n5: Explore deeper (fight dragon)");
  }
}

// ===========================
// Combat Functions
// ===========================
function handleCombat(isDragon = false) {
  const weapon = getBestItem("weapon");
  const armor = getBestItem("armor");
  if (!weapon) {
    console.log("You have no weapon! You take damage and must retreat!");
    updateHealth(isDragon ? -30 : -20);
    return false;
  }

  const monster = isDragon ? { name: "Dragon", damage: 20, health: 50 } : { name: "Monster", damage: 10, health: 20 };
  const armorProtection = armor ? armor.effect : 0;
  console.log(`\nYou face a ${monster.name}!`);

  console.log(`You attack with ${weapon.name} (${weapon.effect} damage)`);
  console.log(`${monster.name} attacks you!`);
  let damageTaken = monster.damage - armorProtection;
  if (damageTaken < 1) damageTaken = 1;
  console.log(`Armor reduces damage by ${armorProtection}. You take ${damageTaken} damage.`);
  updateHealth(-damageTaken);

  if (isDragon && !hasGoodEquipment()) {
    console.log("The dragon is too strong for your current equipment! You retreat.");
    return false;
  }

  console.log(`You defeated the ${monster.name}!`);
  const goldEarned = isDragon ? 100 : 10;
  console.log(`You earn ${goldEarned} gold!`);
  playerGold += goldEarned;
  if (isDragon) {
    console.log("\n🎉 Congratulations! You defeated the Dragon and completed your quest! 🎉");
    console.log(`Final Status: Health: ${playerHealth}, Gold: ${playerGold}`);
    gameRunning = false;
  }
  return true;
}

function updateHealth(amount) {
  playerHealth += amount;
  if (playerHealth > 100) playerHealth = 100;
  if (playerHealth < 0) playerHealth = 0;
  return playerHealth;
}

// ===========================
// Item Functions
// ===========================
function useItem() {
  if (inventory.length === 0) return console.log("No items in inventory!");

  console.log("\n=== Inventory ===");
  inventory.forEach((item, i) => console.log(`${i + 1}. ${item.name}`));
  let choice = readline.question("Use which item? (number or 'cancel'): ");
  if (choice === "cancel") return false;
  const index = parseInt(choice) - 1;
  if (index >= 0 && index < inventory.length) {
    const item = inventory[index];
    if (item.type === "potion") {
      console.log(`You use ${item.name}`);
      updateHealth(item.effect);
      inventory.splice(index, 1);
      return true;
    } else if (item.type === "weapon" || item.type === "armor") {
      console.log(`You ready your ${item.name}`);
      return true;
    }
  }
  console.log("Invalid choice!");
  return false;
}

// ===========================
// Shopping Functions
// ===========================
function buyItem(item) {
  if (playerGold >= item.value) {
    inventory.push({ ...item });
    playerGold -= item.value;
    console.log(`Bought ${item.name} for ${item.value} gold. Remaining: ${playerGold}`);
  } else console.log("Not enough gold!");
}

// ===========================
// Movement Functions
// ===========================
function move(choiceNum) {
  if (currentLocation === "village") {
    if (choiceNum === 1) currentLocation = "blacksmith";
    else if (choiceNum === 2) currentLocation = "market";
    else if (choiceNum === 3) {
      currentLocation = "forest";
      console.log("You enter the forest...");
      console.log("A monster appears!");
      handleCombat();
    }
  } else if (currentLocation === "blacksmith" || currentLocation === "market") {
    if (choiceNum === (currentLocation === "blacksmith" ? 5 : 2)) currentLocation = "village";
  } else if (currentLocation === "forest") {
    if (choiceNum === 1) currentLocation = "village";
    if (choiceNum === 5) handleCombat(true); // Dragon fight
  }
}

// ===========================
// Input Validation
// ===========================
function isValidChoice(input, max) {
  const num = parseInt(input);
  return !isNaN(num) && num >= 1 && num <= max;
}

// ===========================
// Main Game Loop
// ===========================
if (require.main === module) {
  console.log("=================================");
  console.log("       The Dragon's Quest        ");
  console.log("=================================");
  console.log("\nYour quest: Defeat the dragon in the mountains!");

  playerName = readline.question("What is your name, brave adventurer? ");
  console.log(`Welcome, ${playerName}!`);

  while (gameRunning) {
    showLocation();
    const choice = readline.question("\nEnter choice: ");
    if (!choice.trim()) continue;
    const choiceNum = parseInt(choice);
    move(choiceNum);

    if (playerHealth <= 0) {
      console.log("Game Over! Your health reached 0!");
      gameRunning = false;
    }
  }
}