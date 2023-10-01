
import { Commit } from '../commit.ts'

test('should create a commit with correct hash and message', () => {
	const commit = new Commit('message', null);
	expect(commit.message).toEqual('message');
	expect(commit.id).toEqual(sha1(commit.message));
});
