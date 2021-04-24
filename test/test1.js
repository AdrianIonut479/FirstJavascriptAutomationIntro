var assert = require('assert');
var assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should();

describe('Array', function() {
    
    var numbers = [1, 2, 3, 4, 5];
    describe('assert style', function() {
        it('assert==', function() {
            assert.isArray(numbers, 'is array of numbers');
            assert.include(numbers, 2, 'array contains 2');
            assert.lengthOf(numbers, 5, 'array contains 5 numbers');
        });
    });
    describe('expect style', function() {
        it('expect==', function() {
            expect(numbers).to.be.an('array').that.includes(2);
            expect(numbers).to.have.lengthOf(5);
        });
    });
    describe('should style', function() {
        it('should==', function() {
            numbers.should.be.an('array').that.includes(2);
            numbers.should.have.lengthOf(5);
        });
    });
 describe('.pop()', function () {
        it('should remove and return the last value', function () {
            var arr = [1, 2, 3];
            expect(arr.pop()).to.equal(3,'not the right value');
            expect(arr.pop()).to.equal(2);
            expect(arr).to.have.length(1);
        })
    })
});