// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./cassidy-exposito.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */
// map , filter , reduce , each

function getMales(customer){
    if(customer.gender === "male"){
        return true;
    }
    return false;
}

var maleCount = function(array){
    let filteredArray = _.filter(array, getMales);
    return filteredArray.length;
}; 


function getFemales(customer){
    if(customer.gender === "female"){
        return true;
    }
    return false;
}

var femaleCount = function(array){
    let filteredArray = _.filter(array, getFemales);
    return filteredArray.length;
}

var oldestCustomer = function(array){
    let oldestCustomer = array[0];

    for(let i = 0; i < array.length; i++){
        if(array[i].age > array[0].age){
            oldestCustomer = array[i];
        }
    }
    return oldestCustomer.name;
}

var youngestCustomer = function(array){
    let youngestCustomer = array[0];

    for(let i = 0; i < array.length; i++){
        if(array[i].age < array[0].age){
            youngestCustomer = array[i];
        }
    }
    return youngestCustomer.name;
}
// skip average balance 
var averageBalance;

var firstLetterCount = function(array, letter){
    let count = 0;

    for(let i = 0; i < array.length; i++){
        if(array[i].name[0].toLowerCase() === letter.toLowerCase()){
           count++;
        }
    }
    return count;
}

var friendFirstLetterCount;

var friendsCount;

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
