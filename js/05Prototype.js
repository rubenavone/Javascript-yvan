"use strict";

/**
 * Protoype.
 * Modification de l'exercice 04 pour l'optimiser factoriser sont contenus
 * 
 */
(function(){

function Circle(radius, name){
  this.radius = radius;
  this.name = name; 
}
//Ici on ajoute une propriété au prototype de Object
//Object.prototype.pi = 3.14;

//Il vaut mieux le mettre dans le prototype de Circle

/**
 * Dès qu'il est possible de placé une propriété dans le prototype 
 * du constructeur il faut le faire pour factoriser/optimiser le code 
 */
Circle.prototype.pi = 3.14;

Circle.prototype.area =  function() {
  let area = this.pi * (Math.pow(this.radius, 2));
  console.log('Aire du cercle ' + this.name + " est égale à : " + area );
}

const circle1 = new Circle(2, "petit_cercle");
const circle2 = new Circle(4, "grand_cercle");
const circle3 = new Circle(2, "petit_cercle");

// circle1.area();
// circle2.area();
// circle3.area();

console.log(circle2)

if(circle1.area === circle2.area){
  console.log('les deux cercles on accès a la même propriété');
}else{
  console.log("false");
}


if(circle1.name === circle2.name){
  console.log('les deux cercles on accès a la même propriété');
}else{
  console.log("false");
}

})();
