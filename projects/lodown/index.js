'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * identity: takes in any value and returns value unchanged
 * 
 * @param {any value}: can be any data type
 * 
 */
_.identity = function(value){
    return value;
}
module.exports.identity = indentity;

/**
 * typeof: used to find the type of value being passed in. certain values have special cases
 * and must be found a certain way.
 * 
 * @param {string, array, object, undefined, number, boolean, null, function}
 * 
 * 
 */
_.typeOf = function(value){
    if(Array.isArray(value)){
        return "array";
    } else if(value === null){
        return "null";
    } else {
        return typeof value;
    }
   
}
module.exports.typeof = _typeof;

/**
 * first: the first function gives the first value of the collection. 
 * it returns the first value that passes a given condition.  
 * the array is first converted to a collection and then the 
 * function is applied to the collection.
 * 
 * @param {array}: array of objects
 * @param {number}: number given 
 * 
 */
_.first = function(array, number){
    if(!Array.isArray(array) || number < 0){
        return [];
    } else if(typeof(number) !== "number"){
        return array[0];
    } else if(number > array.length){
        return array;
    }
    return array.slice(0, number);
}

module.exports.first = first;

/**
 * last: gives the last value of a collection. returns the last 
 * value that passes a given condition
 * 
 * @param {array}: array of objects
 * @param {number}: number given 
 * 
 */
_.last = function(array, number){
    if(!Array.isArray(array) || number < 0){
        return [];
    } if(typeof(number) !== "number"){
        return array.pop();
    } if(number > array.length){
        return array;
    }
    return array.slice(-number);
} 

module.exports.last = last;

/**
 * indexof:  will return the index of given array that is the first occurrance of thevalue
 * passed in or return -1 if the value is not in array
 * 
 * @param {array}: list of objects to iterate through
 * @param {value}: any value can be passed in
 * 
 */
_.indexOf = function(array, value){
    for (let i = 0; i < array.length; i++){
        if(array[i] === value){
            return i;
        }
    }
    return -1;
}
module.exports.indexof = indexof;

/**
 * contains: checks if an array contains a given value
 * 
 * @param {array} collection: function takes in an array of values
 * @param {value} values: function takes in any value 
 */
_.contains = function(array, value){
    return (array.includes(value) ? true : false)
 };
 module.exports.contains = contains;

 /**
  * unique: designed to remove all duplicates from an array and return an array with only
  * the unique values
  * 
  * @param {array} collection: function takes in an array of values
  * 
  */
 _.unique = function(arr){
    let storage = [];
    for(let i = 0; i < arr.length; i++){
        if(_.indexOf(storage, arr[i]) === -1){
            storage.push(arr[i]);
        }
    }
    return storage;
}
modoule.exports.unique = unique;

/**
 * filter: filters through an array of values, then calls a function and returns the
 * elements of the array that return true after calling the function
 * 
 * @param {array} collection: function takes in an array of values
 * @param {function} callback: function takes in a callback function
 */

_.filter = function(arr, func){
    let storageArr = [];
    for(let i = 0; i < arr.length; i++){
       if (func(arr[i], i, arr) === true){
        storageArr.push(arr[i]);
       }
    }
    return storageArr;
}
module.exports.filter = filter;

/**
 * reject: logical inverse of filter
 * 
 * @param {array} collection: function takes in an array of values
 * @param {function} callback: function takes in a callback function
 */
_.reject = function(array, func){
    let storage = [];
    for(var i = 0; i < array.length; i++){
        if (func(array[i], i, array) === false) {
            storage.push(array[i]);
        }
    }
    return storage;
}
module.exports.reject = reject;

/**
 * partition: will return an array of arrays. one array will contain all values for which the 
 * function call returned true, the other for all values the function call returns false
 *
 * @param {array} collection: function takes in an array of values
 * @param {function} callback: function takes in a callback function
 * 
 */
_.partition = function(array, func){
    let truthyArr = [];
    let falseyArr = [];
    for(var i = 0; i < array.length; i++){
        if(func(array[i], i, array) === true){
            truthyArr.push(array[i]);
        }  else if (func(array[i], i, array) === false){
            falseyArr.push(array[i]);
        }
    }

    return [truthyArr, falseyArr];
}
module.exports.partition = partition;


/**
 * map: performs an operation on every element in a collection that is passed in and returns
 * an array of updated values (post op values)
 * 
 * @param {collection}: could be an array or object
 * @param {function} callback: function takes in a callback function
 */
