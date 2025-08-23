// // JavaScript Fundamentals - Part 1
// // We'll write our code here!

// let js = "amazing";
// console.log(40 + 8 + 23 - 10);
// console.log(js);

// console.log("=== VARIABLES ===");

// let firstName = "Jonas";
// console.log(firstName);

// let age = 30;
// console.log(age);
// age = 50;
// console.log(age);

// const birthYear = 1991;
// console.log(birthYear);

// const PI = 3.1415;
// console.log(PI);

// var job = "programmer";
// job = "teacher";
// console.log(job);

// const country = "Philippines";
// const language = "Filipino";

// age = 22;
// age = 23; //this will change

// console.log("=== DATA TYPES ===");

// //Number
// let id = 12345;
// console.log(id);
// console.log(typeof id);

// //String
// let lastName = "Doe";
// console.log(lastName);
// console.log(typeof lastName);

// //Boolean
// let javasScriptIsFun = "true";
// console.log(javasScriptIsFun);
// console.log(typeof javasScriptIsFun);

// //undefined
// let year;
// console.log(year);
// console.log(typeof year);

// let dynamicVariable = 40;
// console.log(dynamicVariable, typeof dynamicVariable);

// //change to a string
// dynamicVariable = "I am now a string";
// console.log(dynamicVariable, typeof dynamicVariable);

// //change to a boolean
// dynamicVariable = "true";
// console.log(dynamicVariable, typeof dynamicVariable);

// Basic Operators - Math
// console.log("=== MATH OPERATORS ===");

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// console.log("Math Operations");
// console.log("Addition: ", 10 + 5);
// console.log("Subtraction: ", 20 - 8);
// console.log("Multiplication: ", 4 * 7);
// console.log("Division: ", 15 / 3);
// console.log("Exponentiation: ", 2 ** 3);

// //Math with String!
// const firstName = "Jonas";
// const lastName = "Doe";
// console.log(firstName + " " + lastName);

// console.log("Hello " + "World" + "!");
// console.log("I am " + 22 + " years old"); 

// console.log("=== ASSINMENT OPERATORS ===");
// let x = 10 + 5;
// console.log("x starts as: ", x);

// x += 10;
// console.log("x starts as: ", x);

// x *= 4;
// console.log("x starts as: ", x);

// x /= 2;
// console.log("x starts as: ", x);

// x++;
// console.log("x starts as: ", x);

// x--;
// console.log("x starts as: ", x);

// //Comparison Operators
// console.log("=== COMPARISON OPERATORS ===");

// console.log("Age Comparison: ");
// console.log(ageJonas > ageSarah);
// console.log(ageSarah >= 18);
// console.log(ageJonas < 30);

// console.log("Number comparison");
// console.log(25 > 20);
// console.log(15 < 10);
// console.log(18 >= 18);
// console.log(16 <= 15);

// const isFullAge = ageSarah >= 18;
// console.log("Sarah is an adult: ", isFullAge);

// console.log("Complex Comparison");
// console.log(now - 1991 > now - 2018); //ageJonas > ageSarah

// let z, y;
// z = y = 25 - 10 -5;
// console.log(z, y);

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);

// ////////////////////////////////////
// // Coding Challenge #1 - BMI Calculator

// // Test Data 1
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// // Your code here:

// // 1. Calculate BMIs
// const markBMI = massMark / heightMark ** 2;
// const johnBMI = massJohn / heightJohn ** 2;
// // 2. Create markHigherBMI variable
// const markHigherBMI = (markBMI > johnBMI);
// // 3. Log results to console
// console.log("Mark BMI: ", markBMI);
// console.log("John BMI: ", johnBMI);
// console.log("markHigherBMI: ", markHigherBMI);

// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;

// const jonas = "I am " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
// console.log(jonas);

// const jonasNew = `I am ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(jonasNew);

// console.log(`I am ${2037 - 1991} years old`);
// console.log(`Math works here: ${2 + 3} equals five`);

// //if else statement
// const age = 11;

// if (age >= 18) {
//     console.log(`Sarah can start a driving license`);
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }

// console.log(Boolean(0)); //falsy value
// console.log(Boolean(undefined)); //falsy value
// console.log(Boolean("Jonas")); //truthy value
// console.log(Boolean({})); //truthy value
// console.log(Boolean("")); //falsy value

// ////////////////////////////////////
// // Coding Challenge #2

// // Reuse your BMI calculation from Challenge #1
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// // Your if/else statement here:
// // Compare BMIs and create intelligent messages
// if (BMIMark >= BMIJohn) {
//     console.log(`Mark's BMI is higher than John's!`);
// } else {
//     console.log(`John's BMI is higher than Mark's!`);
// }
// // Use template literals for beautiful output
// console.log(`Mark's BMI (${BMIMark}) is higher than John's BMI (${BMIJohn})`);

// type Coversion and Coercion
console.log("=== TYPE CONVERSION AND COERCION ===");
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18); 

console.log(Number("Jonas")); //NaN - Not a Number
console.log(typeof NaN); //number

console.log(String(23), 23);
console.log(typeof String(23));

// type coercion (automatic)
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" / "2");
console.log("23" * "2");

let n = "1" + 1;
n = n - 1;
console.log(n);

console.log(2 + 3 + 4 + "5");
console.log("10" - "4" - "3" - 2 + "5");

//predict the output
console.log("5"+ 2); //52
console.log("5" - 2); //3
console.log("5" * 2); //10
console.log("5" / 2); //2.5

