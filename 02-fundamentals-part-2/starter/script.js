console.log("Part 2: Functions ready!");

// Functions - Declaration and Expressions
function logger () {
    console.log("My name is Thomas");
}

logger();
logger();
logger();

function fruitProcessor (apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

console.log(fruitProcessor(5, 3));

// const juice1 = `Juice with 5 apples and 0 oranges.`;
// const juice2 = `Juice with 2 apples and 4 oranges.`;
// const juice3 = `Juice with 3 apples and 2 oranges.`;

const juice1 = fruitProcessor(5, 0);
const juice2 = fruitProcessor(2, 4);
const juice3 = fruitProcessor(3, 2);

// Function Expression
const calAge = function (birthYear) {
    return 2025 - birthYear;
}

const age1 = calAge(2002);
console.log(age1);

console.log(calAge(2002));

function introduce(firstName, lastName, age) {
    const introduction = `Hi, I'm ${firstName} ${lastName}, and I'm ${age} years old.`;
    return introduction;
}

console.log(introduce("Thomas Guiller", "Cruz", 22));
console.log(introduce("Thomas"));

function yearsUntilRetirement(birthYear, firstName) {
    const age = calAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        return(`${firstName} retires in ${retirement} years.`);
    } else {
        return(`${firstName} has already retired.`);
    }
}

console.log(yearsUntilRetirement(2002, "Thomas"));


/// Function Scope
const globalVar = "I'm a global";

function testScope() {
    const localVar = "I am local";
    console.log(localVar);
    console.log(globalVar);
}

testScope();
console.log(globalVar);
// console.log(localVar);

/// Coding Challenge #1

//Function to calculate average of 3 scores
function calcAverage(score1, score2, score3) {
    const average = (score1 + score2 + score3) / 3;
    return average;
}

//Function to check winner
function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        return(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        return(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        return(`No team wins! Koalas: ${avgKoalas}, Dolphins:  ${avgDolphins}`);
    }
}

//Test Data 1
let avgDolphins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);
console.log(checkWinner(avgDolphins, avgKoalas));

//Test Data 2
avgDolphins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);
console.log(checkWinner(avgDolphins, avgKoalas));

