function Person(name, email, phone) {
  this.name = name;
  this.email = email;
  this.phone = phone;
}

Person.prototype.greet = function(other) {
  return ("Hello " + other.name + ", I am " + this.name + "!");
};

// # 1 and 2
var Sonny = new Person("Sonny", "sonny@hotmail.com", "483-485-4948");
var Jordan = new Person("Jordan", "jordan@aol.com", "495-586-3456");

// # 3
sonnyGreeting = Sonny.greet(Jordan);

document.getElementById("sonny-greet-jordan").innerHTML = sonnyGreeting;

// # 4

jordanGreeting = Jordan.greet(Sonny);

document.getElementById("jordan-greet-sonny").innerHTML = jordanGreeting;

// # 5

sonnyContactInfo = "Email: " + Sonny.email + " Phone: " + Sonny.phone;

document.getElementById("sonny-contact-info").innerHTML = sonnyContactInfo;

// # 6

jordanContactInfo = "Email: " + Jordan.email + " Phone: " + Jordan.phone;

document.getElementById("jordan-contact-info").innerHTML = jordanContactInfo;