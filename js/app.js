// 1. Press "Play" button to shuffle (randomize) 52 cards
// deck of cards could be an array of objects, which each card being an object with keys related to suit, value, and image, and a card would be selected to be dealt by selecting a random number, that would represent the index of an object (card) in the array (deck)

// 2. Player makes a wager (by input field or pressing buttons representing pre-determined values) [event listeners]
//   a) check whether value of wager exceeds Player's available money
//   b) display Player's wager on layout (normally in front Player's bet, when there are multiple players)
//      i) save Player's bet in a variable (may be added to if Player doubles down, but any insurance bet will be saved in a separate variable, since they pay out at different odds)

// 3. the deal [function]
//   a) deal 1st card, face-up, to Player
//   b) deal 1st card, face-up, to Dealer
//   c) deal 2nd card, face-up, to Player
//   d) deal 2nd card, face-down, to Dealer
//      i) each hand represented by card values in an array, which will be added later to calculate hand values
//     ii) card values:
//          A) number cards: pip value (2, 3, 4, 5, 6, 7, 8, or 9)
//          B) face card: 10
//          C) aces: 1 or 11

// 3x. check for insurance (probably no time for this)
//   a) if Dealer's face-up card value is 10 or an Ace, then enable Insurance button, which when clicked adds an additional bet equal to half of Player's original bet (which will pay 2-to-1 if Dealer has blackjack)
//   b) save insurance bet in a separate variable, since it pays out at different odds than the initial bet)

// 4. Dealer checks hand for blackjack
//   a) if Dealer has blackjack:
//      i) reveal face-down card
//     ii) if Player does not have blackjack, Player loses bet (Game Over)
//     iv) if Player does have blackjack, Player's bet is returned ("push") (Push, Game Over)
//      v) any insurance bet is paid out to Player at 2:1 (Game Over)
//   b) if Dealer does not have blackjack:
//      i) if Player has a "natural" blackjack (hand value = 21 after deal), Player wins (Blackjack, Game Over)
//     ii) Player loses any insurance bet (move to Player's turn [call function])

// 5. Player's turn [event listeners and functions]
//   a) Stand
//      i) Player receives no additional cards, and it is Dealer's turn (move to Dealer's turn [call function])

//   b) Hit
//      i) Player receives an additional face-up card
//         A) if Player's new hand value > 21, Player busts (Player loses bet) (Lose, Game Over)
//         B) if Player's new hand value equals 21, Player automatically Stands (move to Dealer's turn [call function])
//         C) if Player doesn't bust, Player has option to Stand or Hit again (loop to Step 5 [for loop: while hand value < 21])

//   c) Split (future feature where hand is split into two hands if initial dealt cards are the same rank (card value, even if different face cards, since both are valued at 10), and Player bets an amount equal to the initial bet for the new hand; each hand is dealt an additional face-up card, and played separately starting at Step 5)

//   d) Double Down (only available after initial deal: disable button afterwards)
//      i) Player bets an amount equal to initial bet (that Player will win the hand with the next drawn card)
//     ii) Player is dealt an additional face-up card
//    iii) Player automatically Stands (move to Dealer's turn [call function])

//   e) Surrender (only available as Player's first option after deal: disabale button afterwards)
//      i) Player withdraws (Half of Player's bet is returned) (Surrender, Game Over)

// 6. Dealer's turn [function]
//   a) Dealer reveals face-down card
//   b) Dealer hits until hand value >= 17 (dealer must hit on 16)
//   c) If Dealer busts, Players wins (since she hasn't busted, and this is a one-player game) (Player's bet pays out at 1:1) (Win, Game Over)
//   d) If Dealer's hand value > Player's hand value, Player loses (Player loses bet) (Lose, Game Over)
//   e) If Dealer's hand value < Player's hand value, Player wins (Player's bet pays out at 1:1) (Win, Game Over)
//   f) If Dealer's hand value = Player's hand value, push (Player's bet is returned) (Push, Game Over)

// Return to Step 1 (press "Play" button to shuffle)

