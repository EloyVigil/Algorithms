/**
 * Class to represent a Node for a DoublyLinkedList.
 */
class DLLNode {
    /**
     * Executed when the new keyword is used to construct a new node instance.
     * @param {any} data The data the new node will store.
     */
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

/**
 * A class to represent a doubly linked list and contain all of it's methods.
 * A doubly linked list is a singly linked list that can be traversed in both
 * directions.
 */
class DoublyLinkedList {
    /**
     * Executed when the new keyword is used to construct a new DoublyLInkedList
     * instance that inherits these methods and properties.
     */
    constructor() {
        this.head = null;
        this.tail = null;
    }

    isEmpty() {
        return this.head === null;
    }
    toArray() {
        const vals = [];
        let runner = this.head;

        while (runner) {
            vals.push(runner.data);
            runner = runner.next;
        }
        return vals;
    }

    insertAtBack(data) {
        const newTail = new DLLNode(data);

        if (this.isEmpty()) {
            // if no head set the newTail to be both the head and the tail
            this.head = newTail;
            this.tail = newTail;
        } else {
            this.tail.next = newTail;
            newTail.prev = this.tail;

            this.tail = newTail;
        }
        return this;
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

    /**
     * Inserts a new node with the given newVal after the node that has the
     * given targetVal as it's data.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} targetVal The node data to find.
     * @param {any} newVal Data for the new node.
     * @returns {boolean} Indicates if the new node was added.
     */
    // 1. Create the new node
    // 2. search for the targetVal by loop through the list (while loop)
    // 3. when the targetVal is found, move around the pointers

    insertAfter(targetVal, newVal) {
        var runner = this.head;
        var newNode = new DLLNode(newVal);

        while (runner && runner.data != targetVal) {
            runner = runner.next;
        }

        if (!runner) {
            console.log("Target value doesn't exist.")
            return false;
        }

        else if (runner.next) {
            var nextNode = runner.next;
            runner.next = newNode;
            newNode.prev = runner;
            newNode.next = nextNode;
            nextNode.prev = newNode;
            return true;
        }

        else {
            runner.next = newNode;
            newNode.prev = runner;
            newNode.next = null;
            this.tail = newNode;
            return true;
        }
    }

    /**
     * Inserts a new node with the given newVal before the node that has the
     * given targetVal as it's data.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} targetVal The node data to find.
     * @param {any} newVal Data for the new node.
     * @returns {boolean} Indicates if the new node was added.
     */
    insertBefore(targetVal, newVal) {
        var runner = this.head;
        var newNode = new DLLNode(newVal);

        while (runner && runner.data != targetVal) {
            runner = runner.next;
        }

        if (!runner) {
            console.log("Target value doesn't exist.")
            return false;
        }

        else if (runner.prev) {
            var prevNode = runner.prev;
            runner.prev = newNode;
            newNode.prev = prevNode;
            newNode.next = runner;
            prevNode.next = newNode;
            return true;
        }

        else {
            runner.prev = newNode;
            newNode.next = runner;
            newNode.prev = null;
            this.head = newNode;
            return true;
        }
    }

    /**
     * Finds the given node in this list and removes it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @param {DLLNode} node A node in this list.
     * @returns {DoublyLinkedList} This list.
     */
    removeData(data) {
        var runner = this.head;

        while (runner && runner.data != data) {
            runner = runner.next;
        }

        if (!runner) {
            console.log("Value doesn't exist.")
        }

        else if (runner.next && runner.prev) {
            runner.prev.next = runner.next;
            runner.next.prev = runner.prev;
            runner.data = null;
            runner.next = null;
            runner.prev = null;
            return this;
        }

        else if (runner.next) {
            this.head = runner.next;
            runner.next.prev = null;
            runner.data = null;
            runner.next = null;
            runner.prev = null;
            return this;
        }

        else if (runner.prev) {
            this.tail = runner.prev;
            runner.prev.next = null;
            runner.data = null;
            runner.next = null;
            runner.prev = null;
            return this;
        }

        else {
            this.head = null;
            this.tail = null;
            runner.next = null;
            runner.prev = null;
            runner.data = null;
            return this;
        }
    }

}
const list1 = new DoublyLinkedList();
const list2 = new DoublyLinkedList();
list1.insertAtBackMany([5, 3, 1, 4, 7])
list1.insertAfter(7, 2);
list1.insertBefore(5, 6);
list1.removeData(2);
console.log(list1.toArray());


list2.insertAtBack(4);
list2.removeData(4);
console.log(list2.toArray());
