// Task 1 - Task 1: Creating a User Profile - Let's learn how objects help us group related information together!
// Create a user profile object
let userProfile = {
    name: "sarah smith",
    age: 25,
    email: "sarah.smith@hotmail.com",
    isStudent: true,
    // Use method to check the student
    checkStudent(){
        if (this.isStudent){
            console.log(" ===== They are students =====");
        } else{"They are not students"};
    }
};
// show the entire profile
userProfile.checkStudent();

console.log(" ==== User Profile: =============== ");
//show specific information of the user
console.log(userProfile.name);
console.log(userProfile.age);
console.log(userProfile.email);
console.log(userProfile.isStudent);
console.log(userProfile.address); // Get undfined.
console.log("Name of the user: " + userProfile.name + " and their age is: " + userProfile.age);

// Task 2 - Task 2: Product Information - Learn how to modify object properties and add new ones!
console.log(" === Task 2: Product Information - Learn how to modify object properties and add new ones! ============ ")
// Create a product object
let product = {
    name: "laptop",
    price: 799.99,
    inStock: true
};
product.name = "Gaming Laptop";
product.model = "XPS-15";
product.inStock = false;
product.color = "Silver";
product.warranty = "2 years";
console.log("Product Details:");
console.log("Name: " + product.name);
console.log("Model: " + product.model);
console.log("Price: $" + product.price);
console.log("In Stock: " + product.inStock);
console.log("Color: " + product.color);
console.log("Warranty: " + product.warranty);

//Task 3 - Task 3: Creating a Book Object - Build your own object to store book information!
// Create a book object with these properties:
console.log(" === Task 3 - Task 3: Creating a Book Object - Build your own object to store book information! ============ ")
let book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    isAvailable: true,
    pages: 180,
    genre: "Fiction",
    rating: 4.5
};
console.log("=== Book Information ===");
console.log("Title: " + book.title);
console.log("Author: " + book.author);
console.log("Year: " + book.year);
console.log("Genre: " + book.genre);
console.log("Pages: " + book.pages);
console.log("Rating: " + book.rating + "/5");
console.log("Available: " + book.isAvailable);

//Task 4: Library Catalog - Combine objects with arrays to create a collection!
// Create an array of book objects ---- Each book should have title, author, and isCheckedOut
console.log(" === Task 4: Library Catalog - Combine objects with arrays to create a collection! ============ ")
let library =[
    {title: "1984", author: "George Orwell", isCheckedOut: false},
    {title: "The Hobbit", author: "J.R.R. Tolkien", isCheckedOut: true},
    {title: "Dune", author: "Frank Herbert", isCheckedOut: false}
];
// Create functions to:
// 1. Display all books
function displayAllBooks(){
    console.log("=== Library Catalog ===");   
  for (let i=0;i < library.length;i++){
    console.log((i + 1) + ". " + library[i].title + " by " + library[i].author);
     console.log("   Status: " + (library[i].isCheckedOut ? "Checked Out" : "Available"));
  }  
}
function findBooksByAuthor(authorName){
     console.log("Books by " + authorName + ":");   
    for(let i=0; i < library.length;i++){
        if (library[i].author === authorName){
            console.log(" - " + library[i].title);
        }else{
            console.log("Author Name does match any books in the library!");
        }
    }
}
function listAvailableBooks(){
      console.log("Available Books:");
   for(let i=0;i<library.length;i++){
    if(!library[i].isCheckedOut){
        console.log(" - " + library[i].title + " by " + library[i].author); 
    }

   }  
}
displayAllBooks();
findBooksByAuthor("Frank Herbert");
listAvailableBooks();

//======================================================================================================================================================================================

// Practice Personal learning for functions and Objects....
console.log(" === Practice Personal learning for functions and Objects.... ============ ")

    let assets = [
        {assetCode: "NT-000001", assetClass: "building", assetDepartment: "Sales",serialNo: "NT-SER-000001", make: "Dell",purchaseCost:4000, assetLife:999,status:true},
        {assetCode: "NT-000002", assetClass: "cars", assetDepartment: "marketing",serialNo: "NT-SER-000002", make: "toyota",purchaseCost:20000, assetLife:20,status:true},
        {assetCode: "NT-000003", assetClass: "furniture", assetDepartment: "marketing",serialNo: "NT-SER-000003", make: "ikea",purchaseCost:400, assetLife:3,status:true},
        {assetCode: "NT-000004", assetClass: "furniture", assetDepartment: "Support",serialNo: "NT-SER-000004", make: "ikea",purchaseCost:300, assetLife:3,status:false},
    ]
