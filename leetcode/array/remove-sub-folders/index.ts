export const removeSubFolders = (folder: string[]): string[] => {
  folder.sort();

  const res: string[] = [folder[0]];

  for (let i = 1; i < folder.length; i++) {
    const lastFolder = res[res.length - 1] + "/";

    if (!folder[i].startsWith(lastFolder)) {
      res.push(folder[i]);
    }
  }
  return res;
};
