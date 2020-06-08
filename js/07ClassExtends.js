/**
 * Crée une class personne (nom prenom introduce())
 * crée une enseignant qui hérite de de personne en ajoutant une méthode (extend introduce() & diploma)
 * crée une enseignant spécialisé qui ne fait rien sur le constructeur mais introduit une nouvelle méthode enseigneJS
 */
(function(){

  
  /**
   * @param  {String} firstName
   * @param  {String} lastName
   */
  class Human{
    constructor(firstName, lastName){
      this.firstName = firstName;
      this.lastName = lastName;
    }

    introduce(){
      console.log(`Hi my name is ${this.firstName} ${this.lastName}`);
    }
    
  }

  /**
   * @param  {String} firstName
   * @param  {String} lastName
   * @param  {String} diploma
   */
  class Teacher extends Human {
      constructor(firstName, lastName,diploma = "bac +42"){
        super(firstName, lastName);
        this.diploma = diploma;
      }
      introduce(){
        super.introduce();
        console.log(`Im a teacher my diploma is ${this.diploma}`);
      }
  }

  class SpecialisedTeacher extends Teacher {
    teachJS(){
      console.log("I will teach you a lot of things about JavaScript");
    }
  }


  const human = new Human("bob", "marley");

  human.introduce();

  const teacher = new Teacher("yvan", "douenel");

  teacher.introduce();

  const jsTeacher = new SpecialisedTeacher("jean-bulle", "lockman", "bac+2");

  jsTeacher.introduce();
  jsTeacher.teachJS();

})();
