function translatePigLatin(str) {
  const regex = /^([^aeiou]+)(.*)/;
  
  if (regex.test(str)) {
    str = str.replace(regex, '$2$1ay')
  } else {
    str += 'way';
  }
  return str;
}

translatePigLatin("consonant");

/* Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase. 

translatePigLatin("california") should return the string aliforniacay.
*/
