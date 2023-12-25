// Here i am attempting to solve some Javascript problems as excercise

// EXAMPLE ONE - closure

//Closures allow a function to access variables from its outer (enclosing) scope even after that scope has finished executing.

function outerfunction() {
  const test = "This string is from outer function";

  function innerFunction() {
    console.log(test);
  }

  return innerFunction;
}

let closure = outerfunction();

closure();

// EXAMPLE TWO - predict output

let counter = 0;
for (var i = 1; i <= 10; i++) {
  counter += i;
}
console.log(counter);
console.log(i);

// find the problem with below code

const object1 = {
  a: 10,
  b: 20,
  c: function () {
    console.log(this.a + this.b);
  },
};
const func = object1.c;
func();

// object1.c() will work, if assiged to another varable func, this value of this will change
// const func = object1.c.bind(object1); func(); will work perfectly

// Create a JavaScript function that calculates the tip for a given bill amount and tip percentage. Bill amount and tip percentage will be input parameters while output will be calculated tip value.

function calculateTip(billAmount, tipPercentage) {
  //validation checks
  // if passed value is not a number

  if (typeof billAmount !== "number" || typeof tipPercentage !== "number") {
    return "input is not a number";
  }

  //if passed value less than zero

  if (billAmount <= 0 || tipPercentage <= 0) {
    return "Input values cannot be zero or less";
  }

  // Calculate the tip
  const tip = (billAmount * tipPercentage) / 100;
  return tip;
}
const billAmount = 0;
const tipPercentage = 15;
const tip = calculateTip(billAmount, tipPercentage);
console.log(`Tip amount: $${tip}`);

//Implement a simple shopping cart system with features to add items, remove items and calculate the total price. Use objects to represent items, including properties for the item name, price and quantity. Implement features to add items to the cart, remove items and calculate the total cost

// Item constructor function
function Item(name, price, quantity) {
  this.name = name;
  this.price = price;
  this.quantity = quantity;
}

// ShoppingCart constructor function
function ShoppingCart() {
  this.items = [];

  // Method to add an item to the cart
  this.addItem = function (item) {
    this.items.push(item);
  };

  // Method to remove an item from the cart
  this.removeItem = function (itemName) {
    const index = this.items.findIndex((item) => item.name === itemName);

    if (index !== -1) {
      this.items.splice(index, 1);
      console.log(`${itemName} removed from the cart.`);
    } else {
      console.log(`${itemName} not found in the cart.`);
    }
  };

  // Method to calculate the total cost of items in the cart
  this.calculateTotal = function () {
    let total = 0;

    this.items.forEach((item) => {
      total += item.price * item.quantity;
    });

    return total;
  };
}

// Example usage:

// Create items
const item1 = new Item("Laptop", 800, 2);
const item2 = new Item("Headphones", 50, 1);
const item3 = new Item("Mouse", 20, 3);

// Create a shopping cart
const shoppingCart = new ShoppingCart();

// Add items to the cart
shoppingCart.addItem(item1);
shoppingCart.addItem(item2);
shoppingCart.addItem(item3);

// Calculate and display the total cost
const totalCost = shoppingCart.calculateTotal();
console.log(`Total cost of items in the cart: $${totalCost}`);

// Remove an item from the cart
shoppingCart.removeItem("Headphones");

// Calculate and display the updated total cost
const updatedTotalCost = shoppingCart.calculateTotal();
console.log(`Updated total cost of items in the cart: ${updatedTotalCost}`);

//Develop a simple URL shortener service using JavaScript. Implement a function that takes a long URL as an input parameter and the output will be a shortened URL. Create a reverse function as well. The reverse function takes the shortened URL and returns the original long URL. You can use simple in-memory objects to store the mapping between long and short URLs.

// URL shortener service
class UrlShortener {
  constructor() {
    // class implemenation or function implementation can be used
    this.urlMap = {}; // Object to store the mapping between long and short URLs
    this.shortUrlBase = "https://short.url/";
    this.nextId = 1; // Counter for generating short URL IDs
  }

  // Function to shorten a long URL
  shortenUrl(longUrl) {
    const shortUrl = this.shortUrlBase + this.nextId;
    this.urlMap[shortUrl] = longUrl;
    this.nextId++;
    return shortUrl;
  }

