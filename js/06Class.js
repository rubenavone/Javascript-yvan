"use strict";

(function(){

  class Circle{
    constructor(radius, name){
      this.radius = radius;
      this.name = name; 
    }

      pi() { 
        return 3.14;
      }

      area() {
        let area = this.pi() * (Math.pow(this.radius, 2));
        console.log('Aire du cercle ' + this.name + " est égale à : " + area );
      }
    }

const circle1 = new Circle(2, "petit_cercle");
const circle2 = new Circle(4, "grand_cercle");
const circle3 = new Circle(2, "petit_cercle");

circle1.area();
circle2.area();
circle3.area();

})();