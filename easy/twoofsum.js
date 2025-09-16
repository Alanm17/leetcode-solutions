// twoSum Input: nums = [2,7,11,15], target = 9
// Output: [0,1]

var twoSum1 = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let result = nums[i] + nums[j];
      if (result === target) {
        return [i, j];
      }
    }
  }
};

var twoSum = function (nums, target) {
  let count = 0;
  let result;
  let map = new Map();

  while (count) result = nums[count] + nums[count + 1];
  if (result === target) return [nums[count], nums[count + 1]];
  count++;
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

///another way using O(n)

const twoSum = function (nums, target) {
  let map = new Map();
  let compliment;
  for (let i = 0; i < nums.length; i++) {
    compliment = target - nums[i];
    if (map.has(compliment)) {
      return [map.get(compliment), i];
    }
    map.set(nums[i], i);
  }
};

// one more way of doing it
const twoSum = function (nums, target) {
  let map = {};
  let compliment;
  for (let i = 0; i < nums.length; i++) {
    compliment = target - nums[i];
    if (map[compliment] !== undefined) {
      return [map[compliment], i];
    }
    map[nums[i]] = i;
  }
};