//1. function to select the usercodes only
function userCodes(){
    console.log("=== Asset User Codes ===");
    for (let i=0; i < assets.length;i++){
       console.log((i+1 + ". " +" Asset Code: " + assets[i].assetCode + "  " + "Asset Class: "  + assets[i].assetClass + "  " + " Asset Department: " + assets[i].assetDepartment +"  "));  
    }
}
//2. function to select the description Fields - restrict by Serial Number restriction....
function assetDescriptions(serialNo){
     console.log("=== Asset Description ===");
     let found = false;
    for(let i = 0; i < assets.length;i++){
        if(assets[i].serialNo === serialNo){
            console.log(i+1 + ". " +" Asset Code: " + assets[i].assetCode + "  " + "Serial Number: " + assets[i].serialNo + "  Make:  " + assets[i].make + " --- Successfully found in Register " );
            found = true;
            break;//stop loop once you find it.
        }
        }   
        if (!found) {
            console.log(" Serial Number: " + serialNo + " not found in Assets Register");    
     }
}
//3. function to select the purchase cost and asset life - 2 condition - purchase cost <1000 and Live Assets Only.

function purchaseCostLiveassets(){
    console.log("=== Asset purchase Costs ===");
    for(let i=0;i < assets.length;i++){
        if (assets[i].purchaseCost < 1000 && !assets[i].status){
            console.log(i+1 + ". " +" Asset Code: " + assets[i].assetCode + "  purchase cost is less than £ 1000 and status is: " + assets[i].status );
        }else if
         (assets[i].purchaseCost <= 4000 && assets[i].status){
            console.log(i+1 + ". " +" Asset Code: " + assets[i].assetCode + "  purchase cost is less than or Equal to £ 4000 and status is: " + assets[i].status );
        } else{
            console.log(i+1 + ". " +" Asset Code: " + assets[i].assetCode + "  purchase cost is More than £4000 and status is: " + assets[i].status );
        }
    }        
}
//4. function to restrict by live assets only.
userCodes();
assetDescriptions("NT-SER-000001");
purchaseCostLiveassets()

//================================================================================================================================================
/*
Summary ReferenceMethod What it asks JavaScriptWhat it returns to you
some()"Is there at least one?"A single true or false
find()"Get me the first one that matches."One single item object (or undefined)
filter()"Give me a list of all matches."A brand new array of objects
map()"Change every item into something else."A brand new array of transformed data

*/
//Lets see this in action.......
// The player's current inventory
const inventory = [
    { name: "Rusty Sword", type: "weapon", value: 15 },
    { name: "Mana Potion", type: "potion", value: 10 },
    { name: "Golden Ore", type: "resource", value: 100 },
    { name: "Iron Ore", type: "resource", value: 30 },
    { name: "Health Potion", type: "potion", value: 10 }
];

//1. some() — The Quick Check (Returns true or false)
console.log(" === 1. some() — The Quick Check (Returns true or false) ==== ")

const hasExpensiveItem = inventory.some(item => item.value >50);
console.log(hasExpensiveItem);

//2. find() — The Search Party (Returns one single item)
console.log(" === 2. find() — The Search Party (Returns one single item) ==== ")

const potionToDrink = inventory.find( item => item.type ==="potion");
console.log(potionToDrink);

//3. filter() — The Sorting Hat (Returns a new, smaller list)
console.log(" === 3. filter() — The Sorting Hat (Returns a new, smaller list) ==== ")

const craftingResources = inventory.filter(item => item.type === "potion");
console.log(craftingResources);

//4. map() — The Transformer (Returns a new list of different data)
console.log(" === 4. map() — The Transformer (Returns a new list of different data) ==== ")

const displayNames = inventory.map(item => item.name);
console.log(displayNames);





