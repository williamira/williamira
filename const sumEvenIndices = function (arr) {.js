const sumEvenIndices = function (arr) {
    let sum = 0
        for (let i = 0; i <= arr.length; i = i + 2) {
            sum += arr[i];
        }
        return sum;
  };
  
  console.log(sumEvenIndices([1, 2, 3, 4, 5, 6, 7]), sumEvenIndices([3, 6, 9, 100, 1]));