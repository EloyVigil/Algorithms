/* 
TODO: Create the DLLNode class and implement the DoublyLinkedList constructor
and the empty methods below the constructor.
*/
class DLLNode {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.previous = null;
    }
}

/**
 * A class to represent a doubly linked list and contain all of it's methods.
 * A doubly linked list is a singly linked list that can be traversed in both
 * directions.
 */
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    /**
     * Executed when the new keyword is used to construct a new DoublyLInkedList
     * instance that inherits these methods and properties.
     */


    // TODO: implement the constructor.

    /**
     * Creates a new node and adds it at the front of this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} data The data for the new node.
     * @returns {DoublyLinkedList} This list.
     */
    insertAtFront(data) {
        var newNode = new DLLNode(data);

        if (!this.head) {
            this.tail = newNode;
            this.head = newNode;
        }

        else if (this.head) {
            newNode.next = this.head;
            this.head.previous = newNode;
            this.head = newNode;
        }
        return this;
    }

    /**
     * Creates a new node and adds it at the back of this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} data The data for the new node.
     * @returns {DoublyLinkedList} This list.
     */
    insertAtBack(data) {
        var newNode = new DLLNode(data);

        if (!this.head) {
            this.tail = newNode;
            this.head = newNode;
        }

        else if (this.head) {
            newNode.previous = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        return this;
    }

    // EXTRA
    /**
     * Removes the middle node in this list.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {any} The data of the removed node.
     */
    removeMiddleNode() {
        var length = this.toArray().length;
        var midPoint = Math.floor(length / 2);
        var count = 0;
        var runner = this.head;

        if (length >= 2) {
            while (count < midPoint) {
                runner = runner.next;
                count++;
            }

            // var temp = runner.previous;
            runner.next.previous = runner.previous;
            runner.previous.next = runner.next;
        }

        else {
            console.log("There are no middle nodes. Just a head and tail bro.");
        }
    }

    removeMiddleNode2() {
        var forwardRunner = this.head
        var backwardRunner = this.tail

        while (forwardRunner !== backwardRunner || fowardRunner.next !== backRunner) {
            forwardRunner = forwardRunner.next
            backwardRuner = backwardRunner.previous
        }
        var runner = forwardRunner

        // var temp = runner.previous;
        var nextRunner = runner.next
        var prevRunner = runner.previous
        nextRunner.previous = prevRunner;
        prevRunner.next = nextRunner;


    }




    /**
     * Determines if this list is empty.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean} Indicates if this list is empty.
     */
    isEmpty() {
        return this.head === null;
    }

    /**
     * Converts this list to an array of the node's data.
     * - Time: O(n) linear, n = list length.
     * - Space: O(n) linear, array grows as list length increases.
     * @returns {Array<any>} All the data of the nodes.
     */
    toArray() {
        const vals = [];
        let runner = this.head;

        while (runner) {
            vals.push(runner.data);
            runner = runner.next;
        }
        return vals;
    }

    /**
     * Adds all the given items to the back of this list.
     * @param {Array<any>} items Items to be added to the back of this list.
     * @returns {DoublyLinkedList} This list.
     */
    insertAtBackMany(items = []) {
        items.forEach((item) => this.insertAtBack(item));
        return this;
    }
}

const emptyList = new DoublyLinkedList();
const list1 = new DoublyLinkedList();
list1.insertAtBackMany([2, 5, 8, 13, 14]);
list1.insertAtFront(1);
list1.insertAtBack(16);
console.log(list1.toArray());
list1.removeMiddleNode();
console.log(list1.toArray());
