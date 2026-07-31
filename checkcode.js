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
let monsterDefense = 5;    // Monster's defense value
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
    name: "steel sword",
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
    const allArmor = getItemByType("armor");
    // Ensure weapon exist and Armor is not giving null value
    if(!bestWeapon || !allArmor.length === 0 ){
        return false;
    }
    return bestWeapon.name === "Steel Sword";
}

//Test code..
console.log(getItemsByType("armor"));
console.log(getBestItem("armor"));
console.log("==============Get best item ==============");

console.log(hasGoodEquipment());


