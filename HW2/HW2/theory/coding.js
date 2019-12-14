function display2_1() {
  var myanswer  = "My answer goes here: 1. This ends up ass undefined because there is member called dragonball 2. This will return true as undefined is equal to the value of null when using '==' 3. This will return false because it uses the '===' and even though the are equal in value, they have seperate types." // TODO 2.1: Fill in Answer here after the :
  document.getElementById("21answer").innerHTML = myanswer; // Do not change
}
function display2_2() {
  var myanswer  = "My answer goes here: Throw an error for trying to assign a value to an undeclared variable. Removing the use strict allows it to continue. This is because strict mode will not allow the use of undeclared variables." // TODO 2.2: Fill in Answer here
  document.getElementById("22answer").innerHTML = myanswer; // Do not change
}

function display2_5() {
  var myanswer  = "My answer goes here: We can the tags despite them being hidden because they are still present in DOM just with atribute hidden" // TODO 2.5: Fill in Answer here
  document.getElementById("25answer").innerHTML = myanswer; // Do not change
}

function countDiv() { // Do not add or remove lines to this function
    var divs = document.getElementsByTagName("div"); // Question 2.3: Use the document Object to get the number of divs in the HTML page. Replace dummyMethod with the correct one.
    alert("Number of divs in this page is: " + divs.length); // Do not change 
}

function makeOrange() { // Do not add or remove lines to this function
    var narutos = document.getElementsByName("naruto"); //  Question 2.4: Use the document Object to get all tags named "naruto" in the HTML page. Replace dummyMethod with the correct one.
    for(var i=0; i< narutos.length; i++) { // Do not change
        narutos[i].style.color = 'orange'; // Do not change
    }
}

function getChildrenTags() { // Do not add or remove lines to this function
  var children = document.getElementById('div_1134').children; // Question 2.5 Use the appropriate function to get all the children of a div named 'div_1134'
  var tagNames = ""; // Do not change
  for (var i = 0; i < children.length; i++) {// Do not change
    console.log(children[i].tagName);// Do not change
    tagNames += children[i].tagName +", " ;// Do not change
  }// Do not change
  alert(children.length); // Do not change
  alert("The tags that I found are: " + tagNames);// Do not change
}

