import {Git} from "../src/git";


describe('Git repository', () => {

    let git: Git;
    beforeEach(() => {
        git = new Git("first-repo");
    });


    test('should return repo name properly', () => {
        expect(git.name).toEqual('first-repo');
    })

    test('should be able checkout default branch', () => {
        const currentBranch = git.checkout();
        expect(currentBranch.name).toEqual('main');
    })

    test('should be able create branch if branch doesn\'t exist and checkout', () => {
        const newBranch = git.checkout("master");
        expect(newBranch.name).toEqual('master');
        expect(git.currentBranch.name).toEqual('master');
    })

    test('should create new branch if branch doesn\'t exist', () => {
        const newBranch = git.addBranch("master");
        expect(newBranch.name).toEqual("master")
    })


    test('should return all branches', () => {
        git.addBranch("master");
        git.addBranch("dev");
        expect(git.getBranches()).toEqual([
            {commit: null, name: "main"},
            {commit: null, name: "master"},
            {commit: null, name: "dev"}
        ])
    })

    test('delete branch if branch exist', () => {
        const branchName = "master"
        const git = new Git();
        git.addBranch(branchName);
        expect(git.getBranches()).toEqual([{commit: null, name: "main"}, {commit: null, name: branchName}])
        git.deleteBranch(branchName);
        expect(git.getBranches()).toEqual([{commit: null, name: "main"}])
    })

})
