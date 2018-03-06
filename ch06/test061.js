//LinkList双向链表
function Node(element) {
    this.element = element;
    this.next = null;
    this.previous = null;
}

function LList() {
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.remove = remove;
    this.display = display;
    //this.findPrevious = findPrevious;
    this.findLast = findLast;
    this.displayReverse = displayReverse;
}

function find(item) {
    var curNode = this.head;
    while (curNode.element !== item) {
        curNode = curNode.next;
    }
    return curNode;
}

function insert(newElement, item) {
    var newNode = new Node(newElement);
    var curNode = this.find(item);
    newNode.next = curNode.next;
    newNode.previous = curNode;
    curNode.next = newNode;
}

function display() {
    var curNode = this.head;
    while (curNode.next !== null) {
        console.log(curNode.next.element);
        curNode = curNode.next;
    }
}

var cities = new LList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Alma", "Russellville");
cities.insert("Carlisle", "Alma");
cities.display();
console.log();
cities.displayReverse();

/**
 function findPrevious(item) {
    var curNode = this.head;
    while (curNode.next !== null && curNode.next.element !== item) {
        curNode = curNode.next;
    }
    return curNode;
 }
 */

function remove(item) {
    var curNode = this.find(item);
    if (curNode.next !== null) {
        curNode.previous.next = curNode.next;
        curNode.next.previous = curNode.previous;
        curNode.next = null;
        curNode.previous = null;
    }
}

function findLast() {
    var curNode = this.head;
    while (curNode.next !== null) {
        curNode = curNode.next;
    }
    return curNode;
}

function displayReverse() {
    var curNode = this.head;
    curNode = this.findLast();
    while (curNode.previous !== null) {
        console.log(curNode.element);
        curNode = curNode.previous;
    }
}

