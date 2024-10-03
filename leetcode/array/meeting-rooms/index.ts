export const meetingRooms = (intervals: number[][]): boolean => {
  intervals.sort((a, b) => a[0] - b[0]);
  for (let i = 1; i < intervals.length; i++) {
    const [prevStart, prevEnd] = intervals[i - 1];
    const [currStart, currEnd] = intervals[i];

    if (currStart < prevEnd) {
      return false;
    }
  }
  return true;
};
