//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an object and return its values in an array

function objectValues(object) {
var storage = []; 
for (var key in object){
    storage.push(object[key]);
}
return storage;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take an object and return all its keys in a string each separated with a space

function keysToString(object) {
    return Object.keys(object).join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an object and return all its string values in a string each separated with a space

function valuesToString(object) {
    let string = []; // create array to return new strings into
    for (let key in object) { // use for in loop to go through object
       if (typeof object[key] === "string") // determine if keys in object are strings using typeOf
    string.push(object[key]); //push strings into storage array
    }
       return string.join(" ");  //separate them with a space
    
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take one argument and return 'array' if its an array and 'object' if its an object

function arrayOrObject(collection) {
    if (Array.isArray(collection)){
        return "array";
    } else if (typeof collection === "object" &&
    collection !== null &&
    !Array.isArray(collection)){
        return "object";
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take a string of one word, and return the word with its first letter capitalized
function capitalizeWord(string) {
    return string[0].toUpperCase() + string.substring(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take a string of words and return a string with all the words capitalized

function capitalizeAllWords(string) {
    const words = string.split(" ");

    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }
  
    return words.join(" ");
} 
//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take an object with a name property and return 'Welcome <Name>!'"

function welcomeMessage(object) {
   
    for (var key in object){
        return "Welcome " + object.name[0].toUpperCase() + object.name.substring(1) + "!";
    }

}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an object with a name an a species and return '<Name> is a <Species>

function profileInfo(object) {

    for (var key in object){
        return object.name[0].toUpperCase() + object.name.substring(1) + " is a " + object.species[0].toUpperCase() + object.species.substring(1);
    }
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an object, if this object has a noises array return them as a string separated by a space, 
//if there are no noises return 'there are no noises'"

function maybeNoises(object) {
     // we know there is a noises array in our object so we need to check if it's an array and if 
     // it has any elements by checking it's length
    if (Array.isArray(object.noises) && object.noises.length > 0) {
        return object.noises.join(" "); // separate the elements in the array with a space
    } else {
        return "there are no noises"; // return there are no noises if there arent any
    }
}


//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Should take a string of words and a word and return true if <word> is in <string of words>, 
//otherwise return false."

function hasWord(string, word) {

    if (string.indexOf(word) !== -1){
        return true;
    } 
    return false;
    }
       


//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take a name and an object and add the name to the object's friends array then return the object
function addFriend (name, object) {
   
    object.friends.push(name);
    return object;
}


   


//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take a name and an object and return true if <name> is a friend of <object> and false otherwise

function isFriend(name, object) {
    //does this object have the friend key?
    //if it doesn't have the friends property then it has no friends
    // so it wouldn't be in friends
    if (!object.hasOwnProperty("friends")) {
        return false;
      }
    for(let i = 0; i < object.friends.length; i++){ //loop through object.friends to find friends name
        if(name === object.friends[i]){ //if the name is in the friens object return true
            return true;
        }
    }
    return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take a name and a list of people, and return a list of all the names that <name> is not friends with

function nonFriends(name, array) {
    // Creating a list to hold all people who aren't friends of "name"
   let notFriends = [];

    // Loop through the array (the list of people)
    for(var i = 0; i < array.length; i++){
        if(name === array[i].name){
            continue; 
        } // Skip this iteration of the loop if this person's name is the same as "name", we don't want to check their own friends list
        // If this person's friends does not include the name
        if(!array[i].friends.includes(name)){
            notFriends.push(array[i].name); // Push the name of this person into the list
        }
    }  return notFriends;
   
       // return the list
        
}


//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Should take an object, a key and a value. Should update the property <key> on <object> 
//with new <value>. If <key> does not exist on <object> create it

function updateObject(object, key, value) {
    object[key] = value;
  return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Should take an object and an array of strings.
// Should remove any properties on <object> that are listed in <array>"

function removeProperties(object, array) {
// loop through the array of strings
    for(let i = 0; i < array.length; i++){
        if(object.hasOwnProperty(array[i])){ //if property exists in this object
            delete object[array[i]]; //delete the property
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take an array and return an array with all the duplicates removed"

function dedup(array) {
    let unique = [...new Set(array)];
    return unique;
}


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}