  // Function to expand a short URL to the original long URL
  expandUrl(shortUrl) {
    const longUrl = this.urlMap[shortUrl];
    if (longUrl) {
      return longUrl;
    } else {
      throw new Error("Short URL not found");
    }
  }
}

// Example usage:
const urlShortener = new UrlShortener();

// Shorten a long URL
const longUrl = "https://www.example.com/some/long/path";
const shortUrl = urlShortener.shortenUrl(longUrl);
console.log(`Shortened URL: ${shortUrl}`);

// Expand a short URL
const originalUrl = urlShortener.expandUrl(shortUrl);
console.log(`Original URL: ${originalUrl}`);

//Implement an autocomplete feature for a search input field. Given an array of words, write a function that suggests words based on the current input. The output of the function will be an array of suggested words that start with the input characters, limiting the number of suggestions (e.g., a maximum of 7 suggestions).

function autocomplete(input, wordArray, maxSuggestions = 7) {
  let suggested = [];

  let cleanedInput = input.toLowerCase();

  for (const word of wordArray) {
    let cleanedWord = word.toLowerCase();
    if (cleanedWord.startsWith(cleanedInput)) {
      suggested.push(word);
      if (suggested.length >= maxSuggestions) {
        break;
      }
    }
  }
  return suggested;
}

// Example usage:
const words = [
  "apple",
  "banana",
  "apricot",
  "cherry",
  "grape",
  "orange",
  "pear",
  "pineapple",
  "plum",
];

const input = "p";
const suggestedWords = autocomplete(input, words);
console.log(`Suggestions for "${input}":`, suggestedWords);

//palindrom check function

function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}

//return even numbers in an array

function filterEvenNumbers(numbers) {
  return numbers.filter((num) => num % 2 === 0);
}

function factorial(number) {
  if (number === 0 || number === 1) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}

//1. Write a function which loops through an array and checks if n of the elements
// of the array satisfy the condition function that is passed
// Signature of the 'some' function

// (array, n, conditionFunction) -> trueOrFalse
// array - Input array
// n - The function should check if n elements of the conditionFunction satisfy
// Signature of the 'isEven' and 'isPrime' functions. They should take one integer as input and return a true or false value.

// (int) -> trueOrFalse

// Write the some function and isEven and isPrime functions

// Example: (When you run the following code, don't change anything)
// console.log(some([2,4,6], 3, isEven)) // should print true
// console.log(some([2,3,4], 3, isEven)) // should print false
// console.log(some([2,3,11], 4, isPrime)) // should print false
// console.log(some([2,3,5,9], 3, isPrime)) // should print true

function some(array, n, conditionFunction) {
  let mapped = array.map((i) => conditionFunction(i));
  return mapped.filter((i) => i === true).length >= n;
}

function isEven(int) {
  return int % 2 === 0;
}

function isPrime(int) {
  for (let i = 2, s = Math.sqrt(int); i <= s; i++) {
    if (int % i === 0) return false;
  }
  return int > 1;
}

// 2. Write a function whch returns a function that generates fibonacci numbers.
// Don't use generators.

// Example: (When you run the following code, don't change anything)

// let fibonacciGenerator = createFibonacciGenerator()
// console.log(fibonacciGenerator()) // should print 0
// console.log(fibonacciGenerator()) // should print 1
// console.log(fibonacciGenerator()) // should print 1
// console.log(fibonacciGenerator()) // should print 2
// console.log(fibonacciGenerator()) // should print 3
// console.log(fibonacciGenerator()) // should print 5
// console.log(fibonacciGenerator()) // should print 8

let a = 0;
let b = 1;

function createFibonacciGenerator() {
  return function () {
    const result = a;
    const temp = a + b;
    a = b;
    b = temp;
    return result;
  };
}

/////

const users = [
  {
    name: "Jack",
    isActive: true,
    age: 20,
  },
  {
    name: "Jhon",
    isActive: true,
    age: 25,
  },
  {
    name: "Joseph",
    isActive: false,
    age: 30,
  },
];

//Sort by age, active finally names only array

let names = users
  .sort((user1, user2) => (user1.age < user2.age ? 1 : -1))
  .filter((user) => user.isActive)
  .map((user) => user.name);
