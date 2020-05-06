const Turn = require('../src/Turn');
const Deck = require('../src/Deck');

class Round {
  constructor(deck) {
    this.turns = 0;
    this.deck = deck;
    this.incorrectGuesses = [];
    this.currentCard;
    this.turn;
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
    //this.deck = new Deck (this.deck.cards)
    console.log(this.deck)
    // calculatePercentCorrect: method that 
    //calculates and returns the percentage of 
    //correct guesses
  }

//   endRound() {
//     // endRound: method that prints the following to the console: ‘** Round over! ** You answered <>% of the questions correctly!’
}

module.exports = Round;

// // Your Round class will be the 
// //object that takes in responses and 
// //records these guesses 
// //(as well as if they are correct or incorrect). 
// //The currentCard should be the first Card 
// //in the Deck (the array of Cards) at the 
// //start of the Round

// // Your Round class should meet the following requirements:

// // When a guess is made, a new Turn instance 
// //is created.


// // The turns count is updated, 
// //regardless of whether the guess is correct 
// //or incorrect


// // The next card becomes current card


// // Guess is evaluated/recorded. 
// //Incorrect guesses will be stored (via the id) 
// //in an array of incorrectGuesses


// // Feedback is returned regarding whether the guess 
// //is incorrect or correct


// // For example:

// // const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
// // const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
// // const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

// // const deck = new Deck([card1, card2, card3]);

// // const round = new Round(deck);





// // round.turns; // => 0


// // round.takeTurn('sea otter'); // => 'correct!'

// // round.takeTurn('spleen');   // => 'incorrect!'

// // round.turns; // => 2

// // round.incorrectGuesses;     // => [14]

// // round.returnCurrentCard();    // => { id: 12,
// //             	              //      question: 'What is Travis\'s favorite stress reliever?',
// //             	              //      answers: ['listening to music', 'watching Netflix', 'playing with bubble wrap'],
// //             	              //      correctAnswer: 'playing with bubble wrap'
// //             	              //    }

// // round.calculatePercentCorrect(); // => 50