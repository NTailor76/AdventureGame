//Array and object basics

//simply array
let simplyArray = ["apples","banana","orange"];
console.log("Simple array: ",simplyArray);

//simply object
let simpleObject = {
    name: "product",
    price: 19.99,
    inStock: true
};
console.log("Simple object:",simpleObject);

// ==========The power comes when we combine them together==============...

//array of primitive values - Limited information
let productNames = ["t-shirt","Jeans","Sneakers"];
console.log("Product names array:",productNames);

// array of objects - rich with information.
let product = [
    { name: "T-shirt", price: 19.99, inStock: true},
    { name: "Jeans", price: 49.95, inStock: true},
    { name: "Sneakers", price: 79.99, inStock: false}
];
console.log("Product array of Objects: ",product);

// Accessing data in intuitive...
console.log("First product name: ",product[0].name);
console.log("Second Product Price: ",product[1].price);
console.log("Is third product in stock?: ",product[2].inStock);
