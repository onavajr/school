assignment
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

maxminaverage() {
    var sum = 0;
    var max = this.head.value;
    var min = this.head.value;
    var gothrough = this.head;

    while(gothrough) {
            sum += gothrough.value;
            if(gothrough.value > max){
                max = gothrough.value;
            }
            else {
                (gothrough.value < min)
                    min = gothrough.value;
                gothrough = runner.next
            }
            return '${max}, ${min}, average:${sum/this.length()}'
        }
}

var x = maxminaverage(singlyll);

