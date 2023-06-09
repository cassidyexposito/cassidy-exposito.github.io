// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */
function range(start, end) {
    // YOUR CODE GOES BELOW HERE //
// create a storage array to push new array into

var storage = []

// use if statements to check if parameters are greater or less than each other

if (start < end){ //if start param is < than end param 
    // use for loop to iterate through the range and print the numbers from start to end starting
    // with start
    for (var i = start; i <= end ; i++){
        // push the integers into storage array
        storage.push(i);
       
    }  return storage; //return array
} else if (start > end){ // if start param is > than end param
    // use for loop to iterate through the range and print the items in reverse, starting from start
    for (var i = start; i >= end; i--){ 
        storage.push(i); // push integers into storage array
    } return storage; // return array
}
}
    
    
    // YOUR CODE GOES ABOVE HERE //






// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}
