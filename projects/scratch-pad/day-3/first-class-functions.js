// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
     return function(value){
        if (typeof base == "string" || typeof value == "number"){
            return value > base
        } else {
            return Number(value) > Number(base);
        }
     }

    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    return function(value){
        if (typeof base == "string" || typeof value == "number"){
            return value < base
        } else {
            return Number(value) <  Number(base);
        }
     }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    //convert startsWith character to lower case
    startsWith = startsWith.toLowerCase();
// convert first character of str to lowercase for comparison
    return function(str){
        var firstChar = str.charAt(0).toLowerCase(); //set first character of string to lowercase
        return firstChar === startsWith;
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    // convert endsWith to lowercase
    endsWith = endsWith.toLowerCase();
 // convert the last character of endsWith to lowercase for comparison
    return function(str){
        var lastChar = str.slice(-1).toLowerCase();  // use slice method to access last character in string
        return lastChar === endsWith;
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
 
    var newStrings = []; // create storage array for modified strings to be pushed into
    
    for (var i = 0; i < strings.length; i++){
        var modifiedString = modify(strings[i]);
        newStrings.push(modifiedString);
    }
    return newStrings;
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test if they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    

    for (var i = 0; i < strings.length; i ++){
        if (!test(strings[i])) { // If any string fails the test
            return false; // Return false immediately
        }
    }
    
    return true; // All strings pass the test
    
    return updatedStrings;
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}
