//Task 1: Product Catalog - Explore how arrays of objects can organize a product catalog!
console.log(" === Task 1: Product Catalog - Explore how arrays of objects can organize a product catalog! === ");
// Create a product catalog using an array of objects
let productCatalog = [
{id:101,name:"Wireless Headphones",price: 79.99,category:"Electronics",inStock: true},
{id:102,name:"Running Shoes",price: 59.95,category:"Footwear",inStock: false},
{id:103,name:"Coffee Mug",price: 12.50,category:"Kitchen",inStock: true}
];

// Display all product names
console.log("Products in catalog:");
for(let i=0; i < productCatalog.length;i++){
    console.log( i+1+"." +productCatalog[i].name + " - $" + productCatalog[i].price);
}

// Find products in a specific category
console.log("\nElectronics products:");
for (let i = 0; i < productCatalog.length; i++) {
    if (productCatalog[i].category === "Electronics") {
        console.log(productCatalog[i].name);
    }
}


// Dialog for Nested Example
console.log(" === Dialog for Nested Example === ");
let testRepositoryFixedAssets = {
    // Regression Testing Type Suite
    "Regression": {
        modules: {
            "Asset4000": {
                frequency: "Weekly",
                features: ["Asset Processing", "Reporting"]
            },
            "Forecast4000": {
                frequency: "monthly",
                features: ["Forecast Processing", "Reporting"]
            }
        }
    },
    // Smoke Testing Type Suite (Replicating the same structure)
    "Smoke": {
        modules: {
            "Asset4000": {
                frequency: "Daily", // Smoke typically runs more frequently
                features: ["Asset Processing", "Reporting"]
            },
            "Forecast4000": {
                frequency: "Daily",
                features: ["Forecast Processing", "Reporting"]
            }
        }
    }
};

// Example: Direct targeting of different suites
console.log("Regression Asset4000 Schedule:", testRepositoryFixedAssets["Regression"].modules["Asset4000"].frequency);
console.log("Smoke Forecast4000 Schedule:", testRepositoryFixedAssets["Smoke"].modules["Forecast4000"].features);







// Task 2: Company Organization - Explore nested objects to represent hierarchical data!
// Create a company structure using nested objects
//Nested objects represent hierarchical relationships
//Use dot notation to drill down through levels
//Each level can contain different types of data
//Great for representing complex real-world structures

console.log(" === Task 2: Company Organization - Explore nested objects to represent hierarchical data! === ");
let company = {
    name: "Tech Innovations Inc",
    founded: 2010,
    departments: {
        engineering: {
            head: "Alex Wong",
            employees: 45,
            team: ["fronted", "backend","QA"]
            },
        marketing: {
            head: "Sarah Chen",
            employees: 18,
            teams: ["Digital", "Events", "Content"]
            },
        hr: {
            head: "Taylor Johnson",
            employees: 12,
            teams: ["Recruiting", "Benefits"]
            }
    },
    location: {
        city: "San Francisco",
        state: "CA",
        address: "123 Tech Blvd"
    }
};

// Access nested data...
console.log("company: " + company.name);
console.log("Engineering Head: " + company.departments.engineering.head);
console.log("Marketing Teams: " + company.departments.marketing.teams);
console.log("Location: " + company.location.city + ", " + company.location.state);
//======================================================================================================================

//Task 3: Data Transformation -  Process complex data structures to extract useful information!
// Student data with grades for different subjects
console.log(" === Task 3: Data Transformation -  Process complex data structures to extract useful information! === ");

const studentRecords = [
    { name: "Emma Wilson", id: "ST1001", grades: { math: 90, science: 85, english: 92 } },
    { name: "Michael Brown", id: "ST1002", grades: { math: 78, science: 95, english: 84 } },
    { name: "Sophia Martinez", id: "ST1003", grades: { math: 88, science: 82, english: 96 } }
];

// // Clean data processing function using Array.map()
// function calculateStudentAverages(students){
//     return students.map(({ name, id, grades }) => {
//         // Calculate average
//         const total = grades.math + grades.science + grades.english;
//         const average = (total / 3).toFixed(1);
//         // Find highest grade and match its subject name
//         const highestGrade = Math.max(grades.math, grades.science, grades.english);
//         const highestSubject = Object.keys(grades).find(key => grades[key] === highestGrade);        
//         // Directly return the transformed student object
//         return { name, id, average, highestGrade, highestSubject };

