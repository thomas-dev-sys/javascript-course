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

const grades = [85, 92, 78, 96, 88];
console.log(grades);

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const mixed = ["Jonas", 40, false, friends];
console.log(mixed);

const year = new Array(1992, 1984, 2008, 2020);
console.log(year);

// Accessing Array Elements
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
console.log(friends[4]);

console.log(friends.length);

friends[0] = "Jay";
console.log(friends);

const calcAge = function (birthYear) {
    return 2025 - birthYear;
}

const ages = [calcAge(2002), calcAge(1977), calcAge(1988)];
console.log(ages);

const newLength = friends.push("Adie");
console.log(friends);
console.log(newLength);

friends.unshift('Jaype');
console.log(friends);

// Removing elements
// Remove last item of the list
const popped = friends.pop();
console.log(popped);

const shifted = friends.shift();
console.log(shifted);
console.log(friends);

// Finding an element
console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Mark'));

// Includes
console.log(friends.includes('Peter'));
console.log(friends.includes('John'));

// Array iterations

// Traditional For Loop
for (let i = 0; i < friends.length; i++) {
    console.log(friends[i]);
}

friends.forEach(
    function(friend, index) {
        console.log(`${index + 1}: ${friend}`)
    }
);

friends.forEach(
    (friend, index) => {
        console.log(`${index + 1}: ${friend}`)
    }
)

// Practical Example
const grades2 = [85, 92, 78, 96, 88, 69];
let total = 0;

for (let i = 0; i < grades2.length; i++) {
    total += grades2[i];
}

const average = total / grades2.length;
console.log(`Average grade: ${average.toFixed(2)}`);

let passedCount = 0;
grades2.forEach(grade => {
    if (grade >= 70) passedCount++;
});

console.log(`${passedCount} out of ${grades2.length} students passed`);

// Coding Challenge #2

const grades3 = [78, 85, 92, 67, 88, 95, 73, 82];

// Function to Calculate Average
function calculateAverage(grades3) {
    let total = 0;
    grades3.forEach(grade => total += grade);
    return total / grades3.length;
}

// Function to find highest grade
function findHighestGrade(grades3) {
    let highest = grades3[0];
    grades3.forEach(grade => {
        if (grade > highest) highest = grade;
    });
    return highest;
}

// Function to find lowest grade
function findLowestGrade(grades3) {
    let lowest = grades3[0];
    grades3.forEach(grade => {
        if (grade < lowest) lowest = grade;
    });
    return lowest;
}

// Function to count passing students
function countPassing(grades3, passingGrade = 70) {
    let count = 0;
    grades3.forEach(grade => {
        if (grade >= passingGrade) count++;
    });
    return count;
}

// Generate complete report
const average2 = calculateAverage(grades3);
const highest = findHighestGrade(grades3);
const lowest = findLowestGrade(grades3);
const passing = countPassing(grades3, 70);

console.log("=== GRADE REPORT ===");
console.log(`Average: ${average2.toFixed(2)}`);
console.log(`Highest: ${highest}`);
console.log(`Lowest: ${lowest}`);
console.log(`Passing students: ${passing} out of ${grades3.length}`);

const thomasArray = [
    "Thomas",
    "Cruz",
    2025 - 2002,
    "Student",
    ["Michael", "Peter", "Steven"]
];

console.log(thomasArray[0]);
console.log(thomasArray[1]);

const thomasObject = {
    firstName: "Thomas",
    lastName: "Cruz",
    age: 2025 - 2002,
    job: "Student",
    friends: ["Michael", "Peter", "Steven"]
};

console.log(thomasObject);

// Property access method
// Dot notation
console.log(thomasObject.firstName);
console.log(thomasObject.lastName);
console.log(thomasObject.age);

// Bracket notation
console.log(thomasObject['firstName']);
console.log(thomasObject['lastName']);
console.log(thomasObject['age']);

const nameKey = 'Name';
console.log(thomasObject['first' + nameKey]);

// Modifying existing properties
thomasObject.job = 'Programmer';
thomasObject['age'] = 30;
console.log(thomasObject);

