/*
Exercise 2 — Build a Stack: PancakeStack

Implement a PancakeStack class that models a stack of pancakes
on a plate. Pancakes are always added and eaten from the top
(LIFO — Last In, First Out).

Methods to implement:
  addPancake(flavor) — place a pancake on top of the stack
  eatPancake()       — remove and return the top pancake
  topPancake()       — peek at the top pancake without removing it
  isEmpty()          — return true if no pancakes remain
  size()             — return how many pancakes are stacked

Example:
  const plate = new PancakeStack();
  plate.addPancake('blueberry');
  plate.addPancake('chocolate chip');
  plate.topPancake();  // 'chocolate chip'
  plate.eatPancake();  // 'chocolate chip'
  plate.topPancake();  // 'blueberry'
  plate.size();        // 1

Discussion questions:
- What internal data structure are you using, and why?
- What is the Big-O of each method?
- What happens if someone calls eatPancake() when the plate is empty?
- How would the implementation change if you used a linked list instead?
*/

class PancakeStack {
  constructor() {
    // Your setup here
    this._stack = [];
  }

  addPancake(flavor) {
    // Your code here
    this._stack.push(flavor);
  }

  eatPancake() {
    // Your code here
    return this._stack.pop();
  }

  topPancake() {
    // Your code here
    return this._stack[this._stack.length - 1];
  }

  isEmpty() {
    // Your code here
    return this._stack.length === 0;
  }

  size() {
    // Your code here
    return this._stack.length;
  }
}
