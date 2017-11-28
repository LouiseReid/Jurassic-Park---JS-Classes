var assert = require("assert");
var Dino = require("../dino.js");

describe("Dino tests", function(){
  beforeEach(function(){
    dino = new Dino("TRex", 2);
  });

  it("should have a type", function(){
    assert.strictEqual(dino.type, "TRex")
  });
  it("should have a number of offspring per year", function(){
    assert.strictEqual(dino.offspring, 2)
  });


})
