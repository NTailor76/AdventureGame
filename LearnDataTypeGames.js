//Explicit Conversion  - Number() paseInt()  oaseseFlont()

//Numbers
console.log("******************************Explicit Conversion  - Number() paseInt()  parseFloat()***************************")
console.log("-------------------Numbers------------------------------ ")
let number1 = Number("42");       // 42
let number2 = Number("42px");     // NaN (because of 'px')
let number3 =Number("  42  ");   // 42 (ignores whitespace)
let number4 =Number(true);       // 1
let number5 =Number("");         // 0

console.log(number1)
console.log(number2)
console.log(number3)
console.log(number4)
console.log(number5)

//parseInt() - Specifically converts a string to an integer (whole number). It parses from left to right and stops as soon as it hits a non-numeric character
//Note: Always use a radix (base) with parseInt() to avoid legacy behavior
console.log("-------------------Parseint------------------------------ ")
let par1 = parseInt("42px", 10); // 42 (stops at 'p') 
let par2 = parseInt("42.99", 10); // 42 (drops the decimals) 
let par3 = parseInt("abc42", 10); // NaN (starts with letters) 
let par4 = parseInt(" 42 ", 10); // 42 (ignores leading whitespace)

console.log(par1)
console.log(par2)
console.log(par3)
console.log(par4)

//parseFloat() - Converts a string to a floating-point number (includes decimals). Like parseInt, it stops parsing when it hits an invalid character
console.log("-------------------parseFloat------------------------------ ")

let fl1 = parseFloat("42.99px"); // 42.99 
let fl2 = parseFloat("42.5.6"); // 42.5 (stops at the second '.') 
let fl3 = parseFloat("abc42.99"); // NaN

console.log(fl1)
console.log(fl2)
console.log(fl3)

//Inplicit Coercion  - Mixed-Typ[e Operations

console.log("********************************Inplicit Coercion  - Mixed-Typ[e Operations********************************************")

//The Plus Operator (+)
//The + operator triggers string concatenation if either side is a string.
//Operators like -, *, /, and % will attempt to convert strings into numbers.

console.log("---------------------Plus Operator---------------------")

let plus1 = "5" + 2; // "52" (Number 2 is coerced to string "2") 
let plus2 = 2 + 2 + "5"; // "45" (Evaluates left-to-right: 2+2=4, then 4+"5"="45") 
let plus3 = "5" + true; // "5true" (Boolean true is coerced to string "true")
let plus4 = true + 6;
let minus1 = 5-"3";
let multiple1 = "4" * "5";
let divide1 = 20 / "5";
let modules1 = 45 % "4";

console.log(plus1)
console.log(plus2)
console.log(plus3)
console.log(plus4)
console.log(minus1)
console.log(multiple1)
console.log(divide1)
console.log(modules1)


//Numeric Operators (-, *, /, %)
//Mathematical operators (except +) always trigger numeric coercion

console.log(".......................Numeric Operations.....................")
let num1 = "5" - 2; // 3 (String "5" becomes number 5) 
let num2 = "5" * "2"; // 10 (Both strings become numbers) 
let num3 = "5" - "abc";// NaN (String "abc" cannot become a number) 
let num4 = 4 * true; // 4 (Boolean true becomes number 1)

console.log(num1)
console.log(num2)
console.log(num3)
console.log(num4)

//Loose Equality (==)
//The == operator compares values by coercing them to a common type first.

console.log("..............Loose Equality......................................")
let loose1 = "5" == 5; // true (String "5" is coerced to number 5) 
let loose2 = 0 == false; // true (Boolean false is coerced to number 0) 
let loose3 ="5" === 5; // false (Strict comparison: different types)

console.log(loose1)
console.log(loose2)
console.log(loose3)