var cards = ["images/cards/2c.png", "images/cards/2d.png", "images/cards/2h.png", "images/cards/2s.png",
             "images/cards/3c.png", "images/cards/3d.png", "images/cards/3h.png", "images/cards/3s.png",
             "images/cards/4c.png", "images/cards/4d.png", "images/cards/4h.png", "images/cards/4s.png",
             "images/cards/5c.png", "images/cards/5d.png", "images/cards/5h.png", "images/cards/5s.png",
             "images/cards/6c.png", "images/cards/6d.png", "images/cards/6h.png", "images/cards/6s.png",
             "images/cards/7c.png", "images/cards/7d.png", "images/cards/7h.png", "images/cards/7s.png",
             "images/cards/8c.png", "images/cards/8d.png", "images/cards/8h.png", "images/cards/8s.png",
             "images/cards/9c.png", "images/cards/9d.png", "images/cards/9h.png", "images/cards/9s.png",
             "images/cards/10c.png", "images/cards/10d.png", "images/cards/10h.png", "images/cards/10s.png",
             "images/cards/Jc.png", "images/cards/Jd.png", "images/cards/Jh.png", "images/cards/Js.png",
             "images/cards/Qc.png", "images/cards/Qd.png", "images/cards/Qh.png", "images/cards/Qs.png",
             "images/cards/Kc.png", "images/cards/Kd.png", "images/cards/Kh.png", "images/cards/Ks.png",
             "images/cards/Ac.png", "images/cards/Ad.png", "images/cards/Ah.png", "images/cards/As.png",
            ];

var cardPoints = 0;
var playerPoints = 0;
var dealerPoints = 0;
var playerSoftPoints = 0;   // for Aces
var dealerSoftPoints = 0;

var cardNumb = 2;
var messages = "";

var dealCards = true;
var hitCard = false;
var dealtCards = [];
var random_number = Math.floor(Math.random() * cards.length);
var betAmount = Number(document.getElementById("bet").value);
var playerCash = 500;
var dealerCash = 500;
var winner;
var pot = 0;

document.getElementById("player-cash").innerHTML = "Cash $" + playerCash;
document.getElementById("dealer-cash").innerHTML = "Cash $" + dealerCash;


function deal() {
    cardNumb = 2;
    // Adjusts bet to not exceed player or dealer cash
    betAmount = Number(document.getElementById("bet").value);
    if (betAmount > playerCash || betAmount > dealerCash) {
        betAmount = Math.min(playerCash, dealerCash);
        document.getElementById("bet").value = betAmount;
    }
    playerCash -= betAmount;
    dealerCash -= betAmount;
    document.getElementById("player-cash").innerHTML = "Cash $" + playerCash;
    document.getElementById("dealer-cash").innerHTML = "Cash $" + dealerCash;
    pot = betAmount * 2;
    document.getElementById("pot").innerHTML = "Pot - $" + pot;
    
    if (dealCards === true) {
        var currentPlayer = "player"
        var numb_cards_to_deal = 2;
        for (var j = 0; j < 2; j++){
            // deals for player on the first loop then deals dealer cards during second
            if (currentPlayer === "dealer") {
                numb_cards_to_deal = 1
            }
            for (var i = 0; i < numb_cards_to_deal; i++) {
                random_number = Math.floor(Math.random() * cards.length);
                // Checks if card was dealt and generates a new random number if it was
                while (dealtCards.indexOf(random_number) > 0) {
                    random_number = Math.floor(Math.random() * cards.length);
                }
                dealtCards.push(random_number);
                document.getElementById(currentPlayer + "-card" + i).src=cards[random_number];
                
                
                // Adds points based on image file number
                if (cards[random_number][13] === "A") {
                    cardPoints = 11;
                }
                else if (cards[random_number][13] === "K" || cards[random_number][13] === "Q" || cards[random_number][13] === "J" || cards[random_number][13] === "1") {
                    cardPoints = 10;
                }
                else {
                    cardPoints = Number(cards[random_number][13]);
                }
                if (currentPlayer == "player") {
                    playerPoints += cardPoints;
                    document.getElementById(currentPlayer + "-points").innerHTML = playerPoints;
                    if (cardPoints === 11) {
                        playerSoftPoints -= 10;
                    }
                    if (playerPoints > 21 && playerSoftPoints < 0) {
                    playerPoints -= 10;
                    playerSoftPoints += 10;
                    }
                    document.getElementById(currentPlayer + "-points").innerHTML = playerPoints;
                }
                else {
                    dealerPoints += cardPoints;
                    if (cardPoints === 11) {
                        dealerSoftPoints -= 10;
                    } 
                    document.getElementById(currentPlayer + "-points").innerHTML = dealerPoints;
                }
                document.getElementById("dealer-card1").src="images/cards/red_back.png";
                
                dealCards = false;
                hitCard = true;
                
                }
        currentPlayer = "dealer"
        }
    if (playerPoints === 21) {
            messages = "Blackjack!";
            document.getElementById("messages").innerHTML = messages;
            hitCard = false;
            setTimeout(blackjackOnDraw, 2000);
        }
        else {
            messages = "Hit or Stand?";
            document.getElementById("messages").innerHTML = messages;  
        }   
        document.getElementById("deal-button").style.visibility="hidden";
        document.getElementById("hit-button").style.visibility="visible";
        document.getElementById("stand-button").style.visibility="visible";
    }
}

