import { ICommit } from "./ICommit";

export interface IBranch {
  name: string;
  commit: ICommit | null;
}
