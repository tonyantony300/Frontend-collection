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

// closure();

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
console.log(`Updated total cost of items in the cart: $${updatedTotalCost}`);
