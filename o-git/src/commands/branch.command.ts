import {IGit} from "../core/IGit";


const VALID_BRANCH_VALUES = [
    "gis",
    "-m",
    "--new",
    "branch",
    "checkout"
]


export function addBranchCommand ( value: string, git: IGit, splittedValue: string[]): boolean {
    if (
        value.includes("branch") &&
        !VALID_BRANCH_VALUES.includes(splittedValue[2])
    ) {
        const branchName = splittedValue[2];
        git.addBranch(branchName);

        return true;
    }
}

export function deleteBranchCommand ( value: string, git: IGit, splittedValue: string[]): boolean {
    if (
        value.includes("branch") &&
        value.includes("-d") &&
        !VALID_BRANCH_VALUES.includes(splittedValue[2])
    ) {
        const branchName = splittedValue[2];
        git.addBranch(branchName);

        return true;
    }
}

export function branchListCommand ( value: string, git: IGit, splittedValue: string[]): boolean {
    if (
        value.includes("branch")
    ) {
        git.branchList();
        return true;
    }
}
