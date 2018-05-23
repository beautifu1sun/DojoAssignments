function BSTNode(val){
    this.val = val;
    this.right = null;
    this.left = null;
}

function BST(){
    this.root = null;

    this.add = function(val){
        if (this.root){
            var pointPrev = null;
            var pointer = this.root;
            while(pointer){
                if (val > pointer.val){
                    pointPrev = pointer;
                    pointer = pointer.right;
                }
                else if (val < pointer.val){
                    pointPrev = pointer;
                    pointer = pointer.left;
                }
                else console.log("value is already exist");
            }
            pointer = new BSTNode(val);
            if (pointPrev.val < val) pointPrev.right = pointer;
            else if (pointPrev.val > val) pointPrev.left = pointer;
        }
        else {
            this.root = new BSTNode(val);
        }
    }

    this.print = function(){
        var elements = [];
        elements.push(this.root);
        while(elements.length>0){
            var values = [];
            var nextElements = [];
            for (each in elements){
                values.push(elements[each].val);
                if (elements[each].left) nextElements.push(elements[each].left);
                if (elements[each].right) nextElements.push(elements[each].right);
            }
            elements = nextElements;
            console.log(values);
        }
    }
}

var testTree = new BST();
testTree.add(100);
testTree.add(90);
testTree.add(105);
testTree.add(120);
testTree.print();