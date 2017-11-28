var assert = require("assert");
var Dino = require("../dino.js");
var Park = require("../park.js");

describe("Park tests", function(){
  beforeEach(function(){
    park = new Park();
    dino1 = new Dino("TRex", 2);
    dino2 = new Dino("Raptor", 4);
    dino3 = new Dino("TRex", 1);
    dino4 = new Dino("Triceratop", 3);
  });
  it("should have an enclosure that starts empty", function(){
    assert.strictEqual(park.enclosure.length, 0)
  });
  it("should be able to add a dinosaur", function(){
    park.addDino(dino1);
    assert.strictEqual(park.enclosure.length, 1)
  });
  it("should be able to remove all dinosaurs of a particular type", function(){
    park.addDino(dino1);
    park.addDino(dino2);
    park.addDino(dino3);
    park.removeDinos("TRex");
    assert.strictEqual(park.enclosure.length, 1)
  });
  it("should get all dinos with an offspring count of more than 2", function(){
    park.addDino(dino2);
    park.addDino(dino3);
    park.addDino(dino4);
    assert.deepStrictEqual(park.offspringDinos(), ["Raptor", "Triceratop"])
  });
  it("should be able to calculate number of dinosaurs after year one, starting with 1 dinosaur", function(){
    park.addDino(dino1);
    assert.strictEqual(park.dinosInParkAfter1(), 3)
  });
  it("should be able to calculate number of dinosaurs after year two, starting with 1 dinosaur", function(){
    park.addDino(dino1);
    assert.strictEqual(park.dinosInParkAfter2(), 5)
  });
  it("should be able to calculate number of dinosaurs after year two, starting with 2 dinosaurs", function(){
    park.addDino(dino1);
    park.addDino(dino2);
    assert.strictEqual(park.dinosInParkAfter2(), 14)
  })

})
