"use strict";


(function(){

  const fruits = [
    "Banane",
    "Pomme",
    "Kiwi"
   ];

  console.table(fruits);

  console.log(`Nombre d'élément : ${fruits.length}`); 
  
  console.log(`Première élément : ${fruits[0]}`);

  console.log(`Dernier élément : ${fruits[fruits.length - 1]}`);

  //Ajouter un élément a un tableau : methode push

  fruits.push("Orange");
  console.table(fruits);

  //Retiré un élément 
  fruits.pop("Orange");
  console.table(fruits);

  //Trouver l'index du fruit "Pomme"

  const index_of_apple = fruits.indexOf("Pomme");
  console.log(`Index de la Pomme : ${index_of_apple}`);

  // méthode Map
  
  const array1 = [1, 2, 5, 12, 53];

  //Transformation du tablea en un nouveau tableau 
  const fruitUpper = fruits.map(function(fruits){

      return fruits.toUpperCase();
  })
  console.table(fruitUpper);
  console.table(fruits);

  fruits.push("Mangue");

  //Après avoir ajouter un élément au premier tableau, le second n'est pas modifier

  //Passage par référence ou par valeur ? 
  //Quand c'est un type primitif le passage ce fait par valeur 
  //Quand c'est un type avancer le passage ce fait par reference 


  const fruit_bis = fruits; //Réference

  fruits.push("Melon");
  console.log(`Fruit Bis : ${fruit_bis}`);

  let i = 10; //Valeur
  let j = i;
  i = 12;
  console.log(`j = ${j}`);


  //Méthode Filter fonction normal 
  const arrayFilteredNormal = fruits.filter(function(fruit){
    return fruit.length < 6;
  });

  console.table(arrayFilteredNormal);

  //Méthode Filter fonction fléchée
  const arrayFiltered = fruits.filter(fruit => fruit.length < 5 );

  console.table(arrayFiltered);

  //Transformation de la fonction map en fléchée
  const fruitUpperArrow = fruits.map(fruits => fruits.toUpperCase())
  console.log(fruitUpperArrow);
})();
