import { IBranch } from "./IBranch";

export interface IGit {
  name: string;
  branch: IBranch;
  checkoutBranch: (name?: string) => IBranch;
  branchList: () => IBranch[] | null;
  stageFile: (path: string) => boolean;
}
