"use strict";

//On peut faire un export par défault 

import {Person} from "./Personne.js";
import store from "./createStore.js";

const p1 = new Person("bob");

console.log(p1);

console.log(`store.state : ${store.getState()}`);
console.table(` le code ? ${store}`);

/**
 * Web 2.0 avènement des réseaux sociaux ou l'utilisateur participe a la vie du site
 * et la mises en place de ajax et du dynamisme des page 
 */

 