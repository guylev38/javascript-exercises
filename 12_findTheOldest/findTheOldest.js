const getAge = function(person){
  if(!person['yearOfDeath']){
    return new Date().getFullYear() - person['yearOfBirth'];
    
  }
  return person['yearOfDeath'] - person['yearOfBirth'];
}


const findTheOldest = function(people) {
  let oldest = people[0];
  people.forEach(person => {
    let oldestAge = getAge(oldest);
    let currentAge = getAge(person);
    if(currentAge > oldestAge) oldest = person;
  });
  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
