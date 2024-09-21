export const rob = (nums: number[]): number => {
  const length = nums.length;

  if (length === 0) return 0;
  if (length === 1) return nums[0];

  let prev2 = 0;
  let prev1 = nums[0];

  for (let i = 1; i < length; i++) {
    const current = Math.max(prev1, prev2 + nums[i]);
    prev2 = prev1;
    prev1 = current;
  }
  return prev1;
};
