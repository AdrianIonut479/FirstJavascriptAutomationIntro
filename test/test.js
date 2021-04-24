var assert = require('assert');
var assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should();

var testObj = {
   name:"test",
   sub:{
      name:'test sub'
   },
   numbers:[1,2,3,4],
   hasNumbers: true
}

describe('Test Suite',function(){

beforeEach ( ()=>{
   console.log('Test has started')
})
describe('expect tests',function(){
   it('should be a valid expect testObject',function(){
      expect(testObj).to.be.an('object').and.is.ok
      expect(testObj).to.have.property('sub').that.is.an('object').and.is.ok
      expect(testObj).to.have.property('numbers').that.deep.equals([1,2,3,4])
      expect(testObj).to.have.property('hasNumbers',true)
   })
})

describe('assert test',function(){
   it('should be a valid assert testObject',function(){
      assert.isOk(testObj)
      assert.isObject(testObj)
      assert.property(testObj,'name','test')
      assert.property(testObj,'sub')
     // assert.deepEqual(testObj.numbers,[1,2,3,4])
      assert.deepStrictEqual(testObj.numbers,[1,2,3,4])
      assert.typeOf(testObj.hasNumbers,'boolean')

   })
})

afterEach ( () => {
   console.log('Test has finished')
})

})