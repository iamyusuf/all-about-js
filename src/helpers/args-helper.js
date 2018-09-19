function check(args) {
  let actual = args.length;
  let expected = args.callee.length;
  if (actual !== expected) {
    throw new Error('Wrong number of argument. ' +
      'expected ' + expected + ' arguments, actually passed ' + actual + ' arguments')
  }
}

function f(x, y, z) {
  check(arguments);
  return x + y + z;
}

try {
  let summation = f(2, 3);
  console.log(summation);
} catch (e) {
  console.log(e.toString());
}