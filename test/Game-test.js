const chai = require('chai');
const expect = chai.expect;


const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', function() {


  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function() {
    let game = new Game();
    expect(game).to.be.an.instanceOf(Game);
  });

  it('should know the current round', function() {
    let game = new Game();
    expect(game.currentRound).to.equal(0);
  });

  it('should be able to make cards', function() { 
    let game = new Game();
    expect(game.makeCards).to.be.a('function')
    expect(game.makeCards()).to.be.an('array')
  }); 

  it('should be able to make a deck', function() { 
    let game = new Game();
    expect(game.makeDeck()).to.be.an.instanceOf(Deck)
  }); 

  it('should be able to make a round', function() { 
    let game = new Game();
    expect(game.makeRound()).to.be.an.instanceOf(Round)
    expect(game.makeRound().deckLength).to.equal(30)
    game.start()
  }); 
});