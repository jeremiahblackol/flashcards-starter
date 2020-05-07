/* eslint-disable max-len */
/* eslint-disable no-console */
const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.turns = 0;
    this.deck = deck;
    this.incorrectGuesses = [];
    this.currentCard;
    this.turn;
    this.deckLength = deck.countCards()
  }

  returnCurrentCard() {
    this.currentCard = this.deck.cards[0]
    return this.currentCard                           
  }

  takeTurn(guess) {
    this.returnCurrentCard();
    this.turn = new Turn (guess, this.currentCard)
    this.turn.returnCard();
    this.turn.evaluateGuess();
    this.deck.cards.splice(0, 1);
    this.turns++
    
    if (this.turn.giveFeedback() === 'correct!') {
      return this.turn.giveFeedback()

    } else {
      this.incorrectGuesses.push(this.turn.currentCard.id)
      return this.turn.giveFeedback()
    }
  }

  calculatePercentCorrect() {
    return Math.floor(100 - ((this.incorrectGuesses.length / this.deckLength) * 100))
  }

  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
  }
}

module.exports = Round;

