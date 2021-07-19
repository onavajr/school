class Node {
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class SLL {
    constructor(){
        this.head = null;
    }
    display(){
        var result = "";
        var gothrough = this.head;
        while(gothrough){
            result += gothrough.value + " number "
            gothrough = gothrough.next
        }
        console.log(result)
    }
}

singlyll = new SLL()
numOne = new Node(10)
numTwo = new Node(1000)

singlyll.head = numOne;
singlyll.next = numTwo;

singlyll.display();

console.log(singlyll);