function hit() {
    // Generate cards
    if (hitCard === true){
        var random_number = Math.floor(Math.random() * cards.length);
        while (dealtCards.indexOf(random_number) > 0) {
            random_number = Math.floor(Math.random() * cards.length);
        }
        dealtCards.push(random_number);
        document.getElementById("player-card" + cardNumb).src=cards[random_number];
        cardNumb += 1
    
        // Adds points based on image file number
        if (cards[random_number][13] === "A") {
            cardPoints = 11;
            playerSoftPoints -= 10;
        }
        else if (cards[random_number][13] === "K" || cards[random_number][13] === "Q" || cards[random_number][13] === "J" || cards[random_number][13] === "1") {
            cardPoints = 10;
        }
        else {
            cardPoints = Number(cards[random_number][13]);
        }
        playerPoints += cardPoints;
  
    if (playerPoints > 21 && playerSoftPoints < 0) {
        playerPoints -= 10;
        playerSoftPoints += 10
        // converts an Ace to 1 point
    }    
    document.getElementById("player-points").innerHTML = playerPoints;
    
    if (playerPoints > 21) {
        messages = "Bust. You lost $" + betAmount;
        document.getElementById("messages").innerHTML = messages;
        hitCard = false;
        winner = "Dealer";
        setTimeout(gameOver, 3500);
        }    
    }
}
function stand() {
    if (dealCards != true) {
        cardNumb = 1;
        hitCard = false;
        while (dealerPoints < 17) {
            var random_number = Math.floor(Math.random() * cards.length);
            while (dealtCards.indexOf(random_number) > 0) {
                random_number = Math.floor(Math.random() * cards.length);
            }
            dealtCards.push(random_number);
            document.getElementById("dealer-card" + cardNumb).src=cards[random_number];
            cardNumb += 1;

            if (cards[random_number][13] === "A") {
                cardPoints = 11;
                dealerSoftPoints -= 10;
            }
            else if (cards[random_number][13] === "K" || cards[random_number][13] === "Q" || cards[random_number][13] === "J" || cards[random_number][13] === "1") {
                cardPoints = 10;
            }
            else {
                cardPoints = Number(cards[random_number][13]);
            }
            dealerPoints += cardPoints;
            
            if (dealerPoints > 21 && dealerSoftPoints < 0) {
                dealerPoints -= 10;
                dealerSoftPoints += 10
            // converts an Ace to 1 point
    }    

            document.getElementById("dealer-points").innerHTML = dealerPoints;
        }
    }
    
    
    
    document.getElementById("player-points").innerHTML = playerPoints;
    
    if (dealerPoints > 21) {
        messages = "Dealer bust. You win $" + betAmount + "!";
        winner = "Player";
    }
    else if (dealerPoints < playerPoints) {
        messages = "You win $" + betAmount + "!";
        winner = "Player";
    }
    else if (dealerPoints > playerPoints) {
        messages = "You lost $" + betAmount;
        winner = "Dealer";
    }
    else if (dealerPoints === playerPoints) {
        messages = "Push";
        winner = "None";
        playerCash += betAmount;
        dealerCash += betAmount
    }
    document.getElementById("messages").innerHTML = messages;
    setTimeout(gameOver, 3500);
}

