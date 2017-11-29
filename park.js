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
  calculateDinosaurs: function(years) {
    var totalDinos = 0;
    for(var dino of this.enclosure){
      totalDinos += (dino.offspring + 1) ** years;
    }
    return totalDinos
  }
}

module.exports = Park;
