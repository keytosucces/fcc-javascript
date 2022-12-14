function rot13(str) {
  return str.replace(/[A-Z]/ig, (letter) => {
    // ascii value will just be called value
    let value = letter.charCodeAt(0) + 13;

    if (value > 90) {
      value = value % 90 + 64;
    }
    return String.fromCharCode(value)
  });
}

console.log(rot13("SERR PBQR PNZC"));

/* One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

 */
