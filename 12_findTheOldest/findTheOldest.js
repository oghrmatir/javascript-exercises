const findTheOldest = function(people) {
  return people.sort((a, b) => {
    let ageA = 0;
    if (a.yearOfDeath === undefined) {
      ageA = (new Date()).getFullYear() - a.yearOfBirth;
    } else {
      ageA = a.yearOfDeath - a.yearOfBirth;
    }

    let ageB = 0;
    if (b.yearOfDeath === undefined) {
      ageB = (new Date()).getFullYear() - b.yearOfBirth;
    } else {
      ageB = b.yearOfDeath - b.yearOfBirth;
    }

    return ageA > ageB ? 1 : -1;
  }).at(-1);
};

// Do not edit below this line
module.exports = findTheOldest;
