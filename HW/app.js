// No Loops Allowed:

// 1. Contains Vowel
console.log('containsVowel:')
function isVowel(letter) {
    if (['a', 'e', 'i', 'o', 'u'].includes(letter)) {
        return true;
    } else {
        return false;
    }
}

function containsVowel(word) {
    let letters = word.split('');

    // step one: break into letters (split)
    // find out which are vowels
    // if one or more are, return true

    return letters.filter(isVowel).length > 0;
}

console.log(containsVowel('tigers'));

// 2. Divisors
console.log('Divisors:')

function range(min, max) {
    let array = [];

    for (let i = min; i <= max; i++) {
        array.push(i);
    }
    return array;
}

function divisors(num) {
    function isDivisible(current) {
        return (current % num === 0);
    }
    let nums = range(1, 100).filter(isDivisible);
    return nums;
}
console.log(divisors(7));

// 3. Boost
console.log('Boost:')

function parse(digit) {
    return parseInt(digit);
}

function increment(nums) {
    if (nums < 9) {
        return nums + 1
    } else {
        return 0
    }
}

function boost(nums) {
    let digits = nums.toString().split('');
    digits = parse(digits.map(parse).map(increment).join(''));
    return digits;
}
console.log(boost(59));
console.log(boost(129843));

// 4. Multiples
console.log('Multiples:')

function range(min, max) {
    let array = [];

    for (let i = min; i <= max; i++) {
        array.push(i);
    }
    return array;
}

function multiples(one, two) {
    function isDivisible(current) {
        return (current % one === 0) && (current % two === 0);
    }
    let nums = range(1, 100).filter(isDivisible);

    return nums;
}

console.log(multiples(5, 7));

// 5. Part two

console.log('Part two:');







//--------------------------------------
console.log('1/5 Practice Problem:');
let people = [
    { first: 'Jeb', last: 'Walters', age: 48 },
    { first: 'Katy', last: 'Jeeters', age: 58 },
    { first: 'Finster', last: 'O Hannigan', age: 18 },
];

function allowed(folks, minimum) {
    function oldEnough(folk) {
        if (folk.age > minimum) {
            return true;
        } else {
            return false;
        }
    }
    function makeName(person) {
        return person.first + ' ' + person.last;
    }

    let keepers = folks.filter(oldEnough).map(makeName);
    return keepers;
}



// function allowed(folks, minimum) {
//     return folks.filter(function (folk) {
//         return folk.age > minimum;
//     }).map(function (person) {
//         return person.first + ' ' + person.last;
//     });
//     let keepers = folks.filter(oldEnough).map(makeName);
//         return keepers;
// }
