/**
 * VARIABLES:
 * 
 * 0: Variables are named constainers that store data in Javascript. Variables can point to
 * various data types, but they can only point to one value at a time. Even though they can only point to 
 * one value at a time, they can be updated to point to a new value.
 * 1: To create a variable we use the keyword 'var' followed by the name for our variable.
 * 2: There are two phases of using variables: declaration and initialization (or assignment).
 */
//1. declaration//
// at declaration, the variable prints undefined because we have not assigned it a value.

var myDog;
console.log(myDog); // prints undefined

//2. initialization or assignment //
// at assignment, we use an = operator to assign the variable a value

var myDog = "Momo";
console.log(myDog); //prints "Momo"

//3. reassignment //
// the variable can be updated by giving the variable a new value

var myDog = "Stinky";
console.log(myDog); // prints "Stinky"