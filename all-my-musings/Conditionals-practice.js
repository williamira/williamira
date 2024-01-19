const judgeVegetable = function (vegetables, metric) {
  let highestVeg = 0;
  let winner = "";
  for (let vegetable of vegetables) {
    if (vegetable[metric] > highestVeg) {
      highestVeg = vegetable[metric]
      winner = vegetable.submitter
    }
  }
  return winner
}

const vegetables = [
  {
    submitter: "Old Man Franklin",
    redness: 10,
    plumpness: 5,
  },
  {
    submitter: "Sally Tomato-Grower",
    redness: 2,
    plumpness: 8,
  },
  {
    submitter: "Hamid Hamidson",
    redness: 4,
    plumpness: 3,
  },
];

const metric = "redness";

console.log(judgeVegetable(vegetables, metric));