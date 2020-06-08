"use strict";
/*
Créer un constructeur de cercle qui a pour propriétés :

    "rayon" en mètre qui sera définie à l'instanciation de chaque cercle
    "nom" qui permettra de donner un nom à chaque cercle et qui sera définie à l'instanciation également de chaque cercle
    "Pi" qui sera définie une seule fois (puisque c'est une constante - 3.14)
    aire() qui affichera dans la console l'aire ( pi X rayon²)

puis instancier 2 cercles qui ont respectivement pour rayon : 2 et 4 mètres et pour nom petit_cercle et grand_cercle.

*/

(function(){


function Circle(radius, name){

  this.radius = radius;
  this.name = name;
  this.pi = 3.14;

  this.area = function() {
    let area = this.pi * (Math.pow(this.radius, 2));
    console.log('Aire du cercle ' + this.name + " est égale à : " + area );
  }
}

const circle1 = new Circle(2, "petit_cercle");
const circle2 = new Circle(4, "grand_cercle");

circle1.area();
circle2.area();

})();