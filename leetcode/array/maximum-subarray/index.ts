export const maximumSubarray = (nums: number[]) => {
  let maxSub = nums[0];
  let curSum = 0;

  for (let num of nums) {
    if (curSum < 0) {
      curSum = 0;
    }
    curSum += num;
    maxSub = Math.max(curSum, maxSub);
  }
  return maxSub;
};
