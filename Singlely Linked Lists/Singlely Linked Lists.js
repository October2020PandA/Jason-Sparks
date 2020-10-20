// Singlely linked list node class
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Creating a few instances of singlely linked list nodes
var first_node = new Node("Mike");
var second_node = new Node("Shannon");
var third_node = new Node("William");

// Singlely linked list class
class SLL {
    constructor() {
        this.head = null; // A singlely linked list class only has one attribute which is a single node, we call it "head" here. 
    }

    // Singlely linked list class methods 
    // A method for adding a node to the front of our list given a value
    addToFront(value) {
        var new_node = new Node(value); // create a new node instance
        // Scenario 1 - the list is empty
        if(this.head == null){
            this.head = new_node;  // assign the new node instance as the singlely linked list's first node
            return this;
        }

        // Scenario 2 - the list is not empty 
        new_node.next = this.head; // Store the current first node as the next node so that it isn't lost
        this.head = new_node       // Change which node is the "head" of the list
        return this;
    }

    removeFront() {
        if(this.head) {
            this.head = this.head.next;
        }
        return this.head;
    }
    
    // A method for viewing our singlely linked list
    displayList() {
        if(this.head == null){
            console.log(this);
            return this;
        }
        var currentNode = this.head; //this is a node object at the start of the list
        var list = "";
        while(currentNode != null){
            list = list + `Current node's value: ${currentNode.value} -> \n`; 
            currentNode = currentNode.next // Move on to the next node in the list            
        }
        console.log(list);
        return this;
    }    
}

var my_sll = new SLL();

my_sll.addToFront("Amanda");
my_sll.addToFront("Bob");
my_sll.addToFront("Sue");
my_sll.addToFront("Victor");
my_sll.addToFront("Shannon");

my_sll.displayList();

my_sll.removeFront();
my_sll.displayList();