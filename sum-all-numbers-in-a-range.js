function sumAll(arr) {
  const sortArr = arr.sort(compareFunction);

  let sum = 0;

  for (let x = sortArr[0]; x <= sortArr[1]; x++) {
      sum += x;
  }

  return sum;
}

const compareFunction = (a, b) => { return a - b };

console.log(sumAll([1, 4]));

/* We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

 */