// Add new propeties
thomasObject.location = 'Philippines';
thomasObject['Instagram'] = '@jpeg.thom';
thomasObject['hasDriversLicense'] = false;
console.log(thomasObject);

// Objects vs Arrays Decision Making

// Arrays
const listOfYears = [1991, 1984, 2008, 2020];
const shoppingList = ['apples', 'bananas', 'milk', 'bread'];
const testScores = [85, 92, 78, 96];

// Objects
const person = {
    name: 'Thomas',
    age: 22,
    occupation: 'Student',
};

const car = {
    brand: 'Honda',
    model: 'Civic',
    year: 2020,
    color: 'Black',
};

// Objects can contain arrays and arrays can contain objects
const student = {
    name: 'Sarah',
    grades: [85, 92, 78],
    address: {
        street: '123 Main St',
        city: 'New York',
        country: 'USA'
    },
};

console.log(student.grades[0]);
console.log(student.address.city);

// Object Methods
const john = {
    firstName: 'John',
    lastName: 'Doe',
    birthYear: 1995,
    job: 'lawyer',
    hasDriversLicense: true,
    calcAge: function(birthYear) {
        return 2025 - birthYear;
    },
};

console.log(john.calcAge(2002));

// 'this' keyword
const johnImproved = {
    firstName: 'John',
    lastName: 'Doe',
    birthYear: 1995,
    job: 'lawyer',
    hasDriversLicense: false,
    
    calcAge: function() {
        this.age = 2025 - this.birthYear;
        return this.age;
    },
    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
    },
};

console.log(johnImproved.calcAge());
console.log(johnImproved.age);
console.log(johnImproved.getSummary());

// Complex object with multuple methods
const bankAccount = {
    owner: 'John Doe',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2,
    pin: 1111,

    // Method to calculate balance
    calcBalance: function() {
        this.balance = this.movements.reduce((acc, mov) => acc + mov, 0);
        return this.balance;
    },

    // Method to add a movement
    deposit: function(amount) {
        this.movements.push(amount);
        this.calcBalance();
    },

    withdraw: function(amount) {
        this.movements.push(-amount);
        this.calcBalance();
    },

    // Method for account summary
    getStatement: function() {
        return `${this.owner}'s account balance: ${this.calcBalance()}`;
    },
};

console.log(bankAccount.getStatement());
bankAccount.deposit(500);
console.log(bankAccount.getStatement());

// Coding Challenge #3 - User Profile System

const user = {
  firstName: "Sarah",
  lastName: "Johnson",
  birthYear: 1995,
  location: "New York",
  interests: ["photography", "travel", "coding"],
  friends: [
    { name: "Michael", status: "active" },
    { name: "Emma", status: "inactive" },
    { name: "David", status: "active" },
  ],
  isActive: true,

  // Calculate age method
  calcAge: function () {
    this.age = 2025 - this.birthYear;
    return this.age;
  },

  // Add friend method
  addFriend: function (name, status = "active") {
    this.friends.push({ name, status });
    return this.friends.length;
  },

  // Get active friends count
  getActiveFriends: function () {
    const activeFriends = this.friends.filter(friend => friend.status === "active");
    return activeFriends.length;
  },

  // Toggle active status
  toggleStatus: function () {
    this.isActive = !this.isActive;
    return this.isActive;
  },

  // Generate profile summary
  getSummary: function () {
    // Create a social media style profile summary
    // Include: name, age, location, status, friend counts, interests
    // Use template literals for nice formatting
    // Your code here
    const age = this.calcAge();
    const activeFriends = this.getActiveFriends();
    const status = this.isActive ? "Active" : "Inactive";

    return `${this.firstName} ${this.lastName} $({age}) from ${this.location} 
    Currently ${status}.
    ${activeFriends} active friends out of ${this.friends.length} total friends.
    Interests: ${this.interests.join(", ")}
    Connected and sharing life's adventures`
  },
};

// Test your user profile system
console.log(user.getSummary());
user.addFriend("Alex", "active");
user.toggleStatus();
console.log(`\nAfter updates:`);
console.log(user.getSummary());






