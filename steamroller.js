function steamrollArray(arr) {
  const finalArr = [];

  arr.forEach(item => {
    if (Array.isArray(item)) {
      // recursively call the func
      finalArr.push(...steamrollArray(item))
    } else {
      finalArr.push(item);
    }
  });

  return finalArr;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));

/* Steamroller
Flatten a nested array. You must account for varying levels of nesting. */
