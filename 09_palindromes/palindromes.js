// helper function
const reverseString = function (text) {
  let result = "";
  for(let i=text.length-1; i>=0; i--){
    result += text[i];
  }
  return result;
}
const palindromes = function (text) {
  let punctuation = /[^a-zA-Z0-9]+/g;
  text = text.toLowerCase();
  text = text.replaceAll(punctuation, '');
  let reversedText = reverseString(text);
  console.log(reversedText);
  if(reversedText == text) return true;
  else return false;
};

// Do not edit below this line
module.exports = palindromes;
