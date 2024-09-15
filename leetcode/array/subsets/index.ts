export const subsets = (nums: number[]): number[][] => {
  const result: number[][] = [];

  const dfs = (i: number, nums: number[], slate: number[]): void => {
    if (i === nums.length) {
      result.push(slate.slice());
      return;
    }

    dfs(i + 1, nums, slate);
    slate.push(nums[i]);
    dfs(i + 1, nums, slate);
    slate.pop();
  };

  dfs(0, nums, []);
  return result;
};
