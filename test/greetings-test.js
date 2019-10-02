const assert = require('assert');

const Greetings = require('../greetings-route');


describe("Greetings",function(){
    it("Should return names and greet also in English ",function(){
        var greetMe = Greetings();
        greetMe.greet("axola");
        assert.equal(1 ,  greetMe.count()); 
    })

    it("Should return names and greet also in Isixhosa", function(){
   var greetName = Greetings();
        greetName.greet("Sipho");
        assert.equal(1,  greetName.count());
    })
    
    it("Should return names and greet also in Afrikaans", function(){
        var nameGreeted = Greetings();
        nameGreeted.greet("Nola");
        assert.equal(1,  nameGreeted.count());
         })
    it("Should return names that is given to test in any languages", function(){
        var nameTest = Greetings();
        nameTest.greet("Zikhona");
        assert.equal(1,  nameTest.count());
    })
    it("Should return count when you great in different names", function(){
        var nameGreeted = Greetings();
        nameGreeted.greet("Zikho");
        nameGreeted.greet("Phelo");
        nameGreeted.greet("Mandy");

        assert.equal(3,  nameGreeted.count());
         })
 })