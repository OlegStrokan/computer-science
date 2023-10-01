import { Branch } from '../branch'

test('should create branch properly', () => {
	const branch = new Branch('master', null)
	expect(branch.name).toEqual('master');
})
