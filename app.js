// 1. shuffle (randomize) 52 cards

// 2. Player makes a wager (by input field or pressing buttons representing pre-determined values)
//   a) check whether value of wager exceeds Player's available money
//   b) display Player's wager on layout (normally in front Player's bet, when there are multiple players)

// 3. the deal
//   a) deal 1st card, face-up, to Player
//   b) deal 1st card, face-up, to Dealer
//   c) deal 2nd card, face-up, to Player
//   d) deal 2nd card, face-down, to Player

// 3x. check for insurance (probably no time for this)
//   a) if Dealer's face-up card value is 10 or an Ace, then enable Insurance button, which when clicked adds an additional bet equal to half of Player's original bet (which will pay 2-to-1 if Dealer has blackjack)

// 4. Dealer checks hand for blackjack
//   a) if Dealer has blackjack:
//      i) reveal face-down card
//     ii) if Player does not have blackjack, Player loses bet (Game Over)
//     iv) if Player does have blackjack, Player's bet is returned ("push") (Game Over)
//      v) any insurance bet is paid out to Player at 2:1 (Game Over)
//   b) if Dealer does not have blackjack:
//      i) Player loses any insurance bet

// 5. Player's turn
//   a) Stand
//      i) Player receives no additional cards, and it is Dealer's turn
//   b) Hit
//      i) Player receives an additional card
//         A) if Player busts, Player loses (Player loses bet) (Game Over)
//         B) if Player doesn't bust, Player has option to Stand or Hit again (loop to Step 5)
//   c) Split (future feature where hand is split into two hands if initial dealt cards are the same number value, or same face value, and Player bets an amount equal to the initial bet for the new hand; each hand is dealt an additional face-up card, and played separately starting at Step 5)
//   d) Double Down
//      i) Player bets an amount equal to initial bet that Player will win the hand with the next drawn card
//   e) Surrender
//      i) Player withdraws (Half of Player's bet is returned)

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