class Person {
    constructor(name) {
        this.name = name;
        this.friends = [];
    }
  
    addFriend(friend) {
        this.friends.push(friend)
    }
    
    createGreeting(other) {
        console.log("Yo " + other + "! from " + this.name + ".");
    }
    
    // These thises
    lazyGreet(other, name = this.name) {
        setTimeout(function() {
            console.log("Yo " + other + "! from " + name + ".")}, 2000);
    }
    
    // These thises 2
    createGreetingsForFriends(name = this.name) {
        var allGreetings = this.friends.map(function(friendName) {
            return ("Yo " + friendName + "! from " + name + ".");
        })
        console.log(allGreetings);
    }
}

var person = new Person("John");
person.addFriend("Bob");
person.addFriend("Henrique")

person.createGreeting("Bob");

// These thises
person.lazyGreet("Bob");

// These thises 2

person.createGreetingsForFriends();

