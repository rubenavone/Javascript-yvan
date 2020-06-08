"use strict";

// const z = "hello"

// console.log(z)

// function helloAlcohol(firstName , alcohol){
  
//   return "hello " + firstName;
// }

// console.log(helloAlcohol("Bob", "Ricard"));

// {
//   let j = 12;
//   console.log(j);
// }


// let i = 1;

// //Contexte d'execution
// function a(){
//   let j = 2
//   b();
//   function b(){
//     {
//       let k = 3;
//       console.log(k)
//     }
//     let l = 4;
//     console.log(l)
    
//   }
// }

// a();



//Fonction anonyme immédiate IIFES

(function(){
  let msg = "";
    //Creation d'une arrow function
    const hello = () => {
    console.log("hello");
    }
  
    const helloYou = (firstName) => {
      console.log("hello " + firstName);
      }

    const helloTwo = firstName => "Hello " + firstName;

  
    /**
     * @param  {lastName} //Waiting for a name
     * @return //Une phrase avec lastName 
     */
    const helloLast = lastName => msg + "((nom de famille " + lastName + ")";
    //Fonction qui renvoie une autre function high order function
    const helloThree = firstName => {
      msg = "Hello " + firstName;
      return helloLast;
    }
      // hello();
      // helloYou("john");
    console.log(helloThree("bob")("dylan"));
})(); //Appel de la fonction 


(function(){
  const button = document.getElementById("test");
  console.log(button);

  //gestion des evenement
  button.onclick = log => {
    let count = 1;
    button.textContent = count;
  }
  /**
   * @param  {} myFunction //High order function, fonction qui prend une fonction en paramètre
   *                       
   */
  function test(myFunction){
    console.log("type de toto :", typeof(myFunction)) // output fonction
    console.log(myFunction); //output test(function() {console.log("test")})
    console.log(typeof myFunction);
    myFunction(); // appel de la fonction
  };

  test(function() {console.log("test")})

})();
// Exercice 

// (function(){
//   //code ICI
//   console.log("Hello dans l'IIFES")
//   var i = 3;
// }());

// console.log(i);

console.log("/////////////////////////////////////////////////")
console.log("/////////////////////////////////////////////////")
console.log("/////////////////////////////////////////////////")
console.log("/////////////////////////////////////////////////")