_.map = function(collection, func){
    let newArr = [];
    if(Array.isArray(collection)){
        for(var i = 0; i < collection.length; i++){
            newArr.push(func(collection[i], i, collection));
        }
    } else if (typeof(collection) === "object"){
        for(var key in collection){
            newArr.push(func(collection[key], key, collection));
        }
    }
    return newArr;
}
module.exports.map = map;

/**
 * pluck: returns array containing the value of the property 
 * for every element in an array
 * 
 * @param {array} collection: function takes in an array of values
 * @param {property} property: property in object
 */
_.pluck = function(array, property){
    let result = _.map(array, function(obj) {return obj[property];});

    return result;
}
module.exports.pluck = pluck;

/**
 * every: tests whether all elements in the array pass the test implemented by 
 * the provided function. It returns a Boolean value.
 * 
 * @param {collection}: could be an array or object
 * @param {function} callback: function takes in a callback function
 */

_.every = function(collection, func) {
    //create if statement to determine if collection is an array
    if (Array.isArray(collection)) {
        //determine if function wasn't provided
        if (func === undefined) {
            // Loop through the array, and return false if any number is 0 (returning false for falsy values)
            for (let i = 0; i < collection.length; i++) {
                if (collection[i] === 0) {
                    return false;
                }
            }
        } else { //else it was
            for (let i = 0; i < collection.length; i++) {
                if (func(collection[i], i, collection) === false) { //if result of invoking is falsey
                    return false;
                }
            }
        }
    //else it is an object
    } else {
        //determine if function wasn't provided
        if (func === undefined) {

        } else { //else it was

        }

    }
    return true;
};

module.exports.every = every;

/**
 * some: tests whether at least one element in the array passes the test 
 * implemented by the provided function. it returns true if, in the array, it finds an 
 * element for which the provided function returns true; otherwise it returns false.
 * it doesn't modify the array.
 * 
 * @param {collection}: could be an array or object
 * @param {function} callback: function takes in a callback function
 *  
 */
_.some = function(collection, func){
    if (Array.isArray(collection)){ 
        if (func === undefined){
            for(var i = 0; i < collection.length; i++){
                if(collection[i] !== 0 && collection[i] !== null && collection[i] !== false && collection[i] !== ""){
                    return true;
                }
                else {
                    return false;
                }
            }
        }  
        for (var i = 0; i < collection.length; i++){
            if (func(collection[i], i, collection) === true){
                return true;
            } 
        }
    } else if (typeof(collection) === "object"){
        for (var key in collection){
            if (func(collection[key], key, collection) === true){
                return true;
            }
        }
    }

    return false;
}
module.exports.some = some;

/**
 * reduce: method executes a user-supplied "reducer" callback function on each element of 
 * the array, in order, passing in the return value from the calculation on the preceding 
 * element. the final result of running the reducer across all elements of the array is a 
 * single value.
 * 
 * @param {array} collection: function takes in an array of values
 * @param {function} callback: function takes in a callback function
 * @param {seed} placeholder: variable to be operated on first 
 */
_.reduce = function(array, func, seed){
    // Variable that will hold the starting index of our loop
    let start;

    // If seed is undefined, let seed be the first element of the array
    if (seed === undefined){
        seed = array[0];
        // Since seed is now the first element, we want to start our loop later at index 1
        start = 1;
    }
    else {
        // If seed is known however, we'll want to start our loop at index 0
        start = 0;
    }

    // Initialize prevResult as the seed, which will be used for the first iteration of the loop (step 3)
    let prevResult = seed;

    // Begin looping through our array
    for (var i = start; i < array.length; i++){
        // Call the function, and store its result in prevResult (prevResult will be overwritten every loop)
       prevResult = func(prevResult, array[i], i);
    }

    // Return prevResult (the final result from the last time the loop ran); the value of the final function call
    return prevResult;
}
modules.export.reduce = reduce;

/**
 * extend: copies properties from one object to another
 * 
 * @param {object} collection: takes in an object of values
 * @param {object} collection: takes in an object of values
 * @param {possibly more objects} collection: takes in an object of values
 * 
 */
_.extend = function (obj1, obj2, ...moreObjects) {
    // Copy properties from obj2 to obj1
    for (var key in obj2) {
      obj1[key] = obj2[key];
    }
  
    // If more objects are passed in, copy their properties to obj1 as well
    if (moreObjects.length > 0) {
      for (var i = 0; i < moreObjects.length; i++) {
        var obj = moreObjects[i];
        for (var key in obj) {
          obj1[key] = obj[key];
        }
      }
    }
  
    // Return the updated obj1
    return obj1;
  }
module.exports.extend = extend;