const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(nums) {
  let result = 0;
  for(let i=0; i<nums.length; i++){
    result += nums[i];
  }
  return result;
};

const multiply = function(...nums) {
  let result = 1;
  for(let i=0; i<nums.length; i++){
    result *= nums[i];
  }
  return result;
};

const power = function(base, power) {
  return Math.pow(base, power);
};

const factorial = function(num) {
  let result = 1;
  if(num != 0){
    for(let i=1; i<=num; i++){
      result *= i;
    }
  }

  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
