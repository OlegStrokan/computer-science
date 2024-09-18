// test data [1,1,2,2,2,3,3]
export const topKFrequent = (nums: number[], k: number): number[] => {
  const count: { [key: number]: number } = {};
  // create empty array of arrays + 1 item for correct work = [[], [], [], [], [], [], [], []]
  const freq: number[][] = Array.from({ length: nums.length + 1 }, () => []);

  // find count of each element = { 1: 2, 2: 3, 3: 2}
  for (const n of nums) {
    count[n] = (count[n] || 0) + 1;
  }

  /* push element into freq array =
        [[], [], [1], [], [], [], [],[]] because 1 has frequency 2 => 2 index
        [[], [], [1], [2], [], [], [],[]] because 2 has frequency 3 => 3 index
        [[], [], [1,3], [2], [], [], [],[]] because 3 has frequency 2 => 1 index
  */
  for (const [n, c] of Object.entries(count)) {
    freq[c].push(Number(n));
  }
  const res: number[] = [];

  /* group all element from end:
        find [2] => push 2 to res   => [2];
        find [1,3] => push 1 to res =>  [2,1];
  */
  for (let i = freq.length - 1; i > 0; i--) {
    for (const n of freq[i]) {
      res.push(n);
      if (res.length === k) {
        return res;
      }
    }
  }

  return res;
};
