export const twoSumII = (nums: number[], target: number): number[] => {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let currentSum = nums[left] + nums[right];
    if (currentSum > target) {
      right--;
    } else if (currentSum < target) {
      left++;
    } else {
      return [left + 1, right + 1];
    }
  }

  return [];
};
