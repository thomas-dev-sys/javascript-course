// Remember, we're gonna use strict mode in all scripts now!
'use strict';

console.log('=== DEVELOPMENT ENVIROMENT SETUP ===');

// Messy code
const messyExample = function (name, age) {
  if (age >= 18) {
    return 'Hello ' + name + ', you are an adult';
  } else {
    return 'Hello ' + name + ', you are a minor';
  }
};

console.log('Current messy code example:', messyExample('Thomas', 22));
console.log('Goal: Automatic formatting, auto-refresh, and typing shortcuts');

// Extension Installation Test

function testExtensions() {
  const extensionTests = [
    { name: 'Prettier', status: 'installed', purpose: 'code formatting' },
    { name: 'Live Server', status: 'installed', purpose: 'auto refresh' },
    {
      name: 'Auto Rename Tag',
      status: 'installed',
      purpose: 'HTML efficiency',
    },
  ];

  return extensionTests;
}

const extensionStatus = testExtensions();
console.log('Extension installation status:', extensionStatus);

// Prettier Configuration Test
// This code has terrible formatting
const prettierTest = {
  firstName: 'Sarah',
  lastName: 'Johnson',
  skills: ['JavaScript', 'React', 'Node.js'],
  isActive: true,
};

const messyFunction = function (x, y, z) {
  if (x > 0 && y > 0) {
    return x + y + z;
  } else {
    return 0;
  }
};

const messyArrow = items => {
  return items.map(item => {
    return item.toUpperCase();
  });
};

console.log(
  'Before Prettier formatting - this code works but looks unprofessional'
);

// Create this with terrible formatting:
const studentTest = {
  firstName: 'Thomas',
  skills: ['HTML', 'CSS', 'JavaScript'],
  experience: 'beginner',
  goals: ['become-developer', 'build-projects'],
};

const testFunc = function (data) {
  for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
  }
};

// Live Server Testing

// Test 1: Basic live reload
let liveServerTest = 'Initial message - change #1';
console.log('Updated message  change #2', liveServerTest);

// Test 2: Time-based updates
const timeStamp = new Date().toLocaleTimeString();
const updateCount = 1;

console.log(`Live Server update #${updateCount} at ${timeStamp}`);

// Test 3: Function testing
function demonstrateLiveReload() {
  const randomColor = ['red', 'blue', 'green', 'purple', 'orange'][
    Math.floor(Math.random() * 5)
  ];
  const message = `Live Server rocks! Random color: ${randomColor}`;

  console.log(message);
  return message;
}

demonstrateLiveReload();

function showCurrentTime() {
  const now = new Date().toLocaleTimeString();
  console.log("Current time:", now);
  return now;
}

showCurrentTime();

// Code Snippets Testing

// Type 'cl' then press Tab - it should expand to console.log();
console.log("Testing snippet functionality - cl + Tab created this!");

// Type 'func' then press Tab - it should create a function template
function testSnippets() {
  console.log("Function created with snippet - func + Tab!");
  return "Snippets working perfectly!";
}

testSnippets();

// Type 'arrow' then press Tab - it should create an arrow function template
const snippetTest = (message) => {
  console.log(`Arrow function from snippet: ${message}`);
  return message;
};

snippetTest("Snippets save so much typing time!");

// Environment Setup Verification

console.log("🎉 Professional Development Environment Complete!");
console.log("✅ Prettier: Automatic code formatting");
console.log("✅ Live Server: Automatic browser refresh");
console.log("✅ Snippets: Fast code generation");
console.log("✅ Extensions: Enhanced productivity");
console.log("Ready for professional JavaScript development!");

// Calculate time savings
function calculateTimeSavings() {
  const dailyConsoleLogs = 50;
  const keystrokesSavedPerLog = 11; // 'console.log()' vs 'cl' + Tab
  const dailySavings = dailyConsoleLogs * keystrokesSavedPerLog;
  const monthlySavings = dailySavings * 22; // work days

  console.log(`Daily keystrokes saved: ${dailySavings}`);
  console.log(`Monthly keystrokes saved: ${monthlySavings}`);

  return { daily: dailySavings, monthly: monthlySavings };
}

calculateTimeSavings();

// Developer Skills Hour 2 - Learning How to Code & Problem-Solving Framework

console.log("=== HOUR 2: DEVELOPER MINDSET & PROBLEM SOLVING ===");

