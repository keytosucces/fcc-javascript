function fearNotLetter(str) {
  const arr = str.split('')
  .map(letter => letter.charCodeAt(0));

for (let x = 0; x < arr.length - 1; x++) {
  if (arr[x] + 1 !== arr[x + 1]) {
    return String.fromCharCode(arr[x] + 1)
  }
}
  return undefined;
}

console.log(fearNotLetter("abce"));

/* Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined. */
