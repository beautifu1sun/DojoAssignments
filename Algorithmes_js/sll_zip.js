class SLL{
    constructor(){
    this.head = null;
    }
}
class Node{
    constructor(val){
    this.val = val;
    this.next = null;
    }
}
SLL.prototype.addToFront = function(val){
    var temp = new Node(val);
    temp.next = this.head;
    this.head = temp;
    
}
SLL.prototype.zip = function(sll2){
    var tmp = this.head;
    var SLL1Next = null;
    while(true){
        if (tmp.next!=null){
            if (sll2.head.next != null){
                SLL1Next = tmp.next;
                tmp.next = sll2.head;
                tmp = tmp.next;
                sll2.head = sll2.head.next;
                tmp.next = SLL1Next;
                tmp = tmp.next;
            }
            else {
                SLL1Next = tmp.next;
                tmp.next = sll2.head;
                tmp = tmp.next;
                tmp.next = SLL1Next;
                break;
            }
        }
        else{
            tmp.next = sll2.head;
            sll2.head = null;
            break;
        }
    }
    return this;
}

sll1 = new SLL();
sll1.addToFront('c');
sll1.addToFront('b');
sll1.addToFront('a');
sll2 = new SLL();
sll2.addToFront(3);
sll2.addToFront(2);
sll2.addToFront(1);
sll1.zip(sll2);
var current = sll1.head;
while (current){
    console.log(current.val);
    current = current.next;
}


