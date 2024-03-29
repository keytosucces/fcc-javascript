function smallestCommons(arr) {
  if (arr[0] > arr[1]) {
    const temp = arr[1];
    arr[1] = arr[0];
    arr[0] = temp;
  }

  const newArr = [];

  for (let x = arr[0]; x <= arr[1]; x++) {
    newArr.push(x);
  }

  const prod = newArr.reduce((acc, nr) => acc *= nr, 1);

  for ( let x = 1; x <= prod; x++) {
    const len = newArr.filter(nr => x % nr === 0).length;
    if (len === newArr.length) {
      return x;
    }
  }
  return prod;
}

console.log(smallestCommons([1,5]));

/* Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6. */
