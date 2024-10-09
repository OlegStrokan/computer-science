export const containsNearbyDuplicate = (nums: number[], k: number): boolean => {
  const window = new Set<number>();

  for (let i = 0; i < nums.length; i++) {
    if (window.has(nums[i])) {
      return true;
    }

    window.add(nums[i]);

    if (window.size > k) {
      window.delete(nums[i - k]);
    }
  }
  return false;
};
