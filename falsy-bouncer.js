function bouncer(arr) {
  return arr.filter(Boolean);
}

console.log(bouncer([7, "ate", "", false, 9]));

/* Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean. 

Code Explanation
The Array.prototype.filter method expects a function that returns a Boolean value which takes a single argument and returns true for truthy 2.7k value or false for falsy 4.3k value. Hence we pass the built-in Boolean function.

*/
