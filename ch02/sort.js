function compare(num1, num2) {
    return num1 - num2;
}

var nums = [3,1,2,100,200,4];
nums.sort(compare);
console.log(nums);