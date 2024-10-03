import { describe, it, expect } from "bun:test";
import { meetingRooms } from ".";

describe("Meeting Rooms Function", () => {
  it("should return false for overlapping meetings", () => {
    const intervals = [
      [0, 30],
      [5, 10],
      [15, 20],
    ];
    expect(meetingRooms(intervals)).toBe(false);
  });

  it("should return true for non-overlapping meetings", () => {
    const intervals = [
      [0, 5],
      [6, 10],
      [11, 15],
    ];
    expect(meetingRooms(intervals)).toBe(true);
  });

  it("should return true for a single meeting", () => {
    const intervals = [[0, 10]];
    expect(meetingRooms(intervals)).toBe(true);
  });

  it("should return true for adjacent meetings", () => {
    const intervals = [
      [1, 5],
      [5, 10],
      [10, 15],
    ];
    expect(meetingRooms(intervals)).toBe(true);
  });
});
