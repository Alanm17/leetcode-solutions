// twoSum Input: nums = [2,7,11,15], target = 9
// Output: [0,1]

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let result = nums[i] + nums[j];
      if (result === target) {
        return [i, j];
      }
    }
  }
};

// tested using compiler

const nums = [2, 12, 2, 10, 12];
target = 24;

const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let result = nums[i] + nums[j];
      if (result === target) {
        console.log(result, "index:", i, j);
        return [i, j];
      }
    }
  }
};

twoSum(nums, target);
