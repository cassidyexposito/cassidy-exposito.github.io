// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode




var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

 _.identity = function(value){
    return value;
}

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
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
    


/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
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


/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
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


/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

_.indexOf = function(array, value){
    for (let i = 0; i < array.length; i++){
        if(array[i] === value){
            return i;
        }
    }
    return -1;
}

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

_.contains = function(array, value){
   return (array.includes(value) ? true : false)
};

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/


_.each = function(collection, func){
    if (Array.isArray(collection)){
        for(var i = 0; i < collection.length; i++){
            func(collection[i], i, collection)
        }
    } else if (typeof(collection) === "object"){
        for(var key in collection){
            func(collection[key], key, collection)
        }
    }
}

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
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

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
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



/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
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

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
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
            
        


/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]

*   _.map([{a: "one"}, {a: "two"}], function(obj) {return obj[property];}  ) --> ["one", "two"];

*  _.map([5, 6, 7, 8, 9], function(num) {return num + 5}); --> [10, 11, 12, 13, 14];
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


/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

_.pluck = function(array, property){
    let result = _.map(array, function(obj) {return obj[property];});

    return result;
}

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
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
    

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
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

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/


// seed = 10
// array = [1, 2, 3, 4, 5]
// _.reduce --->  array = [11, 12, 13, 14, 15]

// seed = 5
// array = [1, 2, 3]
// after reduce ---> [6, 7, 8]

// seed = ???
// array = [4, 5, 6]
// use the first value of array as the seed;  seed = 4
// ._reduce -->  [4, 9, 10];  (didnt operate on 4, because he's the seed)

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

// function() {
//     // handle the edge cases first


//     // actual code
// }




/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
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
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
