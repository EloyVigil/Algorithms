/**
reference:
http://btv.melezinek.cz/binary-search-tree.html
 * Class to represent a Node in a Binary Search Tree (BST).
 * The properties in the constructor are how this node is 
 * connected to other nodes to form the tree. 
 * Similar to .next in a SinglyLinkedList except a BST node can
 * be connected to two other nodes. To start, new nodes are not
 * connected to any other nodes, these properties will be set 
 * after the new node is instantiated.
 */
class BSTNode { // TreeNode , node
    constructor(data) {
        this.data = data;
        this.left = null; // a BSTNode with a smaller value
        this.right = null;
    }
}

/**
 * Represents an ordered tree of nodes where 
 * the data of left nodes are <= to their parent and
 * the data of right nodes are > their parent's data.
 */
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    /**
     * Inserts a new node with the given newVal in the right place to preserver
     * the order of this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {number} newVal The data to be added to a new node.
     * @returns {BinarySearchTree} This tree.
     */
    insert(newVal) {
        if (this.root == null) {
            this.root = new BSTNode(newVal);
            return this;
        }

        let current = this.root;
        while (current) {
            if (newVal < current.data) {
                if (current.left) {
                    current = current.left;
                    current.left = new BSTNode(newVal);
                    return this;
                }
                break;
            }

            if (newVal > current.data) {
                if (current.right) {
                    current = current.right;
                    current.right = new BSTNode(newVal);
                    return this;
                }
                break;
            }
        }
    }












    /**
     * Inserts a new node with the given newVal in the right place to preserver
     * the order of this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {number} newVal The data to be added to a new node.
     * @param {Node} curr The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {BinarySearchTree} This tree.
     */
    insertRecursive(newVal, curr = this.root) { }


    // HELPER METHOD
    // Logs this tree horizontally with the root on the left.
    print(node = this.root, spaceCnt = 0, spaceIncr = 10) {
        if (!node) {
            return;
        }

        spaceCnt += spaceIncr;
        this.print(node.right, spaceCnt);

        console.log(
            " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
            `${node.data}`
        );

        this.print(node.left, spaceCnt);
    }
}

const emptyTree = new BinarySearchTree();
const oneNodeTree = new BinarySearchTree();
oneNodeTree.root = new BSTNode(10);
console.log("<-----Empty Tree----->")
console.log("<---with one insert----->")
emptyTree.insert(4);
emptyTree.print()

/* twoLevelTree
        root
        10
      /   \
    5     15
*/
const twoLevelTree = new BinarySearchTree();
twoLevelTree.insert(10);
twoLevelTree.insert(5);
twoLevelTree.insert(15);
twoLevelTree.root = new BSTNode(10);
twoLevelTree.root.left = new BSTNode(5);
twoLevelTree.root.right = new BSTNode(15);
twoLevelTree.insert(2);
twoLevelTree.insert(20);
console.log(" ");
console.log("<--------Two Level Tree----->")
console.log("<-------with two inserts----->")
twoLevelTree.print()

/* threeLevelTree 
        root
        10
          \
          15
    \    / \
    8  13  20
*/
const threeLevelTree = new BinarySearchTree();
threeLevelTree.root = new BSTNode(10);
threeLevelTree.root.left = new BSTNode(5);
threeLevelTree.root.left.left = new BSTNode(2);
threeLevelTree.root.left.right = new BSTNode(8);
threeLevelTree.root.right = new BSTNode(15);
threeLevelTree.root.right.right = new BSTNode(20);
threeLevelTree.root.right.left = new BSTNode(13);
console.log(" ");
console.log("<------Three Level Tree------>")
console.log("<------with two inserts----->")
threeLevelTree.insert(19);
threeLevelTree.insert(3);
threeLevelTree.print()