console.log(names);

//typeOf null is Object typeOf undefined is undefined

//Hoisting - this is how js works, where varivales and function declarations are moved to the top of the scope.

// console.log(foo);
// let foo = 2;
// //we will get foo is not defined

// let foo;
// console.log(foo);
// foo = 2;

//foo is undefined

// Weird console behavior =>

// let foo
// foo = 2
// You're declaring a variable foo using the let keyword and then assigning the value 2 to it. The console responds with 2 because it evaluates and displays the result of the last expression entered. In this case, the last expression is foo = 2, and the value of that expression is 2. Therefore, the console shows 2 as the result.

// *** In JavaScript, let and const declarations are not hoisted to the top of the scope, and they are not initialized until the point in the code where they are declared. ***

// *** Var and function declarations works in similar way.

// function private() {
//   const secret = "yolyo"; // this variable is closure
//   return () => secret;
// }

// let callPrivate = private();
// console.log(callPrivate());

// const PrivateCounter = () => {
//   let count = 0;
//   return {
//     getCount: () => {
//       return count;
//     },
//     increaseCount: (val = 1) => {
//       count += val;
//     },
//   };
// };

// let counter = PrivateCounter();
// console.log(counter);
// console.log(counter.getCount());
// counter.increaseCount();
// console.log(counter.getCount());

//Question - Multiply(a)(b) and return product of a and b; two calls to same function with one each args - currying

function multiply(num1) {
  return (num2) => {
    return num1 * num2;
  };
}
multiply(2)(3);

//same can be written as

let multiply = (num1) => (num2) => num1 * num2;
multiply(2)(3);

// complicated example where (a)(b)(c) and (a,b,c) and (a)(b,c) works

let curry = function (fn) {
  let arity = fn.length;
  return function f1(...args) {
    console.log(args);
    if (args.length >= arity) {
      console.log("enough args");
      return fn(...args);
    } else {
      console.log("Enter additional args");
      return function f2(...moreArgs) {
        let newArgs = args.concat(moreArgs);
        return f1(...newArgs);
      };
    }
  };
};

const curriedSum = curry((a, b, c) => a + b + c);
console.log(curriedSum(1, 2)(3));
console.log(curriedSum(1)(2, 3));
console.log(curriedSum(1, 2, 3));

///

// Write a function to add an element to an array

function addElem(array, el) {
  //Using push will mutathe array, this way, its more elegant
  return [...array, el];
}

//Write function to concatinate two arrays

function concat(arr1, arr2) {
  //using spread operator is the best approach
  return [...arr1, ...arr2];
}

// Write a function to check if name is inside array of objects

function checkName(name, arr) {
  return arr.some((obj) => obj.name === name);
}

// Write finction to return unique elemts only

let unique = (arr) => {
  return [...new Set(arr)];
};
// unique([1, 1, 2]); primitives can be compared like this.
// or we can use reduce and write code in more functional way

function uniqueFinder(target) {
  return target.reduce((cumul, el) => {
    return cumul.includes(el) ? cumul : [...cumul, el];
  }, []);
}

// console.log(uniqueFinder([1, 2, 3, 2]));
const books = [
  { name: "Harry Potter", author: "Joanne Rowling" },
  { name: "Warcross", author: "Marie Lu" },
  { name: "The Hunger Games", author: "Suzanne Collins" },
];

/// SORT array of objects with authers Lastname

let sorted = books.sort((book1, book2) => {
  let author1 = book1.author.split(" ")[1];
  let author2 = book2.author.split(" ")[1];
  return author1 > author2 ? -1 : 1;
});

// console.log(sorted)

// Working with DOM

// Q your dome has a paragraph, change background color to yellow if word is longer than 8.

let element = document.querySelector("p");
element.innerHTML = element.innerHTML
  .split("")
  .map((word) => {
    return word.length > 8
      ? `<span style="background-color: yellow">${word}</span>`
      : word;
  })
  .join("");

/// Write a range function

const range = (start, end) => {
  return [
    ...Array(end)
      .keys()
      .map((el) => el + start),
  ];
};

range(1, 50);

// Simple but effective shuffle function

