// Inheritance

var mom = {
  firstName: 'Alice',
  lastName: 'Wong',
  eyeColor: 'brown',
  hairColor: 'black'
};
var daughter = {
  firstName: 'Ilene',
  hairColor: 'brown'
};

function Mom() {
    this.firstName = "Alice";
    this.lastName = "Wong";
    this.eyeColor = "brown";
    this.hairColor = "black";
    this.showInfo = function () {
        return ("Name: " + this.firstName + " Last: " + this.lastName + " Eye Color: " + this.eyeColor + " Hair Color: " + this.hairColor);
    }
}

function Daughter() {
    Mom.call(this);
    
    this.firstName = "Ilene";
    this.hairColor = "brown";
}

//Inheritance one
console.log("Inheritance One");
var ilene = new Daughter();
console.log(ilene)

//Inheritance two
console.log("Inheritance Two");
var alice = new Mom();
console.log(alice.showInfo());
console.log(ilene.showInfo());
