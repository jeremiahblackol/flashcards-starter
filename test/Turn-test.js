/* eslint-disable max-len */
const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  }); 

  it('should have a guess', function() {
    const turn = new Turn('guess')
    expect(turn.guess).to.equal('guess');
  });  

  it('should have a card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('guess', card)
    expect(turn.currentCard).to.equal(card);
  });  

  it('should be able to return user\'s guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('guess', card)
    expect(turn.returnGuess).to.be.a('function');
    expect(turn.returnGuess()).to.equal('guess')
  });

  it('should be able to return user\'s card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('guess', card)
    expect(turn.returnCard).to.be.a('function');
    expect(turn.returnCard()).to.equal(card)
  });

  it('should be able to evaluate user\'s guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'guess');
    const turn = new Turn('guess', card)
    const turn2 = new Turn('guess', card2)
    expect(turn.evaluateGuess).to.be.a('function');
    expect(turn.evaluateGuess()).to.equal(false)
    expect(turn2.evaluateGuess()).to.equal(true)
  });

  it('should give feedback', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'guess');
    const turn = new Turn('dog', card)
    const turn2 = new Turn('guess', card2)
    expect(turn.giveFeedback).to.be.a('function');
    expect(turn.giveFeedback()).to.equal('incorrect!')
    expect(turn2.giveFeedback()).to.equal('correct!')
  });
});