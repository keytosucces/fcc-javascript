function largestOfFour(arr) {
  let maxArray = [];
  for (let x = 0; x < arr.length; x++) {
    let max = -Infinity;
    for (let y = 0; y < arr[x].length; y++) {
        if (arr[x][y] > max) {
          max = arr[x][y];
        }
    }
    maxArray.push(max);
  }
  return maxArray;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
