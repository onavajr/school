// assignment
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
    contain(value){
        var gothrough = this.head;
        while(gothrough){
            if(gothrough.value === value){
                return true;
            }
            gothrough = gothrough.next
        }
        return false;
    }
}

singlyll = new SLL()
numOne = new Node(10)
numTwo = new Node(1000)

singlyll.head = numOne;
singlyll.next = numTwo;

singlyll.contain();

console.log(singlyll);