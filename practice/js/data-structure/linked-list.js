// linked list 
// a linked list is a linear data structure where elements are stored in node 
// each node contain value and reference 

// types of linklist 
// 1. singly linked list 
// 2. doubly linked list 
// 3. circular linked listb


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        let newnode = new Node(value);
        if (!this.head) {
            this.head = newnode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newnode;
    }

    printList() {
        let current = this.head;
        let result = "";
        while (current) {
            result += current.value + '->';
            current = current.next;
        }
        console.log(result + 'null');
    }
}

let list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.printList();