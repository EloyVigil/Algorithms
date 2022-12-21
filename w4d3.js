class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

/**
 * Class to represent a queue using an array to store the queued items.
 * Follows a FIFO (First In First Out) order where new items are added to the
 * back and items are removed from the front.
 */
class Queue {
    constructor() {
        this.front = null;
        this.rear = null;

    }

    /**
   * Returns whether or not this queue is empty.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {boolean}
   */
    isEmpty() {
        return this.front === null
    }

    /**
   * Retrieves the first item without removing it.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {any} The first item or undefined if empty.
   */
    getFront() {
        if (!this.front) return null
        return this.front
    }

    /**
   * Adds a new given item to the back of this queue.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @param {any} item The new item to add to the back.
   * @returns {number} The new size of this queue.
   */
    enqueue(newNode) {
        if (!this.rear) {
            this.front = newNode
            this.rear = newNode
        } else {
            this.rear.next = newNode
            this.rear = newNode
        }
    }


    /**
     * Removes and returns the first item of this queue.
     * - Time: O(n) linear, due to having to shift all the remaining items to
     *    the left after removing first elem.
     * - Space: O(1) constant.
     * @returns {any} The first item or undefined if empty.
     */
    dequeue() {
        if (!this.front) return
        this.front = this.front.next
    }

    // bonus
    /**
   * Check if the target value exists in the queue using the basic queue operations
   * @returns {Boolean } 
   */
    contains(targetVal) {
        var q2 = new Queue();
        var foundVal = false;

        while (this.front) {
            if (this.front.data == targetVal) {
                foundVal = true;
            }
            q2.enqueue(this.dequeue());
        }

        while (q2.front) {
            this.enqueue(q2.dequeue());
        }
        return foundVal;
    }


    printQueue() { //for learning puspose
        console.log("Front: " + this.front.data);
        var runner = this.front;
        while (runner) {
            console.log(runner.data)
            runner = runner.next;
        }
        console.log("Rear: " + this.rear.data);
    }
}


/**
 * Compares 2 queues to see if they are equal.
 * Avoid indexing the queue items directly via bracket notation, use the
 * queue methods instead for practice.
 * Use no extra array or objects.
 * The queues should be returned to their original order when done.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Queue} q1 q2 The queues to be compared 
 * @returns {boolean} Whether all the items of the two queues are equal and
 *    in the same order.
 */
function compareQueue(q1, q2) {
    while (!q1.isEmpty() && !q2.isEmpty()) {
        let item1 = q1.dequeue();
        let item2 = q2.dequeue();
        if (item1 !== item2) {
            return false;
        }
    }
    return q1.isEmpty() && q2.isEmpty();
}

/**
 * Determines if the queue is a palindrome (same items forward and backwards).
 * Avoid indexing queue items directly via bracket notation, instead use the
 * queue methods for practice.
 * Use only 1 stack as additional storage, no other arrays or objects.
 * The queue should be returned to its original order when done.
 * - Time: O(?).
 * - Space: O(?).
 * @returns {boolean}
 */
function isPalindrome(q) {
    let stack = [];
    while (!q.isEmpty()) {
        let front = q.dequeue();
        let back = q.peek();
        if (front !== back) {
            return false;
        }
        stack.push(front);
        q.dequeue();
    }
    while (!stack.isEmpty()) {
        q.enqueue(stack.pop());
    }
    return true;
}

var test1 = new Queue();
test1.enqueue(new Node("a"));
test1.enqueue(new Node("b"));
test1.enqueue(new Node("c"));
test1.enqueue(new Node("d"));
test1.printQueue();


var test2 = new Queue();
test2.enqueue(new Node("a"));
test2.enqueue(new Node("b"));
test2.enqueue(new Node("c"));
test2.enqueue(new Node("d"));

var test3 = new Queue();
test3.enqueue(new Node("a"));
test3.enqueue(new Node("b"));
test3.enqueue(new Node("b"));
test3.enqueue(new Node("a"));



console.log(compareQueue(test1, test2)) // expected: true
console.log(compareQueue(test1, test3)) // expected: false

console.log(isPalindrome(test3)); // expected : true
console.log(isPalindrome(test2)); // expected : false