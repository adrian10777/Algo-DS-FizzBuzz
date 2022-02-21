// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

//how to calculate a multiple of a given # in JS

/*
using modulo %, determines remainder of division
9 % 3 = 0, 3 goes into 9 3 times
10 % 3 = 1, 3 goes into 9 3 times, and we get a remainder of 1
11 % 3 = 3
*/


function fizzBuzz(n) {
    for (let i = 1; i <= n; i++); {
        // is the num a multiple of 3 and 5?
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuzz');
        } else if (i % 3 === 0) {
            // is the num a multiple of 3
            console.log('fizz');
        } else if ( i % 5 === 0) {
            console.log('buzz');
        } else {
            console.log(i)
        }
    }
}

console.log(fizzBuzz(5));