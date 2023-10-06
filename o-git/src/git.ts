import { Add } from "./add";
import { Branch } from "./branch";
import { IBranch } from "./core/IBranch";
import { IGit } from "./core/IGit";

export class Git implements IGit {
  name: string;
  currentBranch: IBranch;
  private branches: IBranch[] | null;
  constructor(name?: string) {
    this.branches = [];
    this.name = name || "default-name";
    const branch = new Branch("main", null);
    this.add(branch);
    this.currentBranch = branch;
  }

  private add(branch: IBranch) {
    this.branches?.push(branch);
  }

  private findIndex(name: string) {
    return this.branches?.findIndex(
        (branch) => branch.name === name
    );
  }

  getBranches() {
    return this.branches
  }


  private addBranchHelper(name: string) {
    const newBranch = new Branch(name, null);
    this.add(newBranch);
    console.info(`Created: ${name} branch`);
    this.currentBranch = newBranch;
    console.info(`Current branch: ${this.currentBranch.name}`);
    return newBranch
  }
  stageFile(path: string): boolean {
    return new Add().stageFile(path);
  }

  branchList(): IBranch[] | null {
    console.info(`${this.branches?.map((branch) => `${branch.name}\n`)}`);
    return this.branches;
  }

  checkout(name?: string): IBranch {
    if (!name) {
      console.info(`Current branch: ${this.currentBranch.name}`);
      return this.currentBranch;
    }
    this.currentBranch = this.addBranchHelper(name);
    return this.currentBranch;
  }

  addBranch(name: string): IBranch {
    const branchIdx = this.findIndex(name);
    /* If branch already exists changes to existing branch */
    if (branchIdx !== undefined && branchIdx !== -1 && this.branches?.length) {
      this.currentBranch = this.branches[branchIdx];
      console.info(`Current branch: ${this.currentBranch.name}`);
      return this.currentBranch;
    }
    return this.addBranchHelper(name);
  }


  deleteBranch(name: string): void {
    const branchIdx = this.findIndex(name);

    if (!branchIdx) {
      console.error('No branches found with this name');
    }

    this.branches.splice(branchIdx, 1);
    console.info(`Branch: ${name} successfully deleted`);
  }
}
