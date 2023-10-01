import { IBranch } from "./IBranch";

export interface IGit {
  name: string;
  branch: IBranch;
  checkout: (name?: string) => IBranch;
  stageFile: (path: string) => boolean;
}
