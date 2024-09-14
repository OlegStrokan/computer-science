export const validAnagram = (first: string, second: string): boolean => {
  if (first.length !== second.length) return false;

  const count: Record<string, number> = {};

  for (let character of first) {
    count[character] = (count[character] || 0) + 1;
  }

  for (let character of second) {
    if (!count[character]) {
      return false;
    }
    count[character]--;
  }
  return true;
};

// here i used 1 hashmap with comparing solution
// another solution is to sort 2 string and comparing them
