import { Add } from "./add";
import { Branch } from "./branch";
import { IBranch } from "./core/IBranch";
import { IGit } from "./core/IGit";

export class Git implements IGit {
  name: string;
  branch: IBranch;
  private branches: IBranch[] | null;
  constructor(name?: string) {
    this.branches = [];
    this.name = name || "default-name";
    // When we initialize git class this should be our default branch.
    const branch = new Branch("main", null);
    this.add(branch);
    this.branch = branch;
  }
  stageFile(path: string): boolean {
    return new Add().stageFile(path);
  }
  /* Add branch into an array of branches */
  private add(branch: IBranch) {
    this.branches?.push(branch);
  }
  /* Checkout branch  */
  checkout(name?: string): IBranch {
    if (!name) {
      console.info(`Current branch: ${this.branch.name}`);
      return this.branch;
    }
    const branchIdx = this.branches?.findIndex(
      (branch) => branch.name === name
    );
    /* If branch already exists changes to existing branch */
    if (branchIdx !== undefined && branchIdx !== -1 && this.branches?.length) {
      this.branch = this.branches[branchIdx];
      console.info(`Switched to branch: ${this.branch.name}`);
      return this.branch;
    }
    /* Create if does not exists */
    this.branch = new Branch(name, this.branch?.commit);
    this.add(this.branch);
    console.info(`Created and Switched to: ${name}`);
    return this.branch;
  }
}
