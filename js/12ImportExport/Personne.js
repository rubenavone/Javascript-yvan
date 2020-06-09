"use strict";

export  class Person {
    constructor(name) {
      this.name = name;
    }

    introduceSelf() {
      console.log(`Bonjour je m'appelle: ${this.name}`)
    }

}

Object.prototype.test = "hola";

