import {IGit} from "../core/IGit";


const VALID_BRANCH_VALUES = [
    "gis",
    "-m",
    "--new",
    "branch",
    "checkout"
]

export class BranchCommand {

    value: string;
    git: IGit;
    splittedValue: string[];

    constructor(value: string, git: IGit, splittedValue: string[]) {
        this.git = git;
        this.value = value;
        this.splittedValue = splittedValue;
    }

    addBranch() {
        if (
            this.value.includes("branch") &&
            !VALID_BRANCH_VALUES.includes(this.splittedValue[2])
        ) {
            const branchName = this.splittedValue[2];
            this.git.addBranch(branchName);

            return true;
        }
    }

    branchList = (
        value: string,
        git: IGit,
        splittedValue: string[]
    ): boolean | void => {
        if (
            value.includes("branch") &&
            !VALID_BRANCH_VALUES.includes(splittedValue[2])
        ) {
            git.branchList();
            return true;
        }
    };

}
