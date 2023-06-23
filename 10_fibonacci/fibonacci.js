const fibonacci = function(count) {
  if(count < 0) return "OOPS";
  let fibArr = [0,1];
  for(let i=1; i<count; i++){
    fibArr.push(fibArr[i] + fibArr[i-1]);
  }
  return fibArr[count];
};


// Do not edit below this line
module.exports = fibonacci;
