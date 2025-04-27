const sumAll = function(a, b) {
  if (a < 0 || b < 0) return "ERROR";
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    return "ERROR";
  }
  let total = 0;
  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
    total += i;
  }
  return total;
};

// Do not edit below this line
module.exports = sumAll;
