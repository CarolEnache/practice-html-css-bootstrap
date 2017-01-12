// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

var $ = require('jquery');
var Link = require('../_modules/link/link');

$(function() {
  new Link(); // Activate Link modules logic
  console.log('Welcome to Yeogurt!');

  // document.getElementById('imgbox1').addEventListener('click', function () {
  //   document.getElementById("imgbox1").style.display="none";
  // });

  // document.getElementById('imgbox2').addEventListener('click', function() {
  //   document.getElementById('imgbox2').style.visibility="hidden"

  // });

  // document.getElementById('imgbox3').addEventListener('click', resetElementNow);
  // function resetElementNow() {
  //   document.getElementById("imgbox1").style.display="block";
  //   document.getElementById("imgbox2").style.visibility="visible";
  // }

  var smecherie = function(event) {
      console.log(event.currentTarget.id);
      if (event.currentTarget.id === 'imgbox1') {
        document.getElementById("imgbox1").style.display="none";
      } else if (event.currentTarget.id === 'imgbox2') {
        document.getElementById('imgbox2').style.visibility="hidden";
      } else if (event.currentTarget.id === 'imgbox3') {
        document.getElementById("imgbox1").style.display="block";
        document.getElementById("imgbox2").style.visibility="visible";
      }
  };
  // Smecherie
  document.querySelectorAll('.imgbox').forEach(function(element) {
    element.addEventListener('click', smecherie);
  });
});

