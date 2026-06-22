/*
Exercise 1 — Reverse an Array Using a Stack

Given an array of values, return a new array with the elements
in reversed order. You must use a stack (push / pop on a plain
JS array) to accomplish the reversal — do not use .reverse().

Examples:
  reverseArray([1, 2, 3, 4, 5]) → [5, 4, 3, 2, 1]
  reverseArray([])               → []
  reverseArray([42])             → [42]

Discussion questions:
- Why does a stack naturally reverse a sequence?
  - Using pop removes the items in the array from last to first, and
  using push adds those items in order into the new array
- What is the time complexity of your solution?
  - O(1)
- What is the space complexity?
  - O(1)
- How does using a stack compare to calling .reverse() directly?
  - .reverse() is O(1), does not require extra memory
*/

function reverseArray(arr) {
  // Your code here

  let arr2 = [];

  while (arr.length > 0) {
    let val = arr.pop();
    arr2.push(val);
  }
  return arr2;
}