//     }); // 1. Closes the arrow function and the .map( ) parenthesis
// } // 2. Closes the main calculateStudentAverages{ } function

// // Print results using Array.forEach()
// const studentReport = calculateStudentAverages(studentRecords);
// console.log("Student Performance Report:");

// studentReport.forEach(student => {
//     console.log(`${student.name} (ID: ${student.id})`);
//     console.log(`  Average Grade: ${student.average}`);
//     console.log(`  Highest Grade: ${student.highestGrade} in ${student.highestSubject}`);
//     console.log("-----------------");
// });

// Create a function to process this data
function calculateStudentAverages(students) {
    let report = [];
    
    for (let i = 0; i < students.length; i++) {
        let student = students[i];
        let grades = student.grades;
        
        // Calculate average
        let total = grades.math + grades.science + grades.english;
        let average = total / 3;
        
        // Find highest grade and subject
        let highestGrade = Math.max(grades.math, grades.science, grades.english);
        let highestSubject = "";
        if (grades.math === highestGrade) highestSubject = "math";
        if (grades.science === highestGrade) highestSubject = "science";
        if (grades.english === highestGrade) highestSubject = "english";
        
        // Add to report
        report.push({
            name: student.name,
            id: student.id,
            average: average.toFixed(1),
            highestGrade: highestGrade,
            highestSubject: highestSubject
        });
    }
    
    return report;
}
let studentReport = calculateStudentAverages(studentRecords);
console.log("Student Performance Report:");
for (let i = 0; i < studentReport.length; i++) {
    let student = studentReport[i];
    console.log(student.name + " (ID: " + student.id + ")");
    console.log("  Average Grade: " + student.average);
    console.log("  Highest Grade: " + student.highestGrade + " in " + student.highestSubject);
    console.log("-----------------");
}

//===============================================================================================================
// Task 4: Shopping Cart System - Design a complete system using advanced data structures!
// Create a shopping cart system with:
// 1. A product catalog (array of objects)
console.log(" === Task 4: Shopping Cart System - Design a complete system using advanced data structures! === ");
const productCatalogShopping = [
    {id: 1, name: "Laptop", price: 999.99, category: "Electronics"},
    {id: 2, name: "T-shirt", price: 19.99, category: "Clothing"},
    {id: 3, name: "Coffee Maker", price: 89.95, category: "Kitchen"}
];
// 2. A user cart (object with items array)
const shoppingCart = {
    userId: "user123",
    items:[],
    created: new Date(),
    status: "active"
};
// 3.Functions to add/remove items and calculate totals

function addToCart(productId,quantity = 1){
    //find the product
    let product = null;
    for(let i=0; i < productCatalogShopping.length;i++){
        if(productCatalogShopping[i].id === productId){
            product = productCatalogShopping[i];
            break;
        }
    }
  if (!product){
    return "Product not found";  
}
 
    // Check if already in cart
for (let i = 0; i < shoppingCart.items.length;i++){
        if(shoppingCart.items[i].productId === productId){
            shoppingCart.items[i].quantity +=quantity;
            return "Updated quantity";
        }
}
// Add new items
shoppingCart.items.push({
    productId: productId, 
    name: product.name, 
    price: product.price,
    quantity: quantity
});
return "Added to cart";
}
// Remove item from cart
function removeFromCart(productId){
    for (let i=0; i > shoppingCart.items.length;i++){
        if (shoppingCart.items[i].productId === productId ){
            shoppingCart.items.splice(i,1);
            return "Removed from Cart";
        }
    }
    return "Item not in Cart";
}
// Calculate cart total
function calculateTotal(){
    let total = 0;
    for(let i = 0; i < shoppingCart.items.length; i++){
        total += shoppingCart.items[i].price * shoppingCart.items[i].quantity;
        
    }
    return total;
}
// Test operations
console.log("Adding laptop...");
console.log(addToCart(1, 1));
console.log("Adding two t-shirts...");
console.log(addToCart(2, 2));
console.log("Current cart:");
console.log(shoppingCart.items);
console.log("Total: $" + calculateTotal());
console.log("Removing t-shirt...");
console.log(removeFromCart(2));
console.log("Final cart:");
console.log(shoppingCart.items);
console.log("Final total: $" + calculateTotal());



