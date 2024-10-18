export class Interval {
  public start: number;
  public end: number;
  constructor(start: number, end: number) {
    this.start = start;
    this.end = end;
  }
}

export const meetingRoomsIIPointers = (intervals: Interval[]): number => {
  const start: number[] = intervals.map((i) => i.start).sort((a, b) => a - b);
  const end: number[] = intervals.map((i) => i.end).sort((a, b) => a - b);

  let count = 0;
  let maxCount = 0;
  let startPointer = 0;
  let endPointer = 0;

  while (startPointer < intervals.length) {
    if (start[startPointer] < end[endPointer]) {
      startPointer++;
      count++;
    } else {
      endPointer++;
      count--;
    }
    maxCount = Math.max(maxCount, count);
  }

  return maxCount;
};
