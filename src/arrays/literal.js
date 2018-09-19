let a = [1, true, 'abc'];
let b = [a[0], a[0] * 2, f(x)];

function check(args) {
  let actual = args.length;
  let expected = args.callee.length;
  if (actual !== expected) {
    throw new Error('Wrong number of argument.' +
      '-expected' + expected + ' arguments got ' + actual + ' arguments')
  }
}

function f(x, y, z) {
  check(arguments);
  return x + y + z;
}

