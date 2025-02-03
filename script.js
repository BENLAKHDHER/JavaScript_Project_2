// String Manipulation Functions
//1. Reverse a String

function reverseString(str) {

    return str.split('').reverse().join('');
}

console.log(reverseString("hello Friends"));

// 2. Count Characters

function countCharacters(str) {

    return str.length;
}

console.log(countCharacters("hello Friends"));

// 3. Capitalize Words

function capitalizeWords(sentence) {

    return sentence
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}


console.log(capitalizeWords("hello world"));

// Array Functions
// 4. Find Maximum and Minimum

function findMax(arr) {

    return Math.max(...arr);
}

function findMin(arr) {

    return Math.min(...arr);
}


const numbers = [3, 7, 2, 9, 4];
console.log(findMax(numbers));
console.log(findMin(numbers));

// 5. Sum of Array

function sumArray(arr) {

    return arr.reduce((sum, num) => sum + num, 0);
}

console.log(sumArray([1, 2, 3, 4]));

// 6. Filter Array

function filterArray(arr, condition) {

    return arr.filter(condition);
}


const filtered = filterArray([1, 2, 3, 4, 5], num => num > 3);
console.log(filtered);

// Mathematical Functions
// 7. Factorial

function factorial(n) {
    if (n < 0) return "Factorial is not defined for negative numbers";
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}


console.log(factorial(5));

// 8. Prime Number Check

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

console.log(isPrime(11));
console.log(isPrime(4));

// 9. Fibonacci Sequence

function generateFibonacci(n) {
    if (n <= 0) return [];
    const fib = [0];
    if (n === 1) return fib;
    fib.push(1);
    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib;
}

console.log(generateFibonacci(7)); 