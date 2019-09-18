// fizzBuzz
// 3 and 5 are magic numbers.
//
// Define a function fizzBuzz(array) that takes an array and returns a new
// array of every number in the array that is divisible by either 3 or 5,
// but not both.

function fizzBuzz(array) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    let num = array[i];

    if ((num % 3 === 0) || (num % 5 === 0)) {
      if (num % 15 !== 0) {
        newArray.push(num);
      }
    }
  }

  return newArray;
}

/* isPrime
Define a function isPrime(number) that returns true if number is prime.
Otherwise, false. Assume number is a positive integer.

> isPrime(2)
true

> isPrime(10)
false

> isPrime(15485863)
true

> isPrime(3548563)
false */

function isPrime(number) {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}
