const should = require('chai').should()
const { assert } = require('chai')

const name = 'liu xiong hui'
const age = 30

describe('String', () => {
  it('should to be a string', () => {
    name.should.to.be.a('string')
  });
  it('age is number', () => {
    assert.typeOf(age, 'number')
  });
});