const shuffle = (item) => {
  return item
    .map((el) => ({ sort: Math.random(), value: el }))
    .sort((item1, item2) => item1.sort - item2.sort)
    .map((i) => i.value);
};

shuffle([1, 2, 3, 4]);

/// Find the number of occurences of a minimum value in the list
let arr = [1, 2, 3, 4, 5, 1, 1];
let minVal = Math.min(...arr);
let occurences = arr.filter((el) => el === minVal);
console.log(occurences.length);

///  react code for tic tac toe

import React, { useState } from "react";
import "./App.css";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);

  function handleClick(i) {
    if (winner || board[i]) return;

    const newBoard = board.slice();
    newBoard[i] = xIsNext ? "X" : "O";
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  }

  function calculateWinner(board) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  }

  function renderSquare(i) {
    return (
      <button className="square" onClick={() => handleClick(i)}>
        {board[i]}
      </button>
    );
  }

  function renderRestartButton() {
    return (
      <button onClick={() => setBoard(Array(9).fill(null))} className="restart">
        Restart Game
      </button>
    );
  }

  return (
    <div className="game">
      <div className="board">
        {[...Array(9).keys()].map((i) => renderSquare(i))}
      </div>
      <div className="info">
        {winner ? `Winner: ${winner}` : `Next Player: ${xIsNext ? "X" : "O"}`}
        <div>{renderRestartButton()}</div>
      </div>
    </div>
  );
}

export default App;

/// react component ends here

// Learning this.
function callMe() {
  console.log(this);
}
callMe();

// we will get global object in browser it is window

class Item {
  title = "Ball";
  getItem() {
    console.log(this);
  }
}
let item = new Item();
item.getItem();

// Here this will result in item object without the method

class Item {
  title = "Ball";
  getItem() {
    function someFn() {
      console.log(this);
    }
    someFn();
  }
}
//let item = new Item();
item.getItem();

// this will be undefined in the above method
//To fix the above we can set proper reference like this

class Item {
  title = "Ball";
  getItem() {
    const this_ = this;
    function someFn() {
      console.log(this_);
    }
    someFn();
  }
}
//let item = new Item();
item.getItem();

//Above is an old method, used int he build step of Javascript
//We can use arrow function to get proper reference.

class Item {
  title = "Ball";
  getItem() {
    (() => {
      console.log(this);
    })();
  }
}
//let item = new Item();
item.getItem();

// // Design a class for employee which takes id and name in during construction of object and has a
//salary property

class employee {
  constructor(id, name) {
    if (!id || !name) {
      throw new Error("Need id and a name");
    }
    this.id = id;
    this.name = name;
  }

  setSalary(salary) {
    this.salary = salary;
  }

  getSalary() {
    return this.salary;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }
}

let empolyee1 = new employee(1, "shyam");
empolyee1.setSalary(25000);
console.log(empolyee1.getSalary());
console.log(empolyee1.getId());
console.log(empolyee1.getName());

// Design a class for manager which is employee and can have department property

class manager extends employee {
  setDepartment(name) {
    this.department = name;
  }
  getDepartment() {
    return this.department;
  }
}

let empolyee2 = new manager(2, "unni");
console.log(empolyee2);

/// Design the same classes this time, with using prototypes

var employee = function (id, name) {
  if (!id || !name) {
    throw new Error("Need id and a name");
  }
  this.id = id;
  this.name = name;
};

employee.prototype.setSalary = function (salary) {
  this.salary = salary;
};

employee.prototype.getSalary = function (salary) {
  return this.salary;
};

employee.prototype.getName = function () {
  return this.name;
};

employee.prototype.getId = function () {
  return this.id;
};

//let empolyee2 = new employee(2, "unni");
console.log(empolyee2.setSalary(55000));
console.log(empolyee2.getSalary());

//Async Javascript
// Write an example for fetching data using XMLHttpRequest

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.github.com/users/gaearon/repos");

xhr.send();

xhr.onload = function () {
  if (xhr.status !== 200) {
    console.log("Error" + xhr.status + xhr.statusText);
  } else {
    console.log(xhr.response);
  }
};

xhr.onerror = function () {
  console.log("Xhr request failed");
};

//Use the similar with fetch

fetch("https://api.github.com/users/gaearon/repos")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((e) => console.log(e));

//
