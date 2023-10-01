import { IBranch } from "./core/IBranch";
import { ICommit } from "./core/ICommit";

export class Branch implements IBranch {
  name: string;
  commit: ICommit | null;
  constructor(name: string, commit: ICommit | null) {
    this.name = name;
    this.commit = commit;
  }
}