/*
The Reality of Learning to Code:
- Most people expect: Learn syntax → Become developer
- Actual process: Learn basics → Feel confident → Try real project → 
  Get stuck everywhere → Question everything → Keep pushing → 
  Gradual improvement → Success
- Key insight: Problem-solving matters more than syntax memorization
*/

console.log(
  "Key insight: Professional developers think systematically, not just code"
);

/*
Beginner vs Professional Problem-Solving Approaches:

BEGINNER APPROACH:
1. Jump straight into coding
2. Get stuck immediately  
3. Google random solutions
4. Copy-paste without understanding
5. Get frustrated when nothing works

PROFESSIONAL APPROACH:
1. Understand the problem completely
2. Break into smaller sub-problems
3. Research specific solutions  
4. Implement step by step
5. Test and debug systematically

Today we learn the professional approach!
*/

console.log("Goal: Transform from beginner to professional problem-solver");

// The 4-Step Problem-Solving Framework

/*
STEP 1: UNDERSTAND THE PROBLEM
- Ask the right questions until 100% clear
- Key questions:
  * What exactly needs to be accomplished?
  * What are the inputs and expected outputs?
  * What are the edge cases and constraints?
  * Are there any special requirements?
*/

/*
STEP 2: DIVIDE AND CONQUER  
- Break big problem into small sub-problems
- Strategy:
  * Identify the main components
  * Find dependencies between components
  * Order sub-problems logically
  * Ensure each piece is solvable independently
*/

/*
STEP 3: RESEARCH SOLUTIONS
- Find answers for sub-problems you cannot solve
- Best sources: MDN Documentation, Stack Overflow, Google
- Research tips: Be specific, understand before implementing
*/

/*
STEP 4: IMPLEMENT AND TEST
- Code the solution step by step with testing
- Start simple, test each piece, combine gradually
*/

console.log("4-Step Framework: Understand → Divide → Research → Implement");

// PRACTICAL PROBLEM-SOLVING: Smart Home Thermometer

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  console.log(max, min);
  return max - min;
};

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// EXTENDED PROBLEM: Two Arrays

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  console.log(max, min);
  return max - min;
};

const array1 = [3, 5, 1];
const array2 = [9, 0, 5];
const amplitudeNew = calcTempAmplitudeNew(array1, array2);
console.log(amplitudeNew);

console.log(
  "Problem-solving framework applied successfully to extended challenge!"
);

// PROBLEM-SOLVING FRAMEWORK MASTERY

/*
FRAMEWORK SUCCESS ANALYSIS:
- ✅ Solved complex problems systematically
- ✅ Broke problems into manageable pieces
- ✅ Applied research when needed
- ✅ Implemented and tested successfully
- ✅ Adapted to changing requirements efficiently
*/

console.log("🎯 Framework mastered - ready for independent problem solving!");

// Developer Skills Hour 3 - Research Skills & Debugging Fundamentals

console.log("=== HOUR 3: RESEARCH & DEBUGGING MASTERY ===");

/*
Random Googling vs Strategic Research:

RANDOM GOOGLING (Beginner Approach):
- Search only when completely stuck
- Use vague search terms like "javascript array problem"
- Copy-paste first solution found
- Don't understand what the code does
- Same problems happen repeatedly

STRATEGIC RESEARCH (Professional Approach):
- Research proactively to understand concepts
- Use specific, targeted search terms
- Evaluate multiple solutions
- Understand solutions before implementing
- Build knowledge for future problems
*/

console.log(
  "Goal: Master research and debugging like a professional developer"
);
console.log(
  "Strategic research builds lasting knowledge, not just quick fixes"
);

// PROFESSIONAL GOOGLE RESEARCH TECHNIQUES

/*
RESEARCH CHALLENGE: Find Maximum Value in Array
Search progression:
1. "javascript maximum value array"
2. "javascript Math.max array"  
3. "javascript Math.max spread operator array"
4. "Math.max MDN javascript"
*/

function demonstrateArrayMax(numbers) {

  const method1 = Math.max(...numbers);

  let method2 = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > method2) method2 = numbers[i];
  }

  const method3 = numbers.reduce((max, current) =>
    current > max ? current : max
  );

  return { method1, method2, method3 };
}

const testNumbers = [3, 7, 2, 9, 1, 5];
const maxResults = demonstrateArrayMax(testNumbers);
console.log("Multiple approaches from research:", maxResults);

// STACK OVERFLOW RESEARCH RESULTS

