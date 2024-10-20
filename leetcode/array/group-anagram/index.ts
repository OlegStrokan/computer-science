export const groupAnagram = (strs: string[]): string[][] => {
  const anagramGroups: Map<string, string[]> = new Map();

  for (const str of strs) {
    const sortedStr = str.split("").sort().join("");

    if (!anagramGroups.has(sortedStr)) {
      anagramGroups.set(sortedStr, []);
    }

    anagramGroups.get(sortedStr)!.push(str);
  }

  return Array.from(anagramGroups.values());
};