function blackjackOnDraw() {
        random_number = Math.floor(Math.random() * cards.length);
        while (dealtCards.indexOf(random_number) > 0) {
            random_number = Math.floor(Math.random() * cards.length);
        }
        //dealtCards.push(random_number);
        document.getElementById("dealer-card1").src=cards[random_number];
        
        if (cards[random_number][13] === "A") {
            cardPoints = 11;
        }
        else if (cards[random_number][13] === "K" || cards[random_number][13] === "Q" || cards[random_number][13] === "J" || cards[random_number][13] === "1") {
            cardPoints = 10;
        }
        else {
            cardPoints = Number(cards[random_number][13]);
        }    
        dealerPoints += cardPoints
        document.getElementById("dealer-points").innerHTML = dealerPoints
        if (dealerPoints === 21) {
            messages = "Push";
        }
        else {
            messages = "Blackjack! You won $" + betAmount + "!";
            winner = "Player";
        }
    document.getElementById("messages").innerHTML = messages;
    
    setTimeout(gameOver, 3500);
}

function increaseBet() {
    if (dealCards === true && betAmount < playerCash) {
        betAmount = Number(document.getElementById("bet").value);
        betAmount += 1;
        document.getElementById("bet").value = betAmount;
    }
}

function decreaseBet() {
    if (betAmount > 5 && dealCards === true) {
        betAmount = Number(document.getElementById("bet").value);
        betAmount -= 1;
        document.getElementById("bet").value = betAmount;
    }
    if (betAmount > playerCash) {
        document.getElementById("bet").value = playerCash;
    }
}

function gameOver() {
    // adds bet amount to winner
    if (winner === "Player") {
        playerCash += pot;
    }
    else if (winner === "Dealer") {
        dealerCash += pot;
    }
    pot = 0;
    
    document.getElementById("player-cash").innerHTML = "Cash $" + playerCash;
    document.getElementById("dealer-cash").innerHTML = "Cash $" + dealerCash;
    document.getElementById("pot").innerHTML = "Pot - $" + pot;
    
    if (playerCash > 0 && dealerCash > 0) {
    
        cardNumb = 0
        while (cardNumb < 6) {
            document.getElementById("player-card" + cardNumb).src="";
            document.getElementById("dealer-card" + cardNumb).src="";
            cardNumb += 1;
        // reset all variables
        playerPoints = 0;
        dealerPoints = 0;
        document.getElementById("player-points").innerHTML = playerPoints;
        document.getElementById("dealer-points").innerHTML = dealerPoints;
        dealCards = true;
        messages = "Place bet and click deal to play another hand";
        //document.getElementById("messages").innerHTML = messages;
        document.getElementById("deal-button").style.visibility="visible";
        document.getElementById("hit-button").style.visibility="hidden";
        document.getElementById("stand-button").style.visibility="hidden";
        playerSoftPoints = 0;
        dealerSoftPoints = 0;
            
        dealtCards = [];
        }
    
    }
    else if (dealerCash === 0) {
        messages = "Congratulations, you won all the dealers money!"
        document.getElementById("hit-button").style.visibility="hidden";
        document.getElementById("stand-button").style.visibility="hidden";
    }
    else if (playerCash === 0) {
        messages = "You lost all your money. Game Over"
        document.getElementById("hit-button").style.visibility="hidden";
        document.getElementById("stand-button").style.visibility="hidden";
    }
    document.getElementById("messages").innerHTML = messages;
    
}