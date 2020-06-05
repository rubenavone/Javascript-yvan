"use strict";
(function(){
  console.log("Hello World!")
  //lors de la creation d'un constructeur on met une majuscule
  //Declaration de la fonction constructeur
  function Card(question, answer){
      //Les propriétés de l'objet
      this.question = question;
      this.answer = answer;

      

      //getter de question
      this.getQuestion = function(){

        return this.question;
      }

      this.getAnswer = function(){
        return  this.answer;
      }
      
      console.log(this)
  }

const card1 = new Card("La terre est ronde ?", "oui");

// console.log(card1.getQuestion());
// console.log(card1.getAnswer());
console.log(card1)

})();

(()=>{})();