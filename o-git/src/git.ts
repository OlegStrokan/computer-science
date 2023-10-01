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
    const branch = new Branch("main", null);
    this.add(branch);
    this.branch = branch;
  }
  stageFile(path: string): boolean {
    return new Add().stageFile(path);
  }

  private add(branch: IBranch) {
    this.branches?.push(branch);
  }

  private findIndex()

  branchList(): IBranch[] | null {
    console.info(`${this.branches?.map((branch) => `${branch.name}\n`)}`);
    return this.branches;
  }

  checkoutBranch(name?: string): IBranch {
    if (!name) {
      console.info(`Current branch: ${this.branch.name}`);
      return this.branch;
    }
    this.branch = this.addBranch(name);
    return this.branch;
  }

  getBranches(): IBranch[] {

  }

  addBranch (name: string): IBranch {
    const branchIdx = this.branches?.findIndex(
        (branch) => branch.name === name
    );
    /* If branch already exists changes to existing branch */
    if (branchIdx !== undefined && branchIdx !== -1 && this.branches?.length) {
      this.branch = this.branches[branchIdx];
      console.info(`Switched to branch: ${this.branch.name}`);
      return this.branch;
    }
    const newBranch = new Branch(name, this.branch?.commit);
    this.add(newBranch);
    console.info(`Created: ${name} branch`);
    return newBranch
  }


  deleteBranch(name: string): void {
    const branchIdx = this.branches?.findIndex(
        (branch) => branch.name === name
    );

    if (!branchIdx) {
      console.error('No branches found with this name');
    }

    this.branches = this.branches.splice(branchIdx, 1);
    console.info(`Branch: ${name} successfully deleted`);
  }
}
