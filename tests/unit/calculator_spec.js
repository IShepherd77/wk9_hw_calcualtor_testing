var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

// doesn't call add directly
  // it('add 1 to 4 and get 5', function(){
  //   calculator.numberClick(4)
  //   calculator.operatorClick('+')
  //   calculator.numberClick(1)
  //   calculator.operatorClick('=')
  //   assert.equal(5, calculator.runningTotal)
  // })

  it('add 1 to 4 and get 5', function(){
    calculator.previousTotal = 4
    calculator.add(1)
    assert.equal(5, calculator.runningTotal)
  })

  it('subtract 4 from 7 and get 3', function(){
    calculator.previousTotal = 7
    calculator.subtract(4)
    assert.equal(3, calculator.runningTotal)
  })

  it('multiply 3 by 5 and get 15', function(){
    calculator.previousTotal = 3
    calculator.multiply(5)
    assert.equal(15, calculator.runningTotal)
  })

  it('divide 21 by 7 and get 3', function(){
    calculator.previousTotal = 21
    calculator.divide(7)
    assert.equal(3, calculator.runningTotal)
  })

  it('concatenate multiple number button clicks', function(){
    calculator.numberClick(1)
    calculator.numberClick(2)
    calculator.numberClick(3)
    assert.equal(123, calculator.runningTotal)
  })

  it('chain multiple operations together 3 * 2 + 1', function(){
    calculator.numberClick(3)
    calculator.operatorClick('*')
    calculator.numberClick(2)
    calculator.operatorClick('+')
    calculator.numberClick(1)
    calculator.operatorClick('=')
    assert.equal(7, calculator.runningTotal)
  })

  it('clear the running total without affecting the calculation 3 * 2 + 1 (correct 1 to 2) is 8', function(){
    calculator.numberClick(3)
    calculator.operatorClick('*')
    calculator.numberClick(2)
    calculator.operatorClick('+')
    calculator.numberClick(1)
    calculator.clearClick()
    calculator.numberClick(2)
    calculator.operatorClick('=')
    assert.equal(8, calculator.runningTotal)
  })

});
