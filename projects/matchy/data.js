/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animal = {

};

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

animal.species = "ball python";
animal["name"] = "Marvin";
animal.noises = [];

var noises = [];

noises[0] = "hissss";
noises.push("slither");
noises.unshift("hiiiiiiissss");
noises[noises.length] = "HIIISSSS";


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Using **bracket syntax**, assign the `noises` property on `animal` to our new `noises` array.
// Using any syntax add another noise to the `noises` property on `animal`.


animal["noises"] = noises;

animal.noises.push("SLITHER");

console.log(animal);
/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];

animals.push(animal);



var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] }
animals.push(duck);

var guineaPig = {species: 'guinea pig', name: 'Gilbert', noises: ['crunch', 'squeak', 'pitter', 'patter']}
animals.push(guineaPig);

var dog = {species: 'dog', name: 'Momo', noises: ["bark", "borf", "sniffsniff", "pant"]}
animals.push(dog);

console.log(animals);
//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var friends = []; // choosing an array because arrays are easy to store lists in and easy to move around and manipulate


function getRandom(animals){
 return Math.floor(Math.random() * animals.length);
}

friends.push(animals[getRandom(animals)].name);

console.log(friends);
// Using **bracket notation**, add the `friends` list as a **property** also named
//`friends` on one of the animals in the `animals` array

animals[0]["friends"] = friends;

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}