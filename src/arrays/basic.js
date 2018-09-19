const MAX_SIZE = 100;
let fruits = new Array(MAX_SIZE);
// console.log(fruits.length);

let flowers = ['rose', 'belly', 'jasmin', 'tulip', 'orchid'];
// console.log(flowers);

// flowers.forEach( value => console.log(value));

let twoItem = new Array(2);
try {
  twoItem.push('one');
  twoItem.push('two');
  twoItem.push('three');
  twoItem.push('four');
} catch (error) {
  console.log(error.message);
}
