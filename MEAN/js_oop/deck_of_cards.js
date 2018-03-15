class Deck{
    constructor(){
        this.reset()
    }
    reset(){
        this.deckOfCards = [
            {'name': 'A_clubs', 'value': 11, 'img': 'A\u2665' },
            {'name': '2_clubs', 'value': 2, 'img': '2\u2660' },
            {'name': '3_clubs', 'value': 3, 'img': '3\u2660' },
            {'name': '4_clubs', 'value': 4, 'img': '4\u2660' },
            {'name': '5_clubs', 'value': 5, 'img': '5\u2660' },
            {'name': '6_clubs', 'value': 6, 'img': '6\u2660' },
            {'name': '7_clubs', 'value': 7, 'img': '7\u2660' },
            {'name': '8_clubs', 'value': 8, 'img': '8\u2660' },
            {'name': '9_clubs', 'value': 9, 'img': '9\u2660' },
            {'name': '10_clubs', 'value': 10, 'img': '10\u2660' },
            {'name': 'J_clubs', 'value': 10, 'img': 'J\u2660' },
            {'name': 'Q_clubs', 'value': 10, 'img': 'Q\u2660' },
            {'name': 'K_clubs', 'value': 10, 'img': 'K\u2660' },
            {'name': 'A_hearts', 'value': 11, 'img': 'A\u2665' },
            {'name': '2_hearts', 'value': 2, 'img': '2\u2665' },
            {'name': '3_hearts', 'value': 3, 'img': '3\u2665' },
            {'name': '4_hearts', 'value': 4, 'img': '4\u2665' },
            {'name': '5_hearts', 'value': 5, 'img': '5\u2665' },
            {'name': '6_hearts', 'value': 6, 'img': '6\u2665' },
            {'name': '7_hearts', 'value': 7, 'img': '7\u2665' },
            {'name': '8_hearts', 'value': 8, 'img': '8\u2665' },
            {'name': '9_hearts', 'value': 9, 'img': '9\u2665' },
            {'name': '10_hearts', 'value': 10, 'img': '10\u2665' },
            {'name': 'J_hearts', 'value': 10, 'img': 'J\u2665' },
            {'name': 'Q_hearts', 'value': 10, 'img': 'Q\u2665' },
            {'name': 'K_hearts', 'value': 10, 'img': 'K\u2665' },
            {'name': 'A_spades', 'value': 11, 'img': 'A\u2663' },
            {'name': '2_spades', 'value': 2, 'img': '2\u2663' },
            {'name': '3_spades', 'value': 3, 'img': '3\u2663' },
            {'name': '4_spades', 'value': 4, 'img': '4\u2663' },
            {'name': '5_spades', 'value': 5, 'img': '5\u2663' },
            {'name': '6_spades', 'value': 6, 'img': '6\u2663' },
            {'name': '7_spades', 'value': 7, 'img': '7\u2663' },
            {'name': '8_spades', 'value': 8, 'img': '8\u2663' },
            {'name': '9_spades', 'value': 9, 'img': '9\u2663' },
            {'name': '10_spades', 'value': 10, 'img': '10\u2663' },
            {'name': 'J_spades', 'value': 10, 'img': 'J\u2663' },
            {'name': 'Q_spades', 'value': 10, 'img': 'Q\u2663' },
            {'name': 'K_spades', 'value': 10, 'img': 'K\u2663' },
            {'name': 'A_diamonds', 'value': 11, 'img': 'A\u2666' },
            {'name': '2_diamonds', 'value': 2, 'img': '2\u2666' },
            {'name': '3_diamonds', 'value': 3, 'img': '3\u2666' },
            {'name': '4_diamonds', 'value': 4, 'img': '4\u2666' },
            {'name': '5_diamonds', 'value': 5, 'img': '5\u2666' },
            {'name': '6_diamonds', 'value': 6, 'img': '6\u2666' },
            {'name': '7_diamonds', 'value': 7, 'img': '7\u2666' },
            {'name': '8_diamonds', 'value': 8, 'img': '8\u2666' },
            {'name': '9_diamonds', 'value': 9, 'img': '9\u2666' },
            {'name': '10_diamonds', 'value': 10, 'img': '10\u2666' },
            {'name': 'J_diamonds', 'value': 10, 'img': 'J\u2666' },
            {'name': 'Q_diamonds', 'value': 10, 'img': 'Q\u2666' },
            {'name': 'K_diamonds', 'value': 10, 'img': 'K\u2666' }
        ]
    }
    deal(){
        var cardInd = Math.floor(Math.random() * this.deckOfCards.length);
        var card = this.deckOfCards[cardInd]
        this.deckOfCards.splice(cardInd, 1);
        return card;
    }
    shuffle(){
        var m = this.deckOfCards.length, temp, i;
        // While there remain elements to shuffle…
        while (m) {
            // Pick a remaining element…
            i = Math.floor(Math.random() * m--);
            // And swap it with the current element.
            temp = this.deckOfCards[m];
            this.deckOfCards[m] = this.deckOfCards[i];
            this.deckOfCards[i] = temp;
        }
    }
}    

