



(function(){

  //Les fonctions asynchrone attendent en argument une fonction c'est donc une high order function
  //Elle permet de décaler dans le temp l'execution d'une action 
  // Cela va nous permettre d'introduire la notion de "fil d'éxécution" ou thread. Pour comprendre cette notion, on fait souvent la 
  // comparaison avec un serveur dans un restaurant : lorsque vous commandez, le serveur part en cuisine, passe la commande et retourne 
  // en salle pour prendre d'autres commandes. On comprend que la commande est "non bloquante" ou asynchrone, c'est à dire que le serveur 
  // n'a pas besoin d'attendre que le plat soit prêt pour continuer son travail. Quand votre plat sera prêt, c'est toujours le même 
  // serveur qui vous servira votre plat. On dit alors que le service est mono-thread en opposition à muti-thread.
  // Il en est  de même pour le javascript classique qui est mono-thread, ce qui signifie qu'il n'y a qu'une seule pile d'exécution.

  console.log('avant');

  /**
   * Elle affichera un message 
   */
  setTimeout( () => {
    console.log('affiché après 2 secondes');
  },2000); //2OOO ms plus tard soit 2 seconde

  console.log("après");

  const h1 = window.document.getElementById("h1");

  h1.onclick = event => {
    console.log("Tu a cliqué sur moi !");
    console.log(event.target);
   
    event.preventDefault(); //Supprime le comportement par défaut (ici le chargement de page)
  
    //L'utilisation dans le cas de react permet de ne pas recharger la page pour mettre à jour les données 
  
    //this
    console.log( `this : ${this}`);
    console.log("this :" + this);
  };

  //DOM document objet model 
  //document.getElementById
  //document.querySelector
  //document.querySelectorAll

  //evenement





//Dans un constructeur
  function Test(msg) {

    this.msg;

    h1.onclick = event => {
      console.log("Tu a cliqué sur moi !");
      console.log(event.target);
    
  
      event.preventDefault(); //Supprime le comportement par défaut (ici le chargement de page)
  
      //L'utilisation dans le cas de react permet de ne pas recharger la page pour mettre à jour les données 
  
      //this
      console.log( `this : ${this}`);
      console.log("this :", this);

    }
  }

const t = new Test('msg');

  //La fonction fléchée donne a this une valeur en fonction du contexte dans lequelles elle est crée 
  //Dans le cas du constructeur le contexte va etre l'instance en cours du constructeur 
})();