const userAge = "25";
console.log(Number(userAge));
const userScore = 95;
console.log(String(userScore));

// This calculator has a bug - fix it!
const num1 = "7"; // Returns string!
const num2 = "10"; // Returns string!
const sum = num1 + num2; // Bug: adds as strings!
console.log(`Sum: ${sum}`);

// Fix: Convert to numbers first
const sumFixed = Number(num1) + Number(num2);
console.log(`Sum: ${sumFixed}`);

// Equality Operators: == vs. ===
const age = 18;
if (age === 18) console.log("You just became an adult! (strict)");
if (age == 18) console.log("You just became an adult! (loose)");

console.log("18" === 18);
console.log("18" == 18);
console.log(18 === 18);

// Why == can be dangerous
console.log("0" == 0);
console.log(0 == false);
console.log("0" == false);
console.log(null == undefined);

// Weird cases that cause bugs
console.log("" == 0);
console.log("   " == 0);

// Convert explicitly, then compare strictly
const favourite = Number("7");
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log("Cool! 23 is an amazing number!");
} else if (favourite === 7) {
  console.log("7 is also a cool number");
} else if (favourite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("Number is not 23 or 7 or 9");
}

// Not-equal operator
if (favourite !== 23) console.log("Why not 23?");

// Test these comparisons - predict first, then run:
console.log(5 === "5"); // Your guess: false
console.log(5 == "5"); // Your guess: true
console.log(true === 1); // Your guess: false
console.log(true == 1); // Your guess: true
console.log(false === 0); // Your guess: false
console.log(false == 0); // Your guess: true

// This login system has bugs - fix them!
const username = "admin";
const password = "1234";

// Bugs: using == instead of ===
if (username == "admin" && password == "1234") {
  console.log("Welcome admin!");
} else {
  console.log("Access denied");
}

// Fix using strict equality
// Your code here...
if (username === "admin" && password === "1234") {
  console.log("Welcome admin!");
} else {
  console.log("Access denied");
}

// Logical Operators
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense); 

const isTired = false;
console.log(hasDriversLicense && hasGoodVision && !isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}

// More complex scenario
const age1 = 20;
const hasPermission = true;
const hasExperience = false;

if ((age1 >= 18 || hasPermission) && hasExperience) {
  console.log("Approved to drive");
} else {
  console.log("Not approved to drive");
}

// Exercise 1: Club Entry System
// Create a club entry system with these rules:
// Entry allowed if: (age >= 21 AND hasID) OR isVIP
const age2 = 19;
const hasID = true;
const isVIP = false;

// Your logic here:
if ((age2 >= 21 && hasID) || isVIP) {
  console.log('Welcome to the club!');
} else {
  console.log('Sorry, you cannot enter');
}

// Exercise 2: Weather Advisory
// Create a weather advisor:
const temperature = 23; // Celsius
const isRaining = false;
const isWindy = false;

// Advice rules:
// Perfect day: temp 20-30 AND not raining AND not windy
// Good day: temp 15-35 AND not raining
// Stay inside: anything else

// Your code here...
if (temperature >= 20 && temperature <= 30 && !isRaining && !isWindy) {
  console.log("Perfect day!");
} else if (temperature >= 15 && temperature <= 35 && !isRaining) {
  console.log("Good day!");
} else {
  console.log("Stay inside.");
}

// The Conditional (Ternary) Operator
const age3 = 12;

const drink = age3 >= 18 ? "wine 🍷" : "water 💧";
console.log(drink);

let drink2;
if (age3 >= 18) {
  drink2 = "wine 🍷";
} else {
  drink2 = "water 💧";
}
console.log(drink2);

// Perfect for template literals
console.log(`I like to drink ${age3 >= 18 ? "wine 🍷" : "water 💧"}`);

// Exercise 1: Status Messages
// 1. Login status
// const isLoggedIn = true;
// let welcomeMessage;
// if (isLoggedIn) {
//   welcomeMessage = "Welcome back!";
// } else {
//   welcomeMessage = "Please sign in";
// }

// Ternary version:
const isLoggedIn = true;
let welcomeMessage = isLoggedIn ? "Welcome back!" : "Please sign in";
console.log(welcomeMessage);

// 2. Price with discount
// const isPremium = false;
// let price;
// if (isPremium) {
//   price = 100 * 0.8; // 20% discount
// } else {
//   price = 100;
// }

// Ternary version:
const isPremium = false;
let price = isPremium ? 100 * 0.8 : 100;
console.log(price);

// Exercise 2: Smart Reponses
// Create smart responses using ternary in template literals:
const score = 85;
const weather = "sunny";
const battery = 15; // percentage

// Create messages like:
// "Your score: 85 (Passed/Failed)"
// "Weather is sunny (Great for outdoor activities/Stay inside)"
// "Battery: 15% (Low battery warning/Battery OK)"

// Your code here...
const scoreMessage = `Your score: ${score} (${score >= 60 ? "Passed" : "Failed"})`;
const weatherMessage = `Weather is ${weather} (${weather === "sunny" ? "Great for outdoor activities" : "Stay inside"})`;
const batteryMessage = `Battery: ${battery}% (${battery < 20 ? "Low battery warning" : "Battery OK"})`;

console.log(scoreMessage);
console.log(weatherMessage);
console.log(batteryMessage);

// Coding Challenge #4

const bill = 430; // Test with 275, 40, and 430

// Step 1: Create the tip calculation using ternary operator
const tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;

// Step 2: Create beautiful output with template literal
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);





