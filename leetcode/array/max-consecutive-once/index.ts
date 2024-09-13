export const findMaxConsecutiveOnes = (nums: number[]): number => {
  let maxCount = 0;
  let curCount = 0;

  for (let num of nums) {
    if (num === 1) {
      curCount++;
      maxCount = Math.max(curCount, maxCount);
    } else {
      curCount = 0;
    }
  }
  return maxCount;
};
