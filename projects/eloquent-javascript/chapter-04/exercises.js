////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step=1) {
  let array =[];
  if(start < end && step < 0){
    return array;
  }
  if(step > 0 && start < end) {
    for(let i = start; i <= end; i+=step) {
    array.push(i);
  }} else if (step > 0 && start > end){
    for(let i = start; i >= end; i-=step){
      array.push(i);
    }
  }
  
  else if(step < 0 && start > end) {
    for(let i = start; i >= end; i+=step){
      array.push(i);
  }} else if(step < 0 && start < end){
    for(let i = start; i <= end; i-=step){
      array.push(i)
    }
  }

  return array;

}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) {
  let  sum = 0
  
  if(array.length === 0){
    return sum;
  } 
  for (let i = 0; i < array.length; i++){
    sum += array[i];
    
  }
  return sum;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
  let backwards = [];

 for(let i = 0; i < array.length; i++){
  backwards.unshift(array[i]);
 }
 return backwards;
 
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
 }
 return array;
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
let rest = null;

for (let i = array.length - 1; i >= 0; i--){
  rest = { value: array[i], rest: rest};

}
return rest;

};

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list, output=[]) {
//base
if(list.rest === null){
output.push(list.value);
return output;
}
//recursion

output.push(list.value);

return listToArray(list.rest, output);
};

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend() {

}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth() {

}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual() {

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
