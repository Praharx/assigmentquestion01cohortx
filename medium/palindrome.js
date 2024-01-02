/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) { 
  const newStr = str.replace(/\s/g, '').toLowerCase().replace(/[^a-z0-9]/g, '');
  const revStr = newStr.split('').reverse().join('');

  if (newStr === revStr){
    return true;
  }else{
    return false;
  }  
}

module.exports = isPalindrome;

