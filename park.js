var Park = function() {
  this.enclosure = []
}

Park.prototype = {
  addDino: function(dino) {
    this.enclosure.push(dino);
  },
  removeDinos: function(type){
    for(dinos of this.enclosure){
      if(dino.type === type){
        this.enclosure.splice(dino.type, 1)
      }
    }
  },
  offspringDinos: function(){
    dinosaurs = []
    for(dinos of this.enclosure){
      if(dinos.offspring > 2){
        dinosaurs.push(dinos.type)
      }
    }
    return dinosaurs;
  },
  dinosInParkAfter1: function(){
    noDinos = 0
    for(dinos of this.enclosure){
      noDinos += dinos.offspring;
      noDinos += this.enclosure.length;
    }
    return noDinos;
  },
  dinosInParkAfter2: function(){
    noDinos = this.dinosInParkAfter1();
    noDinos *= 2;
    noDinos -= 1;
    return noDinos;
  }
}

module.exports = Park;
