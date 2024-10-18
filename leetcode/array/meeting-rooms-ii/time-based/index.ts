export class Interval {
  public start: number;
  public end: number;
  constructor(start: number, end: number) {
    this.start = start;
    this.end = end;
  }
}

export const meetingRoomsIITime = (intervals: Interval[]): number => {
  const time = [];

  for (const interval of intervals) {
    const { start, end } = interval;
    time.push([start, 1]);
    time.push([end, -1]);
  }

  time.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

  let count = 0;
  let maxCount = 0;
  for (const t of time) {
    count += t[1];
    maxCount = Math.max(count, maxCount);
  }
  return maxCount;
};
