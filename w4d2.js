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
        return !this.front;
    }

    /**
   * Retrieves the first item without removing it.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {any} The first item or undefined if empty.
   */
    getFront() {
        //return the front data
        if (this.isEmpty()) {
            console.log("It's empty...")
            return undefined;
        }
        console.log("The front is " + this.front.data)
        return this.front.data;
    }

    /**
   * Adds a new given item to the back of this queue.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @param {any} item The new item to add to the back.
   * @returns {number} The new size of this queue.
   */
    enqueue(newNode) {
        if (this.isEmpty()) {
            this.front = newNode;
            this.rear = newNode;
        }
        this.rear.next = newNode;
        this.rear = newNode;
    }


    /**
     * Removes and returns the first item of this queue.
     * - Time: O(n) linear, due to having to shift all the remaining items to
     *    the left after removing first elem.
     * - Space: O(1) constant.
     * @returns {any} The first item or undefined if empty.
     */
    dequeue() {
        if (!this.isEmpty()) {
            let temp = this.front
            this.front = this.front.next
            return temp.data
        }
        return undefined;
    }

    // bonus
    /**
   * Check if the target value exists in the queue using the basic queue operations
   * @returns {Boolean } 
   */
    contains(targetVal) {
        let copyQueue = this;
        while (copyQueue.front) {
            if (copyQueue.front.data != targetVal) {
                copyQueue.dequeue();
            }
            else {
                console.log("It's right there!")
                return true;
            }
        }
        console.log("We couldn't find it...")
        return false;
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


var q = new Queue();
console.log(q.isEmpty());
q.getFront()
q.enqueue(new Node("a"));
q.enqueue(new Node("b"));
q.enqueue(new Node("c"));
q.enqueue(new Node("d"));
console.log(q.isEmpty());
q.getFront()
q.printQueue(); //expected: front: "a", rear : "d"
q.contains("y")

q.dequeue();
q.printQueue(); //expected: front: "b", rear : "d"