// // Clean data processing function using Array.map()
// function calculateStudentAverages(students){
//     return students.map(({ name, id, grades }) => {
//         // Calculate average
//         const total = grades.math + grades.science + grades.english;
//         const average = (total / 3).toFixed(1);
//         // Find highest grade and match its subject name
//         const highestGrade = Math.max(grades.math, grades.science, grades.english);
//         const highestSubject = Object.keys(grades).find(key => grades[key] === highestGrade);        
//         // Directly return the transformed student object
//         return { name, id, average, highestGrade, highestSubject };

//     }); // 1. Closes the arrow function and the .map( ) parenthesis
// } // 2. Closes the main calculateStudentAverages{ } function

// // Print results using Array.forEach()
// const studentReport = calculateStudentAverages(studentRecords);
// console.log("Student Performance Report:");

// studentReport.forEach(student => {
//     console.log(`${student.name} (ID: ${student.id})`);
//     console.log(`  Average Grade: ${student.average}`);
//     console.log(`  Highest Grade: ${student.highestGrade} in ${student.highestSubject}`);
//     console.log("-----------------");
// });

//==================================================================================================================================================

//A great real-world equivalent to this data structure is a Flight Booking and 
// Ticket Reservation System (like British Airways or Expedia).Instead of adding physical items to a shopping cart, 
// a user searches a master schedule of available flights, selects their tickets, adds individual passenger seats to their booking reservation, 
// and calculates the total holiday cost before checkout.📋 
// The Flight Reservation Code Examplejavascript// Master database of all available flights on the network

const flightScheduleCatalog = [
    { flightId: "BA123", destination: "New York (JFK)", ticketPrice: 550.00, class: "Economy" },
    { flightId: "BA456", destination: "Paris (CDG)", ticketPrice: 85.50, class: "Economy" },
    { flightId: "BA789", destination: "Tokyo (HND)", ticketPrice: 1200.00, class: "Business" }
];

// The active customer's current trip booking itinerary
const travelReservation = {
    bookingReference: "PNR987",
    passengers: [], // This is the equivalent to your 'items' array
    dateCreated: new Date(),
    status: "Hold"
};

// 1. Add passengers/seats to the flight reservation
function addFlightToBooking(flightId, passengerCount = 1) {
    // Search the master schedule to check if the flight exists
    let flightDetails = null;
    for (let i = 0; i < flightScheduleCatalog.length; i++) {
        if (flightScheduleCatalog[i].flightId === flightId) {
            flightDetails = flightScheduleCatalog[i];
            break;
        }
    }
    
    if (!flightDetails) {
        return "Flight code not found in global schedule.";
    }

    // Check if this flight code is already part of the itinerary
    for (let i = 0; i < travelReservation.passengers.length; i++) {
        if (travelReservation.passengers[i].flightId === flightId) {
            travelReservation.passengers[i].seatsReserved += passengerCount;
            return "Updated seat count for existing flight.";
        }
    }

    // Add a brand new flight entry to the itinerary
    travelReservation.passengers.push({
        flightId: flightId,
        destination: flightDetails.destination,
        ticketPrice: flightDetails.ticketPrice,
        seatsReserved: passengerCount // Equivalent to your quantity field       
    });
    return "Flight successfully added to your itinerary.";
}
// 2. Remove a flight from the itinerary
function removeFlightFromBooking(flightId) {
    for (let i = 0; i < travelReservation.passengers.length; i++) { 
        if (travelReservation.passengers[i].flightId === flightId) {
            travelReservation.passengers.splice(i, 1);
            return "flight removed from the booking.";
        } 
    }
    return "Flight not found in your current booking.";
}

// 3. Calculate total reservation cost
function calculateTotalTripCost(){
    let totalCost = 0;
    for (let i = 0; i < travelReservation.passengers.length; i++) {
        totalCost += travelReservation.passengers[i].ticketPrice * travelReservation.passengers[i].seatsReserved;}
    return totalCost;}

