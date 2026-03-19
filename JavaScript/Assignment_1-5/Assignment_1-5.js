// Assignment 1
console.log("---------------Assignment-1------------------");

let name = "Suresh";
let age = 65;
let purchaseAmount = 5000;

let discount = 0;

if (age < 18) {
    discount += 10;
} else if (age >= 60) {
    discount += 20;
}

if (purchaseAmount > 5000) {
    discount += 5;
}

let finalAmount = purchaseAmount - (purchaseAmount * discount / 100);

console.log(`Hi ${name}! You received a total discount of ${discount}%. Final amount: ₹${finalAmount}`);


// Assignment 2

console.log("---------------Assignment-2------------------");

let correctUsername = "Divy";
let correctPassword = "1234";

let username = "Divy";
let password = "12345";

if (username === correctUsername && password === correctPassword) {
    console.log("Login successful!");
} 
else if (username !== correctUsername && password !== correctPassword) {
    console.log("Both incorrect");
} 
else if (username !== correctUsername) {
    console.log("Incorrect username");
} 
else {
    console.log("Incorrect password");
}


// Assignment 3

console.log("---------------Assignment-3------------------");

let num = -4;

let type = "";
if (num > 0) {
    type = "positive";
} else if (num < 0) {
    type = "negative";
} else {
    type = "zero";
}

let evenOdd = "";
if (num % 2 === 0) {
    evenOdd = "even";
} else {
    evenOdd = "odd";
}

console.log(`The number ${num} is ${type} and ${evenOdd}.`);


// Assignment 4

console.log("---------------Assignment-4------------------");

let isMember = true;
let cartValue = 1200;

if ((isMember && cartValue > 1000) || cartValue > 2000) {
    console.log("You are eligible for free delivery!");
} else {
    console.log("You are NOT eligible for free delivery.");
}


// Assignment 5

console.log("---------------Assignment-5------------------");

let marks = 82;

if (marks < 0 || marks > 100) {
    console.log("Invalid marks entered.");
} 
else if (marks >= 90) {
    console.log("Your grade is A.");
} 
else if (marks >= 75) {
    console.log("Your grade is B.");
} 
else if (marks >= 50) {
    console.log("Your grade is C.");
} 
else {
    console.log("Fail");
}