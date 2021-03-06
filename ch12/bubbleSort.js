//排序算法
function CArray(numElements) {
    this.dataStore = [];
    this.pos = 0;
    this.numElements = numElements;
    this.insert = insert;
    this.toString = toString;
    this.clear = clear;
    this.setData = setData;
    this.swap = swap;
    this.bubbleSort = bubbleSort;

    for (var i = 0; i < numElements; i++) {
        this.dataStore[i] = i;
    }
}


function setData() {
    for (var i = 0; i < this.numElements; i++) {
        this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1));
    }
}

function clear() {
    for (var i = 0; i < this.dataStore.length; i++) {
        this.dataStore[i] = 0;
    }
}

function insert(element) {
    this.dataStore[this.pos++] = element;
}

function toString() {
    var restr = "";
    for (var i = 0; i < this.dataStore.length; i++) {
        restr += this.dataStore[i] + " ";
        if (i > 0 && i % 10 === 0) {
            restr += "\n";
        }
    }
    return restr;
}

function swap(arr, index1, index2) {
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

function bubbleSort() {
    var numElements = this.dataStore.length;
    var temp;
    for (var i = numElements-1; i >= 1; i--) {
        for (var j = i; j >= 0; j--) {
            if (this.dataStore[j] > this.dataStore[j-1]) {
                swap(this.dataStore, j, j-1);
            }
        }
        console.log(this.dataStore);
    }
}

var numElements = 10;
var mynums = new CArray(numElements);
mynums.setData();
mynums.bubbleSort();