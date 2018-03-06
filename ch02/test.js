//迭代器方法

//forEach
function square(num) {
    console.log(num*num);
}

var nums = [1,2,3,4,5,6,7];
nums.forEach(square);
console.log(nums);

//every
function isEven(num) {
    return num % 2 == 0;
}

var nums = [2,4,6,8];
var even = nums.every(isEven);
if (even) {
    console.log("all numbers are even")
} else {
    console.log("not all numbers are even");
}

//reduce
function concat(first, second) {
    return first + second;
}

var words = ["the", "quick", "brown", "fox"];
var sentence = words.reduce(concat);
console.log(sentence);
console.log(words);

var sentence1 = words.reduceRight(concat);
console.log(sentence1);

//map
console.log("Test Array.prototype.map()")

function curve(grade) {
    return grade += 5;
}

var grades = [1,2,3,4];
var newgrades = grades.map(curve);
console.log(grades);
console.log(newgrades);


function first(word) {
    return word[0];
}

var words = ['for', 'your', "information"];
var acronym = words.map(first);
console.log(words);
console.log(acronym);


//test Array.prototype.filter()
function isEven(num) {
    return num % 2 == 0;
}

function isOdd(num) {
    return num % 2 != 0;
}

var nums = [];
for (var i = 0; i < 20; i++) {
    nums[i] = i+1;
}
var evens = nums.filter(isEven);
console.log(evens.toString());
var odds = nums.filter(isOdd);
console.log(odds.join(""));