// Winning conditions:
// 1) 
//   a) Player is dealt a "natural" blackjack, AND
//   b) Dealer is not dealt a natural blackjack (Player's bet is paid out at 3:2)
//
// OR:
//
// 2)
//   a) Player doesn't bust (go over 21), AND
//   b) Player's hand outranks Dealer's hand OR Dealer busts
//
// Losing Conditions
//
// 1)
//   a) Dealer is dealt a "natural" blackjack, and Player is not dealt a natural blackjack (Player loses their initial bet, but an insurance bet is paid out 2:1 to Player)
//
// OR:
//
// 2) Player busts (Player loses their initial bet, and any insurance bet)
//
// OR:
//
// 3) Dealer's hand outranks Player's hand (Player loses their initial bet, and any insurance bet)
//
// Tying/"Pushing" Conditions
//
// 1) Player and Dealer have equal, un-busting hands (Player's bet is returned)

let bet = 0;
let playerBalance = 1000;
let dealerScore = 0;
let playerScore = 0;
let insuranceBet = 0;
let dealerHand = [];
let playerHand = [];
let cardBack = "url(./img/deck1.jpg)"
let deckOfCards = [
    {name: "2 of Hearts", value: 2, face: "./img/2Hearts.png"},
    {name: "3 of Hearts", value: 3, face: "./img/3Hearts.png"},
    {name: "4 of Hearts", value: 4, face: "./img/4Hearts.png"},
    {name: "5 of Hearts", value: 5, face: "./img/5Hearts.png"},
    {name: "6 of Hearts", value: 6, face: "./img/6Hearts.png"},
    {name: "7 of Hearts", value: 7, face: "./img/7Hearts.png"},
    {name: "8 of Hearts", value: 8, face: "./img/8Hearts.png"},
    {name: "9 of Hearts", value: 9, face: "./img/9Hearts.png"},
    {name: "10 of Hearts", value: 10, face: "./img/10Hearts.png"},
    {name: "Jack of Hearts", value: 10, face: "./img/jackHearts.png"},
    {name: "Queen of Hearts", value: 10, face: "./img/queenHearts.png"},
    {name: "King of Hearts", value: 10, face: "./img/kingHearts.png"},
    {name: "Ace of Hearts", value: 11, face: "./img/aceHearts.png"},
    {name: "2 of Spades", value: 2, face: "./img/2Spades.png"},
    {name: "3 of Spades", value: 3, face: "./img/3Spades.png"},
    {name: "4 of Spades", value: 4, face: "./img/4Spades.png"},
    {name: "5 of Spades", value: 5, face: "./img/5Spades.png"},
    {name: "6 of Spades", value: 6, face: "./img/6Spades.png"},
    {name: "7 of Spades", value: 7, face: "./img/7Spades.png"},
    {name: "8 of Spades", value: 8, face: "./img/8Spades.png"},
    {name: "9 of Spades", value: 9, face: "./img/9Spades.png"},
    {name: "10 of Spades", value: 10, face: "./img/10Spades.png"},
    {name: "Jack of Spades", value: 10, face: "./img/jackSpades.png"},
    {name: "Queen of Spades", value: 10, face: "./img/queenSpades.png"},
    {name: "King of Spades", value: 10, face: "./img/kingSpades.png"},
    {name: "Ace of Spades", value: 11, face: "./img/aceSpades.png"},
    {name: "2 of Diamonds", value: 2, face: "./img/2Diamonds.png"},
    {name: "3 of Diamonds", value: 3, face: "./img/3Diamonds.png"},
    {name: "4 of Diamonds", value: 4, face: "./img/4Diamonds.png"},
    {name: "5 of Diamonds", value: 5, face: "./img/5Diamonds.png"},
    {name: "6 of Diamonds", value: 6, face: "./img/6Diamonds.png"},
    {name: "7 of Diamonds", value: 7, face: "./img/7Diamonds.png"},
    {name: "8 of Diamonds", value: 8, face: "./img/8Diamonds.png"},
    {name: "9 of Diamonds", value: 9, face: "./img/9Diamonds.png"},
    {name: "10 of Diamonds", value: 10, face: "./img/10Diamonds.png"},
    {name: "Jack of Diamonds", value: 10, face: "./img/jackDiamonds.png"},
    {name: "Queen of Diamonds", value: 10, face: "./img/queenDiamonds.png"},
    {name: "King of Diamonds", value: 10, face: "./img/kingDiamonds.png"},
    {name: "Ace of Diamonds", value: 11, face: "./img/aceDiamonds.png"},
    {name: "2 of Clubs", value: 2, face: "./img/2Clubs.png"},
    {name: "3 of Clubs", value: 3, face: "./img/3Clubs.png"},
    {name: "4 of Clubs", value: 4, face: "./img/4Clubs.png"},
    {name: "5 of Clubs", value: 5, face: "./img/5Clubs.png"},
    {name: "6 of Clubs", value: 6, face: "./img/6Clubs.png"},
    {name: "7 of Clubs", value: 7, face: "./img/7Clubs.png"},
    {name: "8 of Clubs", value: 8, face: "./img/8Clubs.png"},
    {name: "9 of Clubs", value: 9, face: "./img/9Clubs.png"},
    {name: "10 of Clubs", value: 10, face: "./img/10Clubs.png"},
    {name: "Jack of Clubs", value: 10, face: "./img/jackClubs.png"},
    {name: "Queen of Clubs", value: 10, face: "./img/queenClubs.png"},
    {name: "King of Clubs", value: 10, face: "./img/kingClubs.png"},
    {name: "Ace of Clubs", value: 11, face: "./img/aceClubs.png"},
]

