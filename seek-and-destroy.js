function destroyer(arr, ...rest) {
  return arr.filter(item => rest.indexOf(item) === -1);
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

/* You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1]

Note: You have to use the arguments object. */
