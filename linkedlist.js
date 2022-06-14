class Node{
    constructor(value,next) {
        this.value = value;
        this.next = next;
    }
}
class LinkedList{
    constructor(head = null){
        this.head = head;
    }

    // reverse() {
    // let current = this.head;
    // let previous = null;
    // let next = this.head.next;

    //with a linked list you dont know how big it is or how many times we need to loop, so you wouldnt use a for loop you would use a while loop

//         while (current != null){
//                 current.next = previous;
//                 next.next = current;
//                 previous = next;
//         }
//     }
}


let reverseList = (head) => {
    let current = head;
    let previous = null;
    let next = head.next;
    while(current !== null){
        next = current.next;
        current.next = previous;
        previous = current;
        current = next;
    }
    return previous;
}
let n1 = new Node(1);
let n2 = Node(2);

let list = new LinkedList(n1);
console.log(list);
let reversedList = reverseList(n1);
console.log(reversedList);

//we wanto to go from n1 --> n2 --> null to
//null <- n1  <--n2;
//iterative way 
