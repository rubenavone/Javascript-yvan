"use strict";

(()=>{

  const jc = {
    nom: "Dusse",
    prenom: "Jean-Claude",
    sePresenter: function(){
      console.log("Bonjour, je m'apelle" + this.prenom +" " + this.nom);
    }
  }
//Utilisation de la boucle for in
//En JS, les objets sont des tableau associatif 

for(let key in jc){
  //SI la valeur est une fonction on l'appelle
  console.log(typeof(jc[key])) //pour chaque proprité on va afficher dans la console sont typeof
  if(typeof(jc[key]) === 'function'){ 
    jc[key]();
  } else { //Sinon, on affiche la clé et la valeur de la propriété
    console.log("clé : ", key + " valeur : " + jc[key]);
  }
}

const hero = ["Harry", "Hermione", "Ron", "Voldemore"];
  let taille = hero.length;

  for (var i = 0; i < taille; i++) {
    console.log(hero[i]);
  }

  console.log("i =", i );

  Object.prototype.type = function(){
    return typeof(this);
  }
  console.log(jc.type())
})(); //Appel de fonction