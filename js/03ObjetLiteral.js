"use strict";


(function(){

//Objet literal, plain object qui est a l'origine de la syntaxe json

  const personne1 = {
    lastName: "Dylan",
    firstName: "bob",
    age: 79,
    instroduceSelf: function() {
      console.log("Bonjour, je m'appelle" + this.firstName + "" + this.lastName);
    }
  }

})();