function reverseStringMethods(str) {

  const method1 = str.split("").reverse().join("");

  let method2 = "";
  for (let i = str.length - 1; i >= 0; i--) {
    method2 += str[i];
  }

  const method3 = [...str].reverse().join("");

  return { method1, method2, method3 };
}

const reverseResults = reverseStringMethods("hello");
console.log("Stack Overflow research results:", reverseResults);

// MDN DOCUMENTATION MASTERY

function demonstrateConcat() {
  const array1 = [1, 2, 3];
  const array2 = [4, 5, 6];
  const array3 = [7, 8, 9];

  const simple = array1.concat(array2);
  const multiple = array1.concat(array2, array3);

  console.log("Original array1 unchanged:", array1);

  return { simple, multiple };
}

const concatResults = demonstrateConcat();
console.log("MDN documentation applied:", concatResults);

// SYSTEMATIC DEBUGGING METHODOLOGY

/*
5-STEP DEBUGGING PROCESS:
1. IDENTIFY - Recognize bug exists
2. ISOLATE - Locate where bug happens
3. INVESTIGATE - Understand why bug occurs
4. FIX - Implement correction
5. PREVENT - Add safeguards against similar bugs
*/

function calculateAverageScore(scores) {
  let total;

  for (let i = 0; i <= scores.length; i++) {
    total += scores[i];
  }

  return total / (scores.length + 1);
}

const testScores = [85, 92, 78, 96, 88];
const buggyResult = calculateAverageScore(testScores);
console.log("Buggy result:", buggyResult);

// BROWSER DEVELOPER TOOLS MASTERY

function demonstrateConsoleDebugging(data) {
  console.group("Debugging Session");

  console.log("Input data:", data);

  if (typeof data !== "object") {
    console.warn("Warning: Expected object, got", typeof data);
  }

  console.table(data);
  console.groupEnd();

  return Array.isArray(data) ? data.length : Object.keys(data).length;
}

const arrayData = [1, 2, 3, 4, 5];
const objectData = { name: "John", age: 30, city: "New York" };

demonstrateConsoleDebugging(arrayData);
demonstrateConsoleDebugging(objectData);

// DEBUGGER STATEMENT AND BREAKPOINTS

function stepThroughDebugging(numbers) {
  // debugger;

  let sum = 0;
  let count = 0;

  for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i];

    console.log(`Processing index ${i}: value = ${currentNumber}`);

    if (typeof currentNumber === "number") {
      sum += currentNumber;
      count++;
    } else {
      console.error(`Invalid number at index ${i}:`, currentNumber);
    }
  }

  const average = count > 0 ? sum / count : 0;
  console.log("Final results:", { sum, count, average });

  return average;
}

const mixedNumbers = [10, 20, "error", 30, null, 40];
const debugResult = stepThroughDebugging(mixedNumbers);
console.log("Debug session result:", debugResult);

// SYSTEMATIC BUG FIXING APPLICATION

function calculateAverageScoreFixed(scores) {
  if (!Array.isArray(scores) || scores.length === 0) {
    console.error("Invalid input: scores must be a non-empty array");
    return 0;
  }

  let total = 0;

  for (let i = 0; i < scores.length; i++) {

    if (typeof scores[i] === "number") {
      total += scores[i];
    } else {
      console.warn(`Skipping non-number value at index ${i}:`, scores[i]);
    }
  }

  return total / scores.length;
}

const fixedResult = calculateAverageScoreFixed(testScores);
console.log("Fixed result:", fixedResult);

// Comprehensive debugging verification
console.group("Debugging Verification Tests");

// Test 1 - Normal case
const normalScores = [85, 92, 78, 96, 88];
const normalResult = calculateAverageScoreFixed(normalScores);
console.log("Normal case result:", normalResult);

// Test 2 - Edge case with invalid data
const mixedScores = [85, "invalid", 92, null, 78];
const mixedResult = calculateAverageScoreFixed(mixedScores);
console.log("Mixed data result:", mixedResult);

// Test 3 - Error case with invalid input
const errorResult = calculateAverageScoreFixed("not an array");
console.log("Error case result:", errorResult);

// Test 4 - Edge case with empty array
const emptyResult = calculateAverageScoreFixed([]);
console.log("Empty array result:", emptyResult);

console.groupEnd();

console.log("Systematic debugging process successfully applied!");
console.log(
  "All bugs identified, isolated, investigated, fixed, and prevented"
);


