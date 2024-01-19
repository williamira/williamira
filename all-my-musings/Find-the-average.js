const average = function(arr) {
sum = 0
  for (let i of arr) {
    sum += i;
  }
  return (sum / arr.length)
};

console.log(
  average([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
  average([1000, -1000, 50, -999]),
  average([1, 2, 3])
);