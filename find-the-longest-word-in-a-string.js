function findLongestWordLength(str) {
  let max = 0;

  const arr = str.split(" ");
  for (let x=0; x<arr.length; x++) {
    if (arr[x].length > max) {
      max = arr[x].length;
    }
  }
  return max;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
