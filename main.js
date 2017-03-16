console.log('Hello World')
//when the user clicks the submit button- runs a function to test to so if their input is validates
//if invalid - alert with generic 'fill out ore info'
//else - return the info into an object
//console.log the object


var information = {};

var firstName = document.querySelector('#firstName');
var lastName = document.querySelector('#lastName');
var button = document.querySelector('#button');
var emailAddress = document.querySelector('emailAddress');
var country = document.querySelector('country');
var biography = document.querySelector('biography');
var phoneNumber = document.querySelector('phoneNumber');
var affiliations = document.querySelector('affiliations');
var occupation = document.querySelector('occupation');
var catName = document.querySelector('catName');
var favgadget = document.querySelector('favgadget');
var talent = document.querySelector('talent');
var drink = document.querySelector('drink');
var power = document.querySelector('power');
var weapon = document.querySelector('weapon');
var comments = document.querySelector('comments');

console.dir(firstName);

button.addEventListener('click', function(){
firstN();
})

function firstN(){
  if (firstName.value === ''){
    alert('Please Fill Out First Name');
  } else {
    information.firstName = firstName.value;
  }
}

console.log(information)
