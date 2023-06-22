// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 * TIP: there is a method that is VERY HELPFUL for this
 *  */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    
    var result = Array.isArray(value); //check if value is an Array
    if(result){ //if it is, return true
        return true
     } else { //if not, return false
        return false
     }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise. (Is it a collection of key value pairs? {a: 1, b:2, c:3})
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    
    if (value !== null && !Array.isArray(value) && !(value instanceof Date) && typeof(value) == 'object') {
        return true;
    }
    else {
        return false;
    }
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    // check if value is an array  OR   collection
    if (Array.isArray(value) || (typeof(value) == 'object' && value !== null && !(value instanceof Date))){
        return true; // only way to know if value is a collection is by making sure it's not null or instance of date
    } else {
        return false;
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string" //string
 *    - "array"
 *    - "object"
 *    - "undefined" // string
 *    - "number" // string
 *    - "boolean" // string
 *    - "null"
 *    - "function" // string
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    
    if (Array.isArray(value)){
        return "array";
    } else if (isObject(value)){
        return "object";
    } else if (value === null){
        return "null"
    } else if (value instanceof Date){
        return "date"
    } else {
        return typeof(value); 
    }
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
