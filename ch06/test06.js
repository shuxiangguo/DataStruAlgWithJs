//LList单向链表
function Node(element) {
    this.element = element;
    this.next = null;
}

function LList() {
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.remove = remove;
    this.display = display;
    this.findPrevious = findPrevious;
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
cities.remove("Carlisle");
cities.display();

function findPrevious(item) {
    var curNode = this.head;
    while (curNode.next !== null && curNode.next.element !== item) {
        curNode = curNode.next;
    }
    return curNode;
}

function remove(item) {
    var prevNode = this.findPrevious(item);
    if (prevNode.next !== null) {
        prevNode.next = prevNode.next.next;
    }
}

