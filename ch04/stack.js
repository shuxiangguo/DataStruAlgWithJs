function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;
    this.length = length;
}

function push(element) {
    this.dataStore[this.top++] = element;
}

function pop() {
    return this.dataStore[--this.top];
}

function peek() {
    return this.dataStore[this.top-1];
}

function clear() {
    this.top = 0;
}

function length() {
    return this.top;
}


//测试数制转换
console.log("利用Stack进行数制转换");
function mulBase(num, base) {
    var s = new Stack();
    do {
        s.push(num%base);
        num = Math.floor(num/=base);
    } while (num > 0);

    var converted = "";
    while (s.length() > 0) {
        converted += s.pop();
    }
    return converted;
}

var num = 32;
var base = 2;
var newNum = mulBase(32,2);
console.log(newNum);
num = 125;
base = 8;
console.log(mulBase(num,base));


//测试回文数
console.log("Use Stack to test palindrome");
function isPalindrome(word) {
    var s = new Stack();
    for (var i = 0; i < word.length; i++) {
        s.push(word[i]);
    }

    var rword = "";
    while (s.length() > 0) {
        rword += s.pop();
    }

    if (word === rword) {
        return true;
    } else {
        return false;
    }
}

var word = "hello";
if (isPalindrome(word)) {
    console.log(word + " is a palindrome");
} else {
    console.log(word + " is not a palindrome");
}

word = "racecar";
if (isPalindrome(word)) {
    console.log(word + " is a palindrome");
} else {
    console.log(word + " is not a palindrome");
}