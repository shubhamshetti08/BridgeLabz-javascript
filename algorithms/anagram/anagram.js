/********************************************************************************************************************
* @Execution : default node : cmd> anagram.js
* @Purpose : to study the algorithms.
* @description : One string is an anagram of another if the second is simply a rearrangement of the first. For example, 'abcd' and 'DCab' are anagrams.
* @overview : cheking strings are anagrams or not.
* @author : SHUBHAM A S <shubhamshetti08gmail.com>
* @version : 1.0
* @since : 08-August-2019
*******************************************************************************************************************/
let read = require('readline-sync');
let reference = require('../anagram/angramBL.js');
let s1 = "cdCAab";
let s2 = "acbac";
let result = reference.anagram(s1, s2);
if (result == true) {
    console.log('string is anagram');
}
else {
    console.log('string is not anagram');
}