const getBetAmountFromPlayer = () => {
    currentBet = parseInt($("#bet").val())
    if (currentBet > playerBalance) {
        alert("Insufficient Funds!");
        $("#bet").val("");
        // $('.footer').show(0).delay(3000).hide(0);
    } else {
        console.log(playerBalance);
        console.log(currentBet);
        playerBalance = playerBalance - currentBet;
        $("#cash").text("$" + playerBalance);
        console.log(currentBet);
        return currentBet;
    }
};

const shuffle = () => {
    randomCard = deckOfCards[Math.floor(Math.random() * 51)];
    console.log(randomCard);
    return randomCard;
}

const dealCards = () => {
    $("#deal").hide();
    $("#hit").show();
    $("#stand").show();
    $("#doubleDown").show();
    $("dealerCard2").hide();
    $("dealerCard3").hide();
    $("dealerCard4").hide();
    $("playerCard2").hide();
    $("playerCard3").hide();
    $("playerCard4").hide();
    // shuffle deck of 52 cards (no Jokers)
    for (let i = 0; i < 2; i++) {
        playerHand[i] = shuffle();
        thisCard = "#playerCard" + i
        let cardFace = "url(" + playerHand[i].face + ")";
        $(thisCard).css("background", cardFace);
    }
    for (let i = 0; i < 2; i++) {
        dealerHand[i] = shuffle();
        thisCard = "#dealerCard" + i
        $(thisCard).css("background", dealerHand[i].face);
    }
    $(dealerCard0).css("background", cardBack);
};

const playerTurn = () => {
    return 
};

const dealerTurn = () => {
    return 
};

const hitPlayer = () => {
    $("insurance").hide();
    return 
};

const doubleDown = (initialBet) => {
    $("insurance").hide();
    return 
};

const split = () => {
    $("insurance").hide();
    return 
};

const insurance = () => {
    $("insurance").hide();
    return 
};

const surrender = () => {
    return 
};

// instead of separate functions for blackjack, win, lose, and push, I'll use an if statement that handles the payouts and changes the text [$(#result).text("Blackjack!")] of a pop-up message that announces the result

$(function() {
    // Listen for click events on "Deal" button
    $("#deal").click(function (event) {
        event.preventDefault();
        dealCards(getBetAmountFromPlayer());
    });

    // Listen for click events on "Hit" button
    $("#hit").click(function (event) {
        event.preventDefault();
        hitPlayer(getHandValue());
    });

    // Listen for click events on "Stand" button
    $("#stand").click(function (event) {
        event.preventDefault();
        dealerTurn();
    });

    // Listen for click events on "Double Down" button
    $("#doubleDown").click(function (event) {
        event.preventDefault();
        doubleDown(getBetAmountFromPlayer); // double down will call hit() and immediately call dealerTurn()
    });

    // Listen for click events on "Split" button
    $("#split").click(function (event) {
        event.preventDefault();
        split(playerHand); // where playerHand is an array of player's cards; likely no time for this feature
    });

    // Listen for click events on "Insurance" button
    $("#insurance").click(function (event) {
        event.preventDefault();
        insurance(getBetAmountFromPlayer); // will save new bet amount equal to half of current bet in new variable
    });

    // Listen for click events on "Surrender" button
    $("#surrender").click(function (event) {
        event.preventDefault();
        surrender(getBetAmountFromPlayer); // will return half of currentBet to player, then Game Over
    });

});