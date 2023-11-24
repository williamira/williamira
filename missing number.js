const findMissingNumber = function(arr) {
  for (let num = 0; num < arr.length; num++) {
    let diff = arr[num + 1] - arr[num];
        if (diff > 1) {
        return (arr[num] + 1);
    } 
  }
};

console.log(
    findMissingNumber([1, 2, 3, 4, 6, 7, 8, 9, 10]),
    findMissingNumber([100, 101, 102, 103, 105, 106, 107]),
  findMissingNumber([-3, -2, -1, 1, 2, 3])
);