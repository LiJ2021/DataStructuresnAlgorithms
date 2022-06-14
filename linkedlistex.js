class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

    push(data) {
        let node = new Node(data);
        let current;

        if (this.head == null) {
            this.head = node;
        }else {
            current = this.head;
            while(current.next) {

                current = current.next;
            }

            current.next = node;
            return
        }
    }
  //in order to trraverse linked list we have to start from somewhere - we can let ppl pass in any node that they like or we can set it
  //take in a node, keep track of current, previous, and next nodes
    reverseIterative(node) {
        let current = node;
        let previous = null;
        let next = null;

        while(current != null) {
            //this is just to save th einfo, not to start reversing just yet
            next = current.next;

            current.next = previous;

            previous = current;

            current = next;
        }
        node = previous;
        return node;
    } 

}
    class Node{
        constructor(data) {
            this.data = data;
            this.next = null;
        }
}

let list = new LinkedList()

list.push("Leechmere")
list.push("Science Park")
list.push("North Station")
list.push("Haymarket")

list.reverseIterative(this.head)