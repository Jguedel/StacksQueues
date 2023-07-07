/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    if (this.size == 0) {
      const inp = new Node(val);
      this.first = inp;
      this.last = inp;
      this.size++;
    } else {
      const inp = new Node(val);
      this.last.next = inp;
      this.last = inp;
      this.size++;
    }
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
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

  /** peek(): return the value of the first node in the queue. */

  peek() {
    try {
      const ans = this.first.val;
      return ans;
    } catch (error) {
      throw error;
    }
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    if (this.size == 0) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Queue;
