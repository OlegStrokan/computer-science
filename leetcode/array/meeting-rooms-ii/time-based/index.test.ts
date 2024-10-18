import { describe, expect, it } from "bun:test";
import { Interval, meetingRoomsIITime } from ".";

describe("meetingRoomsIITime", () => {
  it("should return 1 when there's a single meeting", () => {
    const intervals = [new Interval(0, 30)];
    expect(meetingRoomsIITime(intervals)).toBe(1);
  });

  it("should return the correct number of rooms for overlapping meetings", () => {
    const intervals = [
      new Interval(0, 30),
      new Interval(5, 10),
      new Interval(15, 20),
    ];
    expect(meetingRoomsIITime(intervals)).toBe(2);
  });

  it("should return 0 when there are no meetings", () => {
    const intervals: Interval[] = [];
    expect(meetingRoomsIITime(intervals)).toBe(0);
  });
});
