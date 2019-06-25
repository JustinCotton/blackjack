# Blackjack Card Game
## Overview

Blackjack card game created with HTML, CSS, JS, and jQuery.

![Screenshot](https://github.com/JustinCotton/blackjack/blob/master/BlackjackScreenshot.JPG)

**Live site:** <https://justincotton.github.io/blackjack/>

## Technologies Used

  * Languages: HTML5, CSS3, Javascript, jQuery
  * Design: Google Fonts
  * Project Planning & User Stories: [Trello](https://trello.com/b/51TjK5Yf/sei21)
  * Visual Studio Code
  * Git, Github, Github Pages


## Features

  * Deal, Hit, and Stand buttons
  * Wagering
  * Shuffled (randomized) deck
  * Modeled on real-world Blackjack rules and gameflow


## Wireframe / Whiteboarding

![Wireframe](https://github.com/JustinCotton/blackjack/blob/master/BlackjackWireframe.png)

![Whiteboarding](https://github.com/JustinCotton/blackjack/blob/master/BlackjackWhiteboard.png)

## Winning Conditions

   * Player is dealt a "natural" blackjack, AND
   Dealer is not dealt a natural blackjack (Player's bet is paid out at 3:2), OR
   
   * Player doesn't bust (hand value < 21), AND Player's hand outranks Dealer's hand (Player's bet is paid out at 1:1), OR  
   
   * Dealer busts (Player's bet is paid out at 1:1)

## Losing Conditions

   * Dealer is dealt a "natural" blackjack, and Player is not dealt a natural blackjack (Player loses her bet), OR
   
   * Dealer's hand outranks Player's hand (Player loses her bet), OR  
   
   * Player busts (Player loses her bet)

## Tying/"Pushing" Conditions

   * Player and Dealer have equal, un-busting hands, including Blackjacks (Player's bet is returned)

## Future Development

  * Add Split, Double Down, Surrender, and Insurance functionality
  * Add betting chips to UI instead of inputting dollar amounts
  * Make application responsive
  * Add multiplayer functionality
  * Music, card flip and deal sound effects
  * Card and win/lose/push/blackjack notice animations
  