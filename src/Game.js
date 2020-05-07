//initial commit

const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor() {
    this.currentRound = 0;
    this.currentRound;
  }

  start() {
    this.currentRound = this.makeRound()
    this.printMessage(this.makeDeck(), this.currentRound)
    this.printQuestion(this.currentRound) 

    /*
    invokes printMessage to display the message in the CLI
    invokes printQuestion to kick off our helper 
    -- functions that allow interaction via the CLI
    */
  }

  makeCards() {
    return prototypeQuestions.map((question) => {
      question = new Card (question.id, question.question, question.answers, question.correctAnswer)
      return question
    })
  }

  makeDeck() {
    let deck = new Deck(this.makeCards())
    return deck
  }

  makeRound() {
    let round = new Round(this.makeDeck())
    return round
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;