export const longestSubstring = (str: string): number => {
  const map = new Map<string, number>();

  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < str.length; right++) {
    const currentChar = str[right];

    if (map.has(currentChar) && map.get(currentChar)! >= left) {
      left = map.get(currentChar)! + 1;
    }
    map.set(currentChar, right);
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
};
