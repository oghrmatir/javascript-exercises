const palindromes = function (string) {
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    if (string.at(i) >= "a" && string.at(i) <= "z") {
      newString += string.at(i);
    } else if (string.at(i) >= "A" && string.at(i) <= "Z") {
      newString += string.at(i).toLowerCase();
    } else if (string.at(i) >= "0" && string.at(i) <= "9") {
      newString += string.at(i);
    }
  }
  for (let i = 0; i < newString.length; i++) {
    if (newString.at(i) !== newString.at(-1-i)) {
      return false;
    }
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
