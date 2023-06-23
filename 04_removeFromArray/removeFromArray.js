const removeFromArray = function(array, ...num) {
  let result = array.filter((element) => {
    if(!num.includes(element)) return element;
  });

  return result;
};

// Do not edit below this line
module.exports = removeFromArray;
