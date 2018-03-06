var cardNumbs = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
var cardSuits = ["Hearts", "Diamonds", "Clubs", "Spades"];
var dealtCards = [];
var random_card_numb = Math.floor(Math.random() * 13);
var random_card_suit = Math.floor(Math.random() * 4);
var random_card = cardNumbs[random_card_numb] + cardSuits[random_card_suit];

function Card(face_value, suit) {
    this.face_value = face_value;
    if (face_value >= 2 && face_value <= 10){
        this.card_number = face_value;
    }
    else if (face_value.toUpperCase() === "J") {
        this.card_number = 11;
    }
    else if (face_value.toUpperCase() === "Q") {
        this.card_number = 12;
    }
    else if (face_value.toUpperCase() === "K") {
        this.card_number = 13;
    }
    else if (face_value.toUpperCase() === "A") {
        this.card_number = 1;
    }
    this.image = "images/cards/" + face_value + suit[0] + ".png";
    this.suit = suit;
    
    if (this.card_number >= 11){
        this.pointValue = 10;
    }
    else if (this.card_number === 1) {
        this.pointValue = 11;
    }
    else {
        this.pointValue = this.card_number;
    }
}

function Hand() {
    this.cards = [];
    this.addCard = function(card) {
        this.cards.push(card);
    }
    this.getPoints = function() {
        var handPoints = 0
        for (x in this.cards) {
            handPoints += this.cards[x]["pointValue"]
        }
        return handPoints
    }
}

while (dealtCards.indexOf(random_card) > 0) {
    random_card_numb = Math.floor(Math.random() * 13);
    random_card_suit = Math.floor(Math.random() * 4);
    random_card = cardNumbs[random_card_numb] + cardSuits[random_card_suit];
}
dealtCards.push(random_card);

var myCard = new Card(cardNumbs[random_card_numb], cardSuits[random_card_suit]);
document.getElementById("my-card").innerHTML = myCard.face_value + " of " + myCard.suit + " Points: " + myCard.pointValue;
document.getElementById("card-image").src = myCard.image;

var myHand = new Hand();
myHand.addCard(new Card(5, "diamonds"));
myHand.addCard(new Card("A", 'spades'));

var myPoints = myHand.getPoints();
document.getElementById("hand-points").innerHTML = myPoints;
