const fibonacci = function(n) {
  if (+n < 0) {
    return "OOPS";
  } else if (+n === 1) {
    return 1;
  } else if (+n === 2) {
    return 1;
  }

  let fib1 = 1;
  let fib2 = 1;

  let result = 0;

  for (let i = 2; i < +n; i++) {
    result = fib1 + fib2;
    fib1 = fib2;
    fib2 = result;
  }

  return result;
};

// Do not edit below this line
module.exports = fibonacci;
