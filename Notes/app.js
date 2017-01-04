
function addTwo(num) {
    return num + 2;
}

function multi(num) {
    return num * 3;
}

function doMath(func) {
    return 3 + func(5);
}

console.log(doMath(addTwo));    // logs 10 (7 + 3)
console.log(doMath(multi));     // logs 18 (3 + 15)
console.log(doMath(function (x) {
    return x * 4;
}));                            // logs 23
console.log(doMath(function (zebra) {
    return zebra * zebra;
}));                            // logs 28


//Example 2
function greet(name, prepare) {
    return 'Good day, ' + prepare(name);
}

function proper(name) {
    return 'Lord or Lady, ' + name;
}

console.log(greet('Fatimah', proper));

//Example 3
let prices = [1.10, 5.41, 9.99];

function modify(nums, op) {
    for (let i = 0; i <nums.length; i++) {
        nums[i] = op(nums[i]);
    }
    return nums;
}

function increase(num) {
    return num + 1
}

console.log(modify(prices, increase));

//Example 4
let mountains = [91, 55, 70, 100];
    
function erode(height) { 
    return height - 3;
}

//Function programming involes a set of tools very similar to 
//  things we've used in the past (loops primarily).
// These are ALTERNATIVES to loops, not strictly 'better' or 'worse'

//array.map(func) => return a new array with func applied to each item
//array.filter(func) => return a new array with items where func returns true


//When you want to modify items in the array.
//Observations for .map:
//  - output.length === input.length, always
//  - values can but don't have to be different 

console.log(mountains.map(erode)); // [88, 52, 67, 97];

console.log(mountains.map(function (height){ // [91, 55, 70, 97]
    if (height >= 100) {
        return height - 3;
    } else {
        return height;
    }
}));

function isBig(height) {
    if (height > 90) {
        return true;
    } else {
        return false;
    }
}
console.log(mountains.filter(isBig));

//Example 5
/**
 * awesomeshoes.com
 * members get 20% - map it
 * only show shoes < 100 - filter it
 * add $ to prices - map it
 */
let shoes = [14, 180, 300, 110, 87];

function discount(price) {
    return price * 0.8;
}

function cheaper(price) {
    return price < 100;
}

function addDollars(price) {
    return '$' + price.toFixed(2);
}

function round(price) {

}

let display = shoes.map(discount).filter(cheaper).map(addDollars);
console.log(display);
