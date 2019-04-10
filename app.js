// 1. Press "Play" button to shuffle (randomize) 52 cards

// 2. Player makes a wager (by input field or pressing buttons representing pre-determined values) [event listeners]
//   a) check whether value of wager exceeds Player's available money
//   b) display Player's wager on layout (normally in front Player's bet, when there are multiple players)
//      i) save Player's bet in a variable (may be added to if Player doubles down, but any insurance bet will be saved in a separate variable, since they pay out at different odds)

// 3. the deal [function]
//   a) deal 1st card, face-up, to Player
//   b) deal 1st card, face-up, to Dealer
//   c) deal 2nd card, face-up, to Player
//   d) deal 2nd card, face-down, to Player
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
//      i) Player loses any insurance bet (move to Player's turn [call function])

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