let numbers = [2, 4, 8, 20, 40, 22, 34, 64, 86, 12, 24, 36, 48];
let isEven = num => num % 2 === 0;
// Array.every will return only true if the predicate is true for every element
let isEvenList = numbers.every(isEven);
if (isEvenList) {
  console.log("It's a list of even numbers " + numbers);
} else {
  console.log("Sometimes things are not even. what can you do?")
}

