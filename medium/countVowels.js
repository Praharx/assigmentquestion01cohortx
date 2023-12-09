/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  const vowels = "aeiuoAEIOU";
  let count = 0;

  for(let i=0;i<str.length;i++){
    curr = str[i];
    if (vowels.indexOf(curr) !== -1){
      count++;
    }
  }
  return count;

}

module.exports = countVowels;