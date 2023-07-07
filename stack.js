/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    if (this.size == 0) {
      const inp = new Node(val);
      this.first = inp;
      this.last = inp;
      this.size++;
    } else {
      const inp = new Node(val);
      inp.next = this.first;
      this.first = inp;
      this.size++;
    }
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    try {
      const secondNode = this.first.next;
      const ans = this.first.val;
      this.first = secondNode;
      this.size--;
      return ans;
    } catch (error) {
      throw error;
    }
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    try {
      const ans = this.first.val;
      return ans;
    } catch (error) {
      throw error;
    }
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    if (this.size == 0) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Stack;
