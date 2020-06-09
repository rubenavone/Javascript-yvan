"use strict";

/**
 * XmlHttpRequest permet de faire des requete sur des fichier distatnt
 * 
 * code requete http
 * 200 Tout va bien
 * 404 le fichier demandé n'existe pas
 * 500 erreur d'execution du serveur, un classique lors d'un problème d"xecution de script php par exemple
 *  
 */

//  const req = new XMLHttpRequest();

//  req.open('GET', 'http://www.neore.fr/mon_fichier.txt');

//  req.send(null);

//  const request = function(event) {

//   if(event.lengthComputable) {
//     console.log(`Volume de donnée total : ${event.total}`);
//     console.log(`Volume de données actuelle : ${event.send}`);
//   }
//  }

import Xhr from  "./Xhr.js";
let data = [];

const newXhr = new Xhr("http://127.0.0.1:5500/js/js/json/user.json", successGetData, failGetData);
 
function successGetData(data) {
    data = data;
}

function failGetData(msg) {
  console.log(msg);
}