import { describe, it, expect } from "bun:test";
import { validAnagram } from "./index";

describe("validAnagram", () => {
  it("should return true for anagrams", () => {
    expect(validAnagram("anagram", "nagaram")).toBe(true);
    expect(validAnagram("listen", "silent")).toBe(true);
    expect(validAnagram("rat", "tar")).toBe(true);
    expect(validAnagram("evil", "vile")).toBe(true);
    expect(validAnagram("restful", "fluster")).toBe(true);
  });

  it("should return false for non-anagrams", () => {
    expect(validAnagram("hello", "world")).toBe(false);
    expect(validAnagram("test", "ttew")).toBe(false);
    expect(validAnagram("foo", "bar")).toBe(false);
    expect(validAnagram("aaz", "zza")).toBe(false);
    expect(validAnagram("rat", "car")).toBe(false);
  });

  it("should handle edge cases", () => {
    expect(validAnagram("", "")).toBe(true);
    expect(validAnagram("a", "")).toBe(false);
    expect(validAnagram("", "a")).toBe(false);
    expect(validAnagram("a", "a")).toBe(true);
    expect(validAnagram("a", "b")).toBe(false);
  });

  it("should handle cases with repeated characters", () => {
    expect(validAnagram("aabbcc", "ccbbaa")).toBe(true);
    expect(validAnagram("aabbcc", "aabbccc")).toBe(false);
    expect(validAnagram("abcdabcd", "dcbaabcd")).toBe(true);
  });
});
