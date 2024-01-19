const pet = {
  hunger: 0,
  energy: 0,
  playfulness: 0,
  feed: function() {
   return pet.hunger += 1
  },
  sleep: function() {
   return pet.energy += 1
  },
  play: function() { 
   return pet.playfulness += 1
  },
  status: function() {
    return `Pet Status - Hunger:${pet.hunger} Energy:${pet.energy} Playfulness:${pet.playfulness}`;
  }
};
const updatedHunger = pet.feed();
const updatedEnergy = pet.sleep();
const updatedPlayfulness = pet.play();

console.log(pet.status());