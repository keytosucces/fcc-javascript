function dropElements(arr, func) {
  const index = arr.findIndex(func);
  return  (index === -1) ? [] : arr.slice(index);
}

console.log(dropElements([1, 2, 3], function(n) {return n < 3; }));

/* Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array. */
