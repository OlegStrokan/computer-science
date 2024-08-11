export const twoSum = (nums: number[], target: number) => {
  const map: { [key: number]: number } = {};

  for (let [index, num] of nums.entries()) {
    if (map[num] !== undefined) return [map[num], index];
    map[target - num] = index;
  }
};

/*
target 5 [1,2,0,3]

// 1 iteraciton
if map has 1
else map add { 4: 0} // 5 - current num (1) = 4
// 2 iteraction
if   map has 2
else map add { 3: 1}
// 3 iteraction 
if map has 0 
else map add { 5: 2}
// 4 iteraction
if map has 3 => return index of 3 = 1 and currect index = [1,3]
*/
