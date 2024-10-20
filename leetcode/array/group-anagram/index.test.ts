import { describe, expect, it } from "bun:test";
import { groupAnagram } from ".";

describe("groupAnagram", () => {
  it("should group anagrams correctly for simple case", () => {
    const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
    const result = groupAnagram(input);
    const expected = [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]];

    expect(result).toEqual(expect.arrayContaining(expected));
  });

  it("should return single groups for non-anagrams", () => {
    const input = ["dog", "cat", "bird", "fish"];
    const result = groupAnagram(input);
    const expected = [["dog"], ["cat"], ["bird"], ["fish"]];

    expect(result).toEqual(expect.arrayContaining(expected));
  });

  it("should return an empty array for an empty input", () => {
    const input: string[] = [];
    const result = groupAnagram(input);

    expect(result).toEqual([]);
  });
});
