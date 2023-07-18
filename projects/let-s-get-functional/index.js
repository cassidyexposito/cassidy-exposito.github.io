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
        if(array[i].age > oldestCustomer.age){
            oldestCustomer = array[i];
        }
    }
    return oldestCustomer.name;
}

var youngestCustomer = function(array){
    let youngestCustomer = array[0];

    for(let i = 0; i < array.length; i++){
        if(array[i].age < youngestCustomer.age){
            youngestCustomer = array[i];
        }
    }
    return youngestCustomer.name;
}

var averageBalance = function(array, number){
    let totalBalances = 0.0;

    for (let i = 0; i < array.length; i++) {
        let balance = array[i].balance;
        balance = balance.replace(",", "");
        balance = balance.replace("$", "");
        totalBalances += parseFloat(balance);
    }

    return totalBalances / array.length;
}

var firstLetterCount = function(array, letter){
    let count = 0;

    for(let i = 0; i < array.length; i++){
        if(array[i].name[0].toLowerCase() === letter.toLowerCase()){
           count++;
        }
    }
    return count;
}

var friendFirstLetterCount = function(array, customer, letter){
    // Array: An array of customer objects, seen in customers.json
    // Customer: a STRING that is a customer's name
    // Letter: the letter that we're trying to see if anyone's first letter of their name matches

    // Create a variable to keep track of the number of friends that have their name start with letter
    let numFriends = 0;

    // Begin by looping through all of the customers in the array
    for (let i = 0; i < array.length; i++) {
        // If a customer's name matches the customer string, that means we found the customer we're looking for
        if (array[i].name === customer) {
            // Store the friends array of this customer into another array (optional to do this, just did it for readability)
            let customerFriends = array[i].friends;
            // Begin looping through the friends of this customer
            for (let j = 0; j < customerFriends.length; j++) {
                // If any of the friends names begins with our letter, increment numFriends (converting both toLowerCase for common ground)
                if (customerFriends[j].name[0].toLowerCase() === letter.toLowerCase()) {
                    numFriends++;
                }
            }
        }
    }

    // return the number of friends whose names began with letter
    return numFriends;
}
 
// function getFriends(krustomer){
//     if(krustomer.friends.includes(name)){
//         return true;
//     }
//     return false;
// }

var friendsCount = function(array, name){
    let filteredList =  _.filter(array, function(customer) {
        for (let i = 0; i < customer.friends.length; i++) {
            if (customer.friends[i].name === name) {
                return true;
            }
        }
        return false;
    });

    // [{"Tom", "12345", "..."}, {"Gilbert", "55555", "..."];

    filteredList = _.map(filteredList, function(customer) {
        return customer.name;
    });

    // ["Tom", "Gilbert", ...];

    return filteredList;
}

var topThreeTags = function(array){
    let storage = [];
    // storage object to hold all tags and their counts
    let countObj = {};

    for(let i = 0; i < array.length; i++){ // looping through customers array 
        for(let j = 0; j < array[i].tags.length; j++){ // looping through each customers tags array
            // use hasOwnProperty to update our empty count object with current customers tags
            if(!countObj.hasOwnProperty(array[i].tags[j])){  // check if the tag is in the object
                countObj[array[i].tags[j]] = 1 // 
            } else {
                countObj[array[i].tags[j]]++ // updating count object with tags found in customers array
            }
        }
    }

    while (storage.length != 3) {
        let maxVal = 0; // Biggest value in the object
        let biggestKey = ""; // Key corresponding to that value

        for (let key in countObj) {
            if (countObj[key] > maxVal) {
                maxVal = countObj[key];
                biggestKey = key;
            }
        }

        storage.push(biggestKey);
        delete countObj[biggestKey];
    }

    return storage; 
}



var genderCount = function(array) {
   let counts = {
    "male" : 0,
    "female" : 0,
    "non-binary" : 0
   };

   for(let i = 0; i < array.length; i++){
    let customerGender = array[i].gender;
    counts[customerGender]++
   }
   return counts;
};

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
