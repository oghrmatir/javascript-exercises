const removeFromArray = function(arr, ...args) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!args.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
