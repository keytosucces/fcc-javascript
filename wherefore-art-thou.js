function whatIsInAName(collection, source) {
  const arr = [];
  // Only change code below this line

collection.forEach(item => {
  let countK = 0;
  let countM = 0;
    for (let key in source) {
      countK++;
      if (item[key] && item[key] === source[key]) {
        countM++;
      }
}

  if (countK === countM) {
    arr.push(item);
  }
});
  // Only change code above this line
  return arr;
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));

/* Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument. 

should return [{ first: "Tybalt", last: "Capulet" }].

*/
