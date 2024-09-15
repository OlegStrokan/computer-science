export const binarySearch = (nums: number[], target: number): number => {
  if (nums.length == 0) return -1;

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (target > nums[middle]) {
      left = middle + 1;
    } else if (target < nums[middle]) {
      right = middle - 1;
    } else {
      return middle;
    }
  }

  return -1;
};
