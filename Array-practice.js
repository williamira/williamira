const multiDimensionalArr = [];

const arr1 = [];
const arr2 = [];
const arr3 = [];

arr1.push(1)
arr1.push(2)
arr1.push(3)
arr2.push(4)
arr2.push(5)
arr2.push(6)
arr3.push(7)
arr3.push(8)
arr3.push(9)

multiDimensionalArr.push(arr1, arr2, arr3);

console.log(multiDimensionalArr);

const sumOf = function (array) {
  let sum = 0;
  for (let subArr of array) {
    for (let num of subArr) {
  sum += num;
    }
  }
  return sum;
}
console.log(sumOf(multiDimensionalArr));