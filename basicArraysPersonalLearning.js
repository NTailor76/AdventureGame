// Task Personal Learning - Arrays and Loops.
console.log(" ======= Personal Learning for Loops and Arrays mixed ==========================")
let purchaseCost = [100,1200,14000,6000,350,250];
let residualValue = 20;
let totalPurchaseCost = 0;
let itemCostBasis = 0;
let totalCostBasis = 0;
// Loop to list all the items in the array first with a for loop
for(i=0;i < purchaseCost.length;i++){
    itemCostBasis = purchaseCost[i]-residualValue;
    console.log("Purchase cost of Item " + (i+1) + ":£" + purchaseCost[i] +"  Cost Basis: £" + itemCostBasis); // Worked out the lengh and them this is part of the loop.
    totalPurchaseCost +=purchaseCost[i];
    totalCostBasis += itemCostBasis;
}
console.log("Total purchase cost: £" + totalPurchaseCost);
console.log("Total cost Basis: £" + totalCostBasis);

// Task 2 - Try again the loops and array with another example./...
console.log(" ======= Personal Learning for Loops and Arrays mixed - Take 2 ==========================")
let depreciationCal = [100,200,300,400,500];
let higherValue = 0;
let totalDepreciationCal = 0;
let totalHigherValue = 0;

for (let i=0; i < depreciationCal.length;i++){
    const currentValue = depreciationCal[i]
    totalDepreciationCal +=depreciationCal[i];
     // Check if the current item's value is less than 450

         // Print the general item info first to avoid repeating yourself
          let message = `Depreciation for item ${i + 1}: Valued at £${currentValue}`;
    if(currentValue < 450){
        console.log(`${message} --> This item is under £450`);
        higherValue++
        totalHigherValue +=currentValue;
    } else{
       console.log(`${message} --> This item is Over £450`);
    }
}
console.log("============================================\nTotal Depreciation figures of All Items: £ "+totalDepreciationCal);
console.log("============================================\nTotal of Higher Item Item: £" + totalHigherValue);

console.log( "======================== Practice the array with COMPLEX Include and Splice ============================== ")
let myList2 = ["table","chairs","lamp","tables","cups"];

console.log(myList2.includes("table")); // Should return true
console.log(myList2.includes("tables")); // Should return false

let splicerAdd = myList2.splice(1,2);
let splicerRemove = myList2.splice(1,1,'sofa');
 
// Time for the splicer - This method changes the contents of an array by removing, replacing, or adding new elements
// Syntax for this is ----- array.splice(start_index,delete_count,item1,item2)
console.log("Splicer in Action remove ------->", splicerAdd); //chairs,lamp  ----> removing Element at index 1
console.log("Splicer in Action Add ------->" , myList2); 


let myPencilCaseItems =  ["pens","pencil","compass"];

let leftInMyPencilCase= myPencilCaseItems.splice(1,1);
console.log(leftInMyPencilCase);



