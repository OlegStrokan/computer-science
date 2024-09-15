export const findMaxAverageSubarray = (nums: number[], k: number): number => {
  let maxSum = 0;
  for (let i = 0; i < k; i++) {
    maxSum += nums[i];
  }

  let currentSum = maxSum;
  for (let i = k; i < nums.length; i++) {
    currentSum = currentSum - nums[i - k] + nums[i];
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum / k;
};