class Player{
    constructor(name, deck){
        this.name = name
        this.deck = deck
        this.hand = []
        this.score = 0
    }
    takeCard(num){
        for (var i = 0; i < num; i++){
        var newCard = this.deck.deal()
        if ((this.score + newCard['value'] > 21)&&(newCard['value']==11)){
            newCard['value']=1
        }
        this.score += newCard['value']
        this.hand.push(newCard)
        }
    }
    discard(){
        this.hand = []
        this.score = 0
    }
}

var CardDeck = new Deck()
var dealer = new Player("Dealer", CardDeck)
var player

var rl = require("readline");
var prompts = rl.createInterface(process.stdin, process.stdout);

function newGame(){
    CardDeck.reset()
    CardDeck.shuffle()
    dealer.discard()
    player.discard()
    dealer.takeCard(2);
    player.takeCard(2);
    if (player.score == 21){
        if (dealer.score == 21){
            console.log(">> Dealer: " + dealer.hand[0].img + " | " + dealer.hand[0].img + "--- Score: " + dealer.score + "\n>> " + player.name + ": " + player.hand[0].img + " | "+ player.hand[1].img + " --- Score: " + player.score)
            prompts.question(">> Push! Play again? [Y/N]\n", function (answer) {
                if (answer == "Y"){
                    newGame();
                }
                else {
                    console.log(">> Bye!")
                    process.exit();
                }
            });
        }
        else{
            console.log(">> Dealer: " + dealer.hand[0].img + " | " + dealer.hand[0].img + "--- Score: " + dealer.score + "\n>> " + player.name + ": " + player.hand[0].img + " | "+ player.hand[1].img + " --- Score: " + player.score)
            prompts.question(">> Blackjack! You win! Play again? [Y/N]\n", function (answer) {
                if (answer == "Y"){
                    newGame();
                }
                else {
                    console.log(">> Bye!")
                    process.exit();
                }
            });
        }
    }
    else {
        console.log(">> Dealer: " + dealer.hand[0].img + " | X\n>> " + player.name + ": " + player.hand[0].img + " | "+ player.hand[1].img + " --- Score: " + player.score)
    }
    prompts.question(">> What's next? [hit/stand/new_game/exit]\n", function (answer) {
        if (answer == "hit"){
            hit()
        }
        else if (answer == "stand"){
            stand()
        }
        else if (answer == "new_game"){
            newGame();
        }
        else if (answer == "exit") {
            console.log(">> Bye!")
            process.exit();
        }
    });
}
function hit(){
    player.takeCard(1)
    var result = ">> Dealer: " + dealer.hand[0].img + " | X\n>> " + player.name + ": "
    for (each in player.hand){
        result += player.hand[each].img + " | "
    }
    result = result.slice(0, result.length - 3)
    result += " --- Score: " + player.score
    console.log(result)
    if (player.score > 21){
            prompts.question(">> Bust! Would you like to start the new game? [Y/N]\n", function (answer) {
                if (answer == "N"){
                    console.log(">> Bye!")
                    process.exit();
                }
                else if (answer == "Y"){
                    newGame()
                }
            })
        }
    else {
        prompts.question(">> What's next? [hit/stand/new_game/exit]\n", function (answer) {
            if (answer == "hit"){
                hit()
            }
            else if (answer == "stand"){
                stand()
            }
            else if (answer == "new_game"){
                newGame();
            }
            else if (answer == "exit") {
                console.log(">> Bye!")
                process.exit();
            }
        });
    }
}
function stand(){
    while (dealer.score < 17){
        dealer.takeCard(1)
    }
    var result = ">> Dealer: "
    for (each in dealer.hand){
        result += dealer.hand[each].img + " | "
    }
    result = result.slice(0, result.length-3)
    result += " --- Score: " + dealer.score + "\n>> " + player.name + ": "
    for (each in player.hand){
        result += player.hand[each].img + " | "
    }
    result = result.slice(0, result.length-3)
    result += " --- Score: " + player.score
    console.log(result)
    if ((dealer.score < player.score)||(dealer.score>21)){
        prompts.question(">> You win! Would you like to start the new game? [Y/N]\n", function (answer) {
            if (answer == "N"){
                console.log(">> Bye!")
                process.exit();
            }
            else if (answer == "Y"){
                newGame()
            }
        })
    }
    else if (dealer.score == player.score){
        prompts.question(">> Push! Would you like to start the new game? [Y/N]\n", function (answer) {
            if (answer == "N"){
                console.log(">> Bye!")
                process.exit();
            }
            else if (answer == "Y"){
                newGame()
            }
        })
    }
    else {
        prompts.question(">> You lose! Would you like to start the new game? [Y/N]\n", function (answer) {
            if (answer == "N"){
                console.log(">> Bye!")
                process.exit();
            }
            else if (answer == "Y"){
                newGame()
            }
        });
    }
}

prompts.question(">> What's your name?\n", function (name) {
    player = new Player(name, CardDeck);
    console.log(">> Welcome, " + player.name + "!");
    prompts.question(">> Would you like to start the new game? [Y/N]\n", function (answer) {
        if (answer == "N"){
            console.log(">> Bye!")
            process.exit();
        }
        else if (answer == "Y"){
            newGame()
        }
    })
});
