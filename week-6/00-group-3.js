/*
Exercise 3 — Build a Queue: TellerLine

Implement a TellerLine class that models customers waiting at a
bank teller window. Customers join at the back and are served
from the front (FIFO — First In, First Out).

Methods to implement:
  joinLine(customer)  — customer walks in and joins the back of the line
                        throws an Error if customer is not a non-empty string
  callNext()          — teller calls and removes the next customer from the front
  whoIsNext()         — see who is at the front without calling them
  isEmpty()           — return true if no customers are waiting
  lineLength()        — return how many people are waiting

Example:
  const line = new TellerLine();
  line.joinLine('Alice');
  line.joinLine('Bob');
  line.whoIsNext();   // 'Alice'
  line.callNext();    // 'Alice'
  line.whoIsNext();   // 'Bob'
  line.lineLength();  // 1

Discussion questions:
- What internal data structure are you using, and why?
- What is the Big-O of callNext() if you use array.shift()? Is there a way to do better?
- How does this compare to PancakeStack — what fundamentally changed?
- When might you prefer a queue over a stack in a real application?
*/

class TellerLine {
  constructor() {
    // Your setup here
    this._queue = [];
  }

  joinLine(customer) {
    // Your code here
    if (customer === "" || typeof customer !== "string") {
      throw new Error("customer is not a non-empty string");
    }
    this._queue.push(customer);
  }

  callNext() {
    // Your code here
    return this._queue.shift();
  }

  whoIsNext() {
    // Your code here
    return this._queue[0];
  }

  isEmpty() {
    // Your code here
    return this._queue.length === 0;
  }

  lineLength() {
    // Your code here
    return this._queue.length;
  }
}
