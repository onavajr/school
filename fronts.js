// assignment
class Node {
    constructor(value) {
        this.num = value;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }
    addFront(value){
        var newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        return this.head;
    }
    removeFront(){
        if(this.head){
            this.head = this.head.next;
        }
        return this.head;
    }
    front(){
        if(this.head){
            return null;
        }
        return this.head.num;
    }
}


singlyll = new SLL()
numOne = new Node(10)
numTwo = new Node(100)
numThree = new Node(1000)

singlyll.head = numOne;
singlyll.next = numTwo;
singlyll.next = numThree

singlyll.addFront(numThree);
singlyll.removeFront();
singlyll.front();

console.log(singlyll);