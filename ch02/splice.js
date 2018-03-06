var nums = [1,2,3,7];
var newElements = [4,5,6];
nums.splice(3,0,newElements);
console.log(nums.join());