// --- Test operations ---
console.log("=== Booking Process Started ===");
console.log(addFlightToBooking("BA123", 2)); // Adding 2 tickets to New York
console.log(addFlightToBooking("BA456", 1)); // Adding 1 ticket to Paris

console.log("\nCurrent Trip Itinerary:", travelReservation.passengers);
console.log("Total Booking Balance: £" + calculateTotalTripCost().toFixed(2));

//=========================================================================================================================
// 1 more Real Life Scenario for practice purpose.
console.log("  ===== 1 more Real Life Scenario for practice purpose. ---Online Food Delivery Order System")
// 1. Master Menu Catalog (Array of Objects)
// This is your read-only database of what the restaurant sells.
const restaurantMenuCatalog = [
    { itemId: "M101", itemName: "Wagyu Beef Burger", unitPrice: 14.99, type: "Main" },
    { itemId: "M202", itemName: "Sweet Potato Fries", unitPrice: 4.50, type: "Side" },
    { itemId: "M303", itemName: "Craft IPA Beer", unitPrice: 5.95, type: "Drink" }
];

// 2. Active Customer Order Basket (Object with a nested Items Array)
// This tracks the specific items a single user chooses to buy.
const activeFoodOrder = {
    orderId: "ORDER-772A",
    customerAddress: "10 Baker Street, London",
    items: [], // This is the array where selected dishes will live
    deliveryFee: 2.50,
    status: "Pending"
};
// 3. Functions to manage the relationship between Menu and Order Basket
// --- ADD DISH TO BASKET ---
function addDishToOrder(itemId, orderQuantity = 1) {
    // Step A: Search the menu catalog to see if the dish exists
    let menuDish = null; // Introduce a variable to see menu in the dish
    for(let i = 0;i < restaurantMenuCatalog.length;i++){
        if(restaurantMenuCatalog[i].itemId ===itemId){
            menuDish = restaurantMenuCatalog[i] //// Found the match!.....
            break;
        }
    }
        if(!menuDish){
           return "Error: This item is not on the restaurant menu.";        
        }
    
    // Step B: Check if this dish is already inside our active order basket
    for (let i = 0; i <activeFoodOrder.items.length;i++ ){
        if(activeFoodOrder.items[i].itemId ===itemId){
           activeFoodOrder.items[i].quantity +=orderQuantity; // Increase the count
            return `Added ${orderQuantity} more ${menuDish.itemName}(s) to your basket.`;
        }
    }

    // Step C: If it's a completely new choice, pass data from menu to basket
    activeFoodOrder.items.push({
        itemId: itemId,
        itemName: menuDish.itemName,
        unitPrice: menuDish.unitPrice,
        quantity: orderQuantity // Tracks how many portions they want
    });
    
    return `${menuDish.itemName} successfully added to your food basket.`;
}  

// --- REMOVE DISH FROM BASKET ---
function removeDishFromOrder(itemId) {
    for (let i = 0; i < activeFoodOrder.items.length; i++) {
        if (activeFoodOrder.items[i].itemId === itemId) {
            activeFoodOrder.items.splice(i, 1); // Slice out the array element
            return "Item entirely removed from your basket.";
        }
    }
    return "This item was not found in your basket.";
}
// --- CALCULATE BILL TOTAL ---
function calculateTotalBill() {
    let foodSubtotal = 0;
    
    // Loop through basket array and multiply price by portion quantity
    for (let i = 0; i < activeFoodOrder.items.length; i++) {
        foodSubtotal += activeFoodOrder.items[i].unitPrice * activeFoodOrder.items[i].quantity;
    }
    
    // Add the flat delivery cost to the final price
    return foodSubtotal + activeFoodOrder.deliveryFee;
}

// --- Test operations ---
console.log("=== Customer Starts Ordering ===");
console.log(addDishToOrder("M101", 2)); // Ordering 2 Wagyu Burgers
console.log(addDishToOrder("M202", 1)); // Ordering 1 Sweet Potato Fries
console.log(addDishToOrder("M101", 1)); // Deciding to add 1 more Burger (should update quantity to 3)
console.log(addDishToOrder("M303", 1)); // Deciding to add 1 more Burger (should update quantity to 3)


console.log("\nYour Current Meal Basket:", activeFoodOrder.items);
console.log("Total Receipt Bill (including delivery): £" + calculateTotalBill().toFixed(2))




