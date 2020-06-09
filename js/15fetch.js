"use strict";

fetch("http://www.coopernet.fr/rest/session/toke")
  //il crée une prommesse qu'on ne voit pas 
  .then(function(response) {
    if (response.status !== 200) { // si ça c'est mal passé
      throw new Error(`Le serveur n'a pas répondu correctement erreur ${response.status}`);
    } else return response.text(); // renvoie une promesse
  })
  .then(function(data) { // data correspond au retour du résolve (ici deux lignes au dessus)
    console.log("Token récupéré : ", data);
  })
  .catch(error => {console.log("Erreur attrapée : ", error)});