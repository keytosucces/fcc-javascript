function titleCase(str) {
  return str.split(' ').map(elem => elem[0].toUpperCase() + elem.slice(1).toLowerCase()).join(" ");
}

console.log(titleCase("I'm a little tea pot"));

/* Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like the and of. */
