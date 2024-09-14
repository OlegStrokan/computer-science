export const containsNearbyDuplicate = (nums: number[], k: number): boolean => {
  const window = new Set();
  let left = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i - left > k) {
      window.delete(nums[left]);
    }
    if (window.has(nums[i])) {
      return true;
    }
    window.add(nums[i]);
  }
  return false;
};
