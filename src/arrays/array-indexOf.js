const VOWELS = ['a', 'e', 'i', 'o', 'u'];
const CONSONANTS = ['b', 'c', 'd', 'f', 'g','h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
const NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const SYMBOL = ['~', '`', '!', '@', '$', '%', '^', '&', '*', '(', ')', '{', '}', '[', ']', '>', '<', '|', ':', ';', '+', '-', '/', '.', ','];
let justRandomLetters = ['b', 'a', 'k', 'p', 'o', 'u', 'l', 1, 5, 2, 'z', '+', '%', 'x'];

// predicate
let vowelOrCons = val => {
  // however, we can use Array.contains.
  // It's for the example of indexOf, so ...
  if (VOWELS.indexOf(val) >= 0) {
    return {
      val,
      type: 'vowel'
    };
  } else if (CONSONANTS.indexOf(val) >= 0) {
    return {
      val,
      type: 'consonant'
    }
  } else if (NUMBERS.indexOf(val) >= 0) {
    return {
      val,
      type: 'numbers',
    }
  } else if (SYMBOL.indexOf(val) >= 0) {
    return {
      val,
      type: 'symbol'
    }
  } else {
    return {
      val,
      type: 'unknown characters'
    }
  }
};

console.log(VOWELS.indexOf('a')); // if it has a index it will return > -1
console.log(VOWELS.indexOf('c')); // otherwise it will return -1


let randomLetterObjArr = justRandomLetters.map(vowelOrCons);
console.log(randomLetterObjArr);
