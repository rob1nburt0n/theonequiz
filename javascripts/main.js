$( "#jquery_output" ).html('"This content generated with jQuery".');

// Write a function named modulus that takes two arguments. The function should use the 
// modulo operator to return the remainder between the first
//  and second arguments. e.g. modulus(10, 3) // Should return 1.

var diff = modulus(10,3);

function modulus(num1,num2) {
  return num1 % num2;
}
// console.log(diff);
document.write("10 % 3 = " + diff);

// Write a function named doMath. This function takes three arguments. 
// The first two will contain integer values. The third argument will be a 
// function reference. Write two more functions named add and subtract. 
// Execute the doMath function to add two numbers together. 
// Then execute the doMath function to subtract the two numbers.



  function add(numA, numB) {
    return numA + numB;
  }
  function subtract(numA, numB) {
    return numA - numB;

  }
  function doMath(numA, numB, funRef) {
  return funRef(numA, numB);
}


var addedNums = doMath(2,3,add);
document.write("<p>" + "2 + 3 = " + addedNums + "</p>");
var subtractedNums = doMath(7,4,subtract);
document.write("<p>" + "7 - 4 = " + subtractedNums + "</p>");


var Planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

// function named sortedPlanets that returns an array of the planet names sorted alphabetically.

function sortedPlanets() {
  Planets.sort();
  // console.log(Planets);
  document.write(Planets);
}
sortedPlanets();

// function named reversedPlanets that returns an array of planet names that are reversed (i.e. "htraE").

function reversedPlanets(inputArray) {
  var revPlanets = [];
  for (var i = 0; i < inputArray.length; i++) {
    // console.log(Planets[i]);
   revPlanets.push(inputArray[i].split("").reverse().join(""));
   
   }
   return revPlanets;
}

reversedPlanets(Planets);
// console.log(reversedPlanets(Planets));
document.write("<p>" + reversedPlanets(Planets) + "</p>");



// function named longPlanets that returns an array containing only the planet names that are 7 characters long, or longer.

function longPlanets(input) {
  var moreThan7 = [];
  for (var i = 0; i<input.length; i++) {
    if (input[i].length >=7) {
    moreThan7.push(input[i]);
  }
   
  }
  return moreThan7;
 
}
console.log(longPlanets(Planets));
document.write(longPlanets(Planets));

// Write a function named getAnimals that uses the jQuery ajax method to retrieve the data/animals.json file.
//  When you execute the functions, it should just log just the array of animals to the console when the async 
//  is complete. Make sure you provide a prompt of "animals" when logging the array.

define(function() {
  
 return {
  querySongs: function(getAnimals) {
    $.ajax({
      url: "data/animals.json",
    }).done(function(data) {
      getAnimals.call(this, data.animals)
     
  });
 }
};
});





