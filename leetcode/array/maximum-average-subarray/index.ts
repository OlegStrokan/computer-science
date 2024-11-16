export const findMaxAverageSubarray = (nums: number[], k: number): number => {
  let maxSum = 0;
  for (let i = 0; i < k; i++) {
    maxSum += nums[i];
  }

  let currSum = maxSum;
  for (let i = k; i < nums.length; i++) {
    currSum = currSum + nums[i] - nums[i - k];
    maxSum = Math.max(currSum / k, maxSum);
  }

  return maxSum;
};
