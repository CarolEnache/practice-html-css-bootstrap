// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

var $ = require('jquery');
var Link = require('../_modules/link/link');

$(function() {
  new Link(); // Activate Link modules logic
  console.log('Welcome to Yeogurt!');
});

function removeElement() {
  document.getElementById("imgbox1").style.display="none";
}
removeElement()
function changeVisibility() {
  document.getElementById("imgbox2").style.visibility="hidden";
}
changeVisibility()

function resetElement() {
  document.getElementById("imgbox1").style.display="block";
  document.getElementById("imgbox2").style.visibility="visible";
}
resetElement()

function doSum(a, b) {
  var sum = a + b;
  return sum;
}
doSum(2, 5);
doSum(6, 71);