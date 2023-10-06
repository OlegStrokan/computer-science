import { IBranch } from "./IBranch";

export interface IGit {
  name: string;
  currentBranch: IBranch;
  checkout: (name?: string) => IBranch;
  addBranch: (name: string) => IBranch;
  branchList: () => IBranch[] | null;
  stageFile: (path: string) => boolean;
}
