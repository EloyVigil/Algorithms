insertAtBack(data){
    var newNode = new listNode(data);
    // Create a new node with the given value 
    // inserts it at the back of the list
    // HINT: How to find the last node of a Singly Linked List?
    var runner = this.head;
    while (runner.next !== null) {
        runner = runner.next;
    }


}
console.log(runner.data)
return this
    // level 1: insert a new node into list1
    // level 2: insert a new node into emptyList
  // instantiate nodes
var node1 = new ListNode(3)
var node2 = new ListNode(5)
var node3 = new ListNode(8)
