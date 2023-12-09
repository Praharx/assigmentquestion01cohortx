/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const lowstr1 = str1.replace(/\s/g, '').toLowerCase();
  const lowstr2 = str2.replace(/\s/g, '').toLowerCase();
  console.log(lowstr1,lowstr2);
  
  if (lowstr1.length != lowstr2.length){
    return false;
  };

  firsts1 = lowstr1.split('').sort().join('');
  firsts2 = lowstr2.split('').sort().join('');

  if (firsts1 === firsts2){
    return true;
  } else{
    return false;
  }
};
  

module.exports = isAnagram;
