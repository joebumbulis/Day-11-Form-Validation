console.log('Hello World')
//when the user clicks the submit button- runs a function to test to so if their input is validates
//if invalid - alert with generic 'fill out ore info'
//else - return the info into an object
//console.log the object


var information = {};

var firstName = document.querySelector('#firstName');
var lastName = document.querySelector('#lastName');
var emailAddress = document.querySelector('emailAddress');
var countrySelection = document.querySelector('country2');
var biography = document.querySelector('biography');
var phoneNumber = document.querySelector('phoneNumber');
var affiliations = document.querySelector('affiliations');
var occupation = document.querySelector('occupation');
var catName = document.querySelector('catName');
var favgadget = document.querySelector('favgadget');
var talent = document.querySelector('talent');
var favDrink = document.querySelector('drink');
var favPower = document.querySelector('power');
var weapon = document.querySelector('weapon');
var comments = document.querySelector('comments');
var button = document.querySelector('#button');

button.addEventListener('click', function(){
firstN();
last();
email();
country();
bio();
phone();
aff();
occ();
cat();
gadget();
tal();
drink();
power();
weap();
comm();
})

function firstN(){
  if (firstName.value === ''){
    alert('Please Fill Out First Name');
  } else {
    information.firstName = firstName.value;
  }
}
function last(){
  if (lastName.value === ''){
    alert('Please Fill Out Last Name');
  } else {
    information.lastName = lastName.value;
  }
}
function email(){
  if (emailAddress.value === ''){
    alert('Please Fill Out Email Address');
  } else {
    information.emailAddress = emailAddress.value;
  }
}
function country(){
  if (countrySelection.value === ''){
    alert('Please Select a Country');
  } else {
    information.countrySelection = countrySelection.value;
  }
}
function bio(){
  if (biography.value === ''){
    alert('Please Provide a bit of Biography');
  } else {
    information.biography = biography.value;
  }
}
function phone(){
  if (phoneNumber.value === ''){
    alert('Please Leave your Number');
  } else {
    information.phoneNumber = phoneNumber.value;
  }
}
function aff(){
  if (affiliations.value === ''){
    alert('Please Fill Out Affiliations');
  } else {
    information.affiliations = affiliations.value;
  }
}
function occ(){
  if (occupation.value === ''){
    alert('Please Fill Out Occupation');
  } else {
    information.occupation = occupation.value;
  }
}
function cat(){
  if (catName.value === ''){
    alert('Please Fill Out Your Cat\'s Name');
  } else {
    information.catName = catName.value;
  }
}
function gadget(){
  if (favgadget.value === ''){
    alert('Please Fill Out Your Favorite Gadget');
  } else {
    information.favgadget = favgadget.value;
  }
}
function tal(){
  if (talent.value === ''){
    alert('Please Fill Out Special Talents');
  } else {
    information.talent = talent.value;
  }
}
function drink(){
  if (favDrink.value === ''){
    alert('Please Fill Out Favorite Drink');
  } else {
    information.favDrink = favDrink.value;
  }
}
function power(){
  if (favPower.value === ''){
    alert('Please Fill Out Special Power');
  } else {
    information.favPower = favPower.value;
  }
}
function weap(){
  if (weapon.value === ''){
    alert('Please Fill Your Weapon of Choice');
  } else {
    information.weapon = weapon.value;
  }
}
function comm(){
  if (comments.value === ''){
    alert('Please leave a Comment');
  } else {
    information.comments = comments.value;
  }
}

console.log(information)
