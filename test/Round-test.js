const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Round = require('../src/Round');

describe('Round', function() {

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() { 
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round).to.be.an.instanceof(Round);
  }); 

  it('should store cards', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round (deck)
    expect(round.deck.cards).to.deep.equal([card1, card2, card3]);
  });  

  it('should return the current card', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round (deck)
    const turn = new Turn('guess', round.returnCurrentCard())
    expect(round.returnCurrentCard).to.be.a('function')
    expect(round.returnCurrentCard()).to.equal(turn.currentCard)
  }); 
  
  it('should be able to take a turn', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round (deck)
    //remember I have to return current card to get to the first turn
    expect(round.takeTurn).to.be.a('function')
    expect(round.takeTurn('sea otter')).to.equal('correct!')
    expect(round.takeTurn('horse shoe')).to.equal('incorrect!')
  });

  it('should be able to return the percentage of correct answers', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const card4 = new Card(26, 'Favorite color', ['red', 'blue', 'green'], 'blue')
    const card5 = new Card(88, 'Favorite Rapper', ['3000', 'Jay-Z', 'Tupac'], '3000')
    const deck = new Deck([card1, card2, card3, card4, card5]);
    const round = new Round (deck)
    round.takeTurn('dog')
    round.takeTurn('tooth')
    round.takeTurn('Fitzgerald')
    round.takeTurn('blue')
    round.takeTurn('3000')
    expect(round.calculatePercentCorrect()).to.equal(60)
  });

  it('should be able to end the round', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const card4 = new Card(26, 'Favorite color', ['red', 'blue', 'green'], 'blue')
    const card5 = new Card(88, 'Favorite Rapper', ['3000', 'Jay-Z', 'Tupac'], '3000')
    const deck = new Deck([card1, card2, card3, card4, card5]);
    const round = new Round (deck)
    round.takeTurn('dog')
    round.takeTurn('tooth')
    round.takeTurn('Fitzgerald')
    round.takeTurn('blue')
    round.takeTurn('3000')
    expect(round.endRound()).to.equal('** Round over! ** You answered 60% of the questions correctly!')
  });
});