import { Git } from "../git"

test('should return repo name properly', () => {
  const repo = new Git('first-repo');
  expect(repo.name).toEqual('first-repo');
})

test('should be able checkout default branch', () => {
	const git = new Git();
	const currentBranch = git.chekout();
	expect(currentBranch.name).toEqual('main');
}

test('should be able checkout to new branch', () => {
	const git = new Git();
	const currentBranch = git.chekout('master');
	expect(currentBranch.name).toEqual('master');
	expect(git.chekout('master').name).toEqual('master');
	git.checkout('testing');
	expect(git.chekout('testing').name).toEqual('testing');
}

test('should be able to keep commit history', () => {
	const git = new Git();
	let branch = git.branch;
	const commit = branch.commit;
	const commit1 = new Commit('commit1', commit)
	branch.commit = commit1;
	git.checkout('master');
	branch = git.branch;
	const commit2 = new Commit('commit2', commit1)
	branch.commit = commit2;
	const commit3 = new Commit('commit3', commit2)
	branch.commit = commit3;
	git.chekout('another-master');
	branch = git.branch;
	expect(branch.commit?.getCommitLog()).toEqual([
		commit3.id,
		commit2.id,
		commit1.id,